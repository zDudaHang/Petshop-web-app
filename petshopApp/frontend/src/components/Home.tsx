import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../config/client";
import { SearchView } from "./SearchView";
import { AboutView } from "./AboutView"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CreatePetView } from "./CreatePetView";
import { CreatePersonView } from "./CreatePersonView";
import { UpdatePetView } from "./UpdatePetView";
import { UpdatePersonView } from "./UpdatePersonView";

import { Navbar } from "./Navbar";

export function Home(props: any) {

  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={SearchView}></Route>
          <Route exact path="/about" component={AboutView}></Route>
          <Route exact path="/createPet/:ownerId/" component={CreatePetView}></Route>
          <Route exact path="/createPerson" component={CreatePersonView}></Route>
          <Route exact path="/updatePet/:petId" component={UpdatePetView}></Route>
          <Route exact path="/updatePerson/:personId" component={UpdatePersonView}></Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}
