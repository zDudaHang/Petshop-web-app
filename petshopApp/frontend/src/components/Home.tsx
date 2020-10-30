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
import { ListPetsView } from "./ListPetsView";

export function Home(props: any) {

  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={SearchView}></Route>
          <Route path="/about" component={AboutView}></Route>
          <Route path="/createPet/:ownerId/" component={CreatePetView}></Route>
          <Route path="/createPerson" component={CreatePersonView}></Route>
          <Route path="/updatePet/:petId" component={UpdatePetView}></Route>
          <Route path="/updatePerson/:personId" component={UpdatePersonView}></Route>
          <Route path="/pets/:ownerId/" component={ListPetsView}></Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}
