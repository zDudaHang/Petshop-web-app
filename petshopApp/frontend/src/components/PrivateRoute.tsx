import React from "react";
import { Route, Redirect } from "react-router-dom";
import { LOCAL_STORAGE_AUTH_TOKEN } from "./Login/model";

const PrivateRoute = ({ component: Component, ...rest }: any) => {

  const token = window.localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
