import { User } from "./User";

export interface UserContext {
    user: User | undefined
    // changeActualUser: ((id: number) => {}) | undefined
}