import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../config/client";
import { SearchView } from "./SearchView";
import { AboutView } from "./AboutView"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CreatePetView } from "./Pet/CreatePetView";
import { CreatePersonView } from "./Customer/CreatePersonView";
import { UpdatePetView } from "./Pet/UpdatePetView";
import { UpdateCustomerView } from "./Customer/UpdateCustomerView";
import { ListPetsView } from "./ListPetsView";
import { LoginView } from "./LoginView";

export function Home() {

  return (
    <ApolloProvider client={client}>
            {/* <Navbar>
                  <UserNavbarView/>
                  <AdminNavbar/>
                  <VetNavbar/>
                  <FuncNavbar/>
            </Navbar> */}
            <Router>
              <Switch>
                <Route exact path="/" component={LoginView}/>
                <Route path="/search" component={SearchView}/>
                <Route path="/about" component={AboutView}/>
                <Route path="/createPet/:ownerId/" component={CreatePetView}/>
                <Route path="/createCustomer" component={CreatePersonView}/>
                <Route path="/updatePet/:petId" component={UpdatePetView}/>
                <Route path="/updateCustomer/:customerId" component={UpdateCustomerView}/>
                <Route path="/pets/:ownerId/" component={ListPetsView}/>
              </Switch>
            </Router>
    </ApolloProvider>
  );
}
