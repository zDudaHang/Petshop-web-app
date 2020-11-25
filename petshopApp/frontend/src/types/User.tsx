
export interface User {
    id: number;
    username: string;
    password: string;
    isAdmin: boolean;
    isVet: boolean;
    name: string;
    salary: number;
}

export interface UserWithoutPassword {
    id: number;
    username: string;
    isAdmin: boolean;
    isVet: boolean;
    name: string;
    salary: number;
}

// TYPE FOR MUTATION: CREATE_USER
export interface CreateUserResult {
    newUser: User;
}

export interface UsersResult {
    users: UserWithoutPassword[]
}

export interface UserResult {
    user: UserWithoutPassword;
}

export interface VetsResult {
    vets: UserWithoutPassword[];
}

