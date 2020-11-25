// CREATE A TYPE FOR EACH QUERY OR MUTATION

// BASIC 
export interface Pet {
    id: number;
    name: string;
    birthDate: string;
}

// TYPE FOR QUERY: CUSTOMER_PETS
export interface CustomerPetsResult {
    customerPets: Pet[];
}

export interface PetsByNameLikeResult {
    petsByNameLike: Pet[];
}

// TYPE FOR QUERY: PET
export interface PetResult {
    pet: Pet;
}

// TYPE FOR MUTATION: UPDATE_PET
export interface UpdatePetResult {
    updatePet: Pet;
}

// TYPE FOR MUTATION: CREATE_PET
export interface CreatePetResult {
    newPet: Pet;
}

export interface PetsResult {
    pets: Pet[];
}