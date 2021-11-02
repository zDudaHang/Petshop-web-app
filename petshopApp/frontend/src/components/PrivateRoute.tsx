import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../AuthContext";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { user } = useContext(AuthContext);

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        user!.isAdmin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
