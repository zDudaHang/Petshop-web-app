
export interface User {
    id: number;
    username: string;
    password: string;
    isAdmin: boolean;
    isVet: boolean;
}

export interface UserWithoutPassword {
    id: number;
    username: string;
    isAdmin: boolean;
    isVet: boolean;
}

// TYPE FOR MUTATION: CREATE_USER
export interface CreateUserResult {
    newUser: User;
}

export interface UsersResult {
    users: UserWithoutPassword[]
}
