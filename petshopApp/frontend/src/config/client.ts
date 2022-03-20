import {
  ApolloClient,
  ApolloError,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { onError } from "@apollo/client/link/error"
import { FetchResult } from "apollo-boost"
import {
  RefreshTokenDocument,
  RefreshTokenMutation,
} from "../generated/graphql"
import {
  cleanUserLocalStorage,
  getUserInLocalStorage,
  insertUserInLocalStorage,
} from "../util/local-storage"
import browserHistory from "./history"
import {
  EXPIRED_ACCESS_TOKEN_STATUS_CODE,
  EXPIRED_REFRESH_TOKEN_STATUS_CODE,
} from "./model"

const httpLink = createHttpLink({
  uri: "/graphql",
})

const authLink = setContext((_, { headers }) => {
  const user = getUserInLocalStorage()
  return {
    headers: {
      ...headers,
      Authorization: user?.accessToken ? `Bearer ${user?.accessToken}` : "",
    },
  }
})

const errorLink = onError(({ networkError }) => {
  if (
    networkError &&
    "statusCode" in networkError &&
    networkError.statusCode === EXPIRED_ACCESS_TOKEN_STATUS_CODE
  ) {
    const user = getUserInLocalStorage()
    cleanUserLocalStorage()
    if (user) {
      client
        .mutate({
          mutation: RefreshTokenDocument,
          variables: {
            input: { refreshToken: user.refreshToken, userId: user.id },
          },
        })
        .then(({ data }: FetchResult<RefreshTokenMutation>) => {
          if (data?.refreshToken) {
            const newAuthTokens = data?.refreshToken
            insertUserInLocalStorage({
              refreshToken: newAuthTokens?.refreshToken,
              accessToken: newAuthTokens.accessToken,
              id: user.id,
            })
          }
        })
        .catch(({ graphQLErrors }: ApolloError) => {
          const isRefreshTokenExpired = graphQLErrors.some(
            (error) =>
              error.extensions &&
              "codeError" in error.extensions &&
              error.extensions.codeError === EXPIRED_REFRESH_TOKEN_STATUS_CODE
          )
          if (isRefreshTokenExpired) {
            browserHistory.push("/")
          }
        })
    }
  }
})

export const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache(),
})
