import { gql } from "@apollo/client";

export const CREATE_CUSTOMER = gql`
    mutation CreateCustomer($name: String!, $birthDate: String!) {
        newCustomer(name: $name, birthDate: $birthDate ) {
            id
            name
            birthDate
        }
    }
`;

export const UPDATE_CUSTOMER = gql`
    mutation UpdateCustomer($id: Int!, $newName: String!) {
        updateCustomer(id: $id, newName: $newName) {
            id
            name
            birthDate
        }
    }
`;

export const DELETE_CUSTOMER = gql`
    mutation DeleteCustomer($id: Int!) {
        deleteCustomer(id: $id)
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

export const CREATE_USER = gql`
    mutation CreateUser($username: String!, $password: String!, $isAdmin: Boolean!, $isVet: Boolean!) {
        newUser(username: $username, password: $password, isAdmin: $isAdmin, isVet: $isVet ) {
            id
            username
            password
            isAdmin
            isVet
        }
    }
`;

export const ADD_DEBT = gql`
mutation AddDebt($id: Int!, $value: String!) {
    addDebt(id: $id, value: $value) {
        id
        name
        birthDate
        debt
    }
}
`;