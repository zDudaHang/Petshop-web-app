import React from "react";
import { Home } from "./components/Home";
import { AuthContext } from "./AuthContext"

import "./styles/App.css";

function App() {
  const users = [
    {
      id: 0,
      username: "Admin",
      password: "admin123",
      isAdmin: true,
      isVet: false,
    },

    {
      id: 1,
      username: "Employee",
      password: "employee123",
      isAdmin: false,
      isVet: false,
    },

    {
      id: 2,
      username: "Vet",
      password: "vet123",
      isAdmin: false,
      isVet: true,
    }
  ]

  let actualUser = users[0]

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
