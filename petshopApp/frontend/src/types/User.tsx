
export interface User {
    id: number;
    username: string;
    password: string;
    isAdmin: boolean;
    isVet: boolean;
}

// TYPE FOR QUERY: USER_AUTH
export interface UserResult {
    auth: User;
}
