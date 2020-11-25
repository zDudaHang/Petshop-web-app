import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../config/client";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Views:
import { SearchCustomerView } from "./SearchCustomerView";
import { CreatePetView } from "./Pet/CreatePetView";
import { CreateCustomerView } from "./Customer/CreateCustomerView";
import { UpdatePetView } from "./Pet/UpdatePetView";
import { UpdateCustomerView } from "./Customer/UpdateCustomerView";
import { ListPetsView } from "./Pet/ListPetsView";

// Navbar:
import { Navbar } from "./Navbar/Navbar";
import { UserNavbarView } from "./Navbar/UserNavbarView";
import { AdminNavbar } from "./Navbar/AdminNavbar";
import { VetNavbar } from "./Navbar/VetNavbar";
import { SearchPetView } from "./SearchPetView";
import { CreateUserView } from "./User/CreateUserView";
import PrivateRoute from "./PrivateRoute";
import { AddDebtView } from "./Customer/AddDebtView";
import { AboutView } from "./Infos/AboutView";
import { ListUserView } from "./User/ListUserView";
import { AppointmentsView } from "./User/Vet/AppointmentsView";
import { AddApointmentView } from "./User/Vet/AddApointmentView";

export function Home() {

  return (
    <ApolloProvider client={client}>
            <Navbar>
                  <UserNavbarView/>
                  <AdminNavbar/>
                  <VetNavbar/>
            </Navbar>
            <Router>
              <Switch>
                <Route exact path="/" component={SearchCustomerView}/>

                <Route path="/searchCustomer" component={SearchCustomerView}/>
                <Route path="/searchPet" component={SearchPetView}/>
                <PrivateRoute path="/users" component={ListUserView}/>

                <Route path="/createPet/:ownerId/" component={CreatePetView}/>
                <Route path="/createCustomer" component={CreateCustomerView}/>
                <PrivateRoute path="/createUser" component={CreateUserView}/>
                <Route path="/addAppointment" component={AddApointmentView}/>

                <Route path="/addDebt/:customerId" component={AddDebtView}/>

                <Route path="/updatePet/:petId" component={UpdatePetView}/>
                <Route path="/updateCustomer/:customerId" component={UpdateCustomerView}/>

                <Route path="/pets/:ownerId/" component={ListPetsView}/>
                <Route path="/calendar/:userId" component={AppointmentsView}/>
                
                <Route path="/about" component={AboutView}/>
              </Switch>
            </Router>
    </ApolloProvider>
  );
}
