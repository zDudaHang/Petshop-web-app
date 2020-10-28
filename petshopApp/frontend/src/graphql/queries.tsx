import { gql } from "@apollo/client";

export const PERSONS = gql`
  query Persons {
    persons {
      id
      name
      birthDate
    }
  }
`;

export const PERSON = gql`
  query Person($id: Int!) {
    person(id: $id) {
      id
      name
      birthDate
    }
  }
`;

export const PERSON_PETS = gql`
query PersonPets($id: Int!) {
  personPets(id: $id) {
    id
    name
    birthDate
  }
}
`;

export const PETS = gql`
  query Pets {
    pets {
      id
      name
      birthDate
      owner {
          id
          name
          birthDate
      }
    }
  }
`;

export const PET = gql`
  query Pet($id: Int!) {
    pet(id: $id) {
      id
      name
      birthDate
    }
  }
`;

