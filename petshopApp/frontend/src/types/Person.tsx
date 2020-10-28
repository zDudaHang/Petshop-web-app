// CREATE A TYPE FOR EACH QUERY OR MUTATION

export interface Person {
    id: number;
    name: string;
    birthDate: string;
}

// TYPE FOR QUERY: PERSONS
export interface PersonsResult {
    persons: Person[];
}

// TYPE FOR QUERY: PERSON
export interface PersonResult {
    person: Person;
}

// TYPE FOR MUTATION: UPDATE_PERSON
export interface UpdatePersonResult {
    updatePerson: Person;
}

// TYPE FOR MUTATION: CREATE_PERSON
export interface CreatePersonResult {
    newPerson: Person;
}
