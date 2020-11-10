import React, {useState, useEffect} from "react";
import { Home } from "./components/Home";
import { AuthContext } from "./AuthContext"
import { Navbar } from "./components/Navbar/Navbar";
import { UserNavbarView } from "./components/Navbar/UserNavbarView";
import { AdminNavbar } from "./components/Navbar/AdminNavbar";
import { FuncNavbar } from "./components/Navbar/FuncNavbar";
import { VetNavbar } from "./components/Navbar/VetNavbar";

import "./styles/App.css";

function App() {
  const [user, setUser] = useState({});

  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    console.log(`[APP] ${isLoggedIn ? "ON" : "OFF"}`)
    console.log(`[APP] IsAdmin? ${user?.isAdmin}`)
  }, [isLoggedIn, user]);
  

  const login = (user) => {
    console.log("LOGIN")
    setUser(user)
    setLoggedIn(true)
  }

  const logout = () => {
    console.log("LOGOUT")
    setLoggedIn(false);
    setUser({})
  }

  const value = {
    isLoggedIn: isLoggedIn,
    user: user,
    login: login,
    logout: logout
  }

  return (
    <div className="App">
      <AuthContext.Provider value={value}>
        <Navbar>
                  <UserNavbarView user={user}/>
                  <AdminNavbar/>
                  <VetNavbar/>
                  <FuncNavbar/>
        </Navbar>
        <Home/>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
