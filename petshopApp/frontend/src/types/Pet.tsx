export interface Pet {
    id: number;
    name: string;
    birthDate: string;
}

export interface PersonPetsResult {
    personPets: Pet[];
}

export interface PetResult {
    pet: Pet;
}