import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { LOCAL_STORAGE_AUTH_TOKEN } from "../components/Login/model";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // pega o token de autenticacao que foi guardado no local storage
  const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);
  // coloca no header de autorizacao
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
