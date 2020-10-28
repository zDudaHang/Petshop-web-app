import { gql } from "@apollo/client";

export const CREATE_PERSON = gql`
    mutation CreatePerson($name: String!, $birthDate: String!) {
        newPerson(name: $name, birthDate: $birthDate ) {
            id
            name
            birthDate
        }
    }
`;

export const UPDATE_PERSON = gql`
    mutation UpdatePerson($id: Int!, $newName: String!) {
        updatePerson(id: $id, newName: $newName) {
            id
            name
            birthDate
        }
    }
`;

export const DELETE_PERSON = gql`
    mutation DeletePerson($id: Int!) {
        deletePerson(id: $id)
    }
`;

export const CREATE_PET = gql`
  mutation CreatePet($name: String!, $birthDate: String!, $ownerId: Int!) {
      newPet(name: $name, birthDate: $birthDate, ownerId: $ownerId) {
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

export const UPDATE_PET = gql`
    mutation UpdatePet($id: Int!, $newName: String!) {
        updatePet(id: $id, newName: $newName) {
            id
            name
            birthDate
        }
    }
`;

export const DELETE_PET = gql`
    mutation DeletePet($id: Int!) {
        deletePet(id: $id)
    }
`;