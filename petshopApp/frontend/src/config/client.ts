import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { onError } from "@apollo/client/link/error"
import { LOCAL_STORAGE_AUTH_TOKEN } from "../components/Login/model"

const httpLink = createHttpLink({
  uri: "/graphql",
})

const authLink = setContext((_, { headers }) => {
  // pega o token de autenticacao que foi guardado no local storage
  const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN)
  // coloca no header de autorizacao
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  }
})

const errorLink = onError((a) => {
  debugger
  // console.log(response)
  // if (graphQLErrors) {
  //   graphQLErrors.forEach(({ message, extensions }) => {
  //     console.log(message)
  //     console.log(extensions)
  //   })
  // }
  // if (networkError) console.log(networkError)
})

export const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache(),
})
