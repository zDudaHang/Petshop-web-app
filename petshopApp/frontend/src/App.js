import React from "react";
import { Home } from "./components/Home";
import { AuthContext } from "./AuthContext"

import "./styles/App.css";

function App() {
  const users = [
    {
      id: 3,
      username: "ana.m.h",
      password: "ana123",
      isAdmin: true,
      isVet: false,
      name: "Ana Maria Hillesheim"
    },

    {
      id: 1,
      username: "bruna.ss",
      password: "bruna123",
      isAdmin: false,
      isVet: false,
      name: "Bruna da Silva Santos"
    },

    {
      id: 2,
      username: "luiza.m.lopez",
      password: "luiza123",
      isAdmin: false,
      isVet: true,
      name: "Luiza Mello Lopez"
    }
  ]

  let actualUser = users[2]

  const value = {
    user: actualUser
  }

  return (
    <div className="App">
      <AuthContext.Provider value={ value }>
        <Home/>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
