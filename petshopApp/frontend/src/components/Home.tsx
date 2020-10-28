import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../config/client";
import { BasicView } from "./BasicView";

export function Home(props: any) {
  return (
    <ApolloProvider client={client}>
      <button onClick={() => console.log(`Adicionar um pet`)}>Adicionar Pet</button>
      <button onClick={() => console.log(`Adicionar uma pessoa`)}>Adicionar uma pessoa</button>
      <BasicView />
    </ApolloProvider>
  );
}
