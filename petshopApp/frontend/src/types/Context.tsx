import { User } from "./User"

export interface UserContext {
    isLoggedIn: boolean,
    user?: User,
    login?: (user: User) => {},
    logout?: () => {}
}