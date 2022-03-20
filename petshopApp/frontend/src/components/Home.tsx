import React from "react"
import { Router, Switch, Route } from "react-router-dom"

import { CreateUserView } from "./User/CreateUserView"
import { LoginView } from "./Login/LoginView"
import { SearchCustomerView } from "./SearchCustomerView"
import browserHistory from "../config/history"
import { PrivateRoute } from "./PrivateRoute"

export function Home() {
  return (
    <>
      <Router history={browserHistory}>
        <Switch>
          <Route exact path="/" component={LoginView} />
          <Route exact path="/createUser" component={CreateUserView} />
          <PrivateRoute path="/searchCustomer" component={SearchCustomerView} />
        </Switch>
      </Router>
    </>
  )
}
