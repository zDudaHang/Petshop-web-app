import { createContext } from "react";
import { UserContext } from "./types/Context";

export const AuthContext = createContext<UserContext>({isLoggedIn: false});

export default AuthContext;
