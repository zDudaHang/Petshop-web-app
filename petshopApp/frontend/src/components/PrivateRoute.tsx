import React from "react"
import { RouteProps } from "react-router"
import { Route, Redirect } from "react-router-dom"
import { getUserInLocalStorage } from "../util/local-storage"

export function PrivateRoute(props: RouteProps) {
  const user = getUserInLocalStorage()
  return user?.accessToken ? <Route {...props} /> : <Redirect to="/" />
}
