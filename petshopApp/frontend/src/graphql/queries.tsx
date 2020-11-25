import { gql } from "@apollo/client";

export const CUSTOMERS = gql`
  query Customers {
    customers {
      id
      name
      birthDate
      debt
    }
  }
`;

export const CUSTOMER = gql`
  query customer($id: Int!) {
    customer(id: $id) {
      id
      name
      birthDate
      debt
    }
  }
`;

export const CUSTOMER_PETS = gql`
query CustomerPets($id: Int!) {
  customerPets(id: $id) {
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


export const PETS_BY_NAME_LIKE = gql`
  query PetsByNameLike($name: String!) {
    petsByNameLike(name: $name) {
      id
      name
      birthDate
    }
  }
`;

export const CUSTOMERS_BY_NAME_LIKE = gql`
  query CustomersByNameLike($name: String!) {
    customersByNameLike(name: $name) {
      id
      name
      birthDate
      debt
    }
  }
`;

export const USER = gql`
query user($id: Int!) {
  user(id: $id) {
    id
    username
    password
    isAdmin
    isVet
  }
}
`;

export const USER_AUTH = gql`
  query auth($username: String!, $password: String!) {
    auth(username: $username, password: $password) {
      id
      username
      password
      isAdmin
      isVet
    }
  }
`;


export const USERS = gql`
query users {
  users {
    id
    username
    isAdmin
    isVet
    name
    salary
  }
}
`;

export const DAY_APPOINTMENT = gql`
query dayAppointments($userId: Int!, $date: String!) {
  dayAppointments(userId: $userId, date: $date) {
    id
    time
    date
    pet {
      id
      name
    }
    user {
      id
      username
    }
  }
}
`;


export const VETS = gql`
query vets {
  vets {
    id
    name
  }
}
`;

export const SPECIES = gql`
query allSpecies {
  allSpecies {
    id
    name
  }
}
`;