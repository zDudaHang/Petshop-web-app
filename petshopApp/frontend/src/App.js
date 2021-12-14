import React from "react";
import { Home } from "./components/Home";
import { ApolloProvider } from "@apollo/client";
import { client } from "./config/client";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    </div>
  );
}

export default App;
