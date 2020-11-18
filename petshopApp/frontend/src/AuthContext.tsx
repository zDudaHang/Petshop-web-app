import { createContext } from "react";
import { UserContext } from "./types/Context";

export const AuthContext = createContext<UserContext>({user: undefined});

export default AuthContext;
