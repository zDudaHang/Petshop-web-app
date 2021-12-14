import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { CreateUserView } from "./User/CreateUserView";
import { LoginView } from "./Login/LoginView";
import PrivateRoute from "./PrivateRoute";
import { SearchCustomerView } from "./SearchCustomerView";

export function Home() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginView} />
          <Route exact path="/createUser" component={CreateUserView} />
          <PrivateRoute path="/searchCustomer" component={SearchCustomerView} />
        </Switch>
      </Router>
    </>
  );
}
