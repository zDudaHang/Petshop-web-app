export interface Person {
    id: number;
    name: string;
    birthDate: string;
}

export interface PersonsResult {
    persons: Person[];
}

export interface PersonResult {
    person: Person;
}