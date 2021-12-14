import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Instant: any;
  LocalDate: any;
  LocalDateTime: any;
  LocalTime: any;
  Long: any;
};

export type Appointment = {
  __typename?: 'Appointment';
  date: Scalars['String'];
  id: Scalars['Int'];
  pet: Pet;
  time: Scalars['String'];
  user: User;
};

export type AppointmentQueryInput = {
  time?: InputMaybe<Scalars['LocalDateTime']>;
  userId?: InputMaybe<Scalars['Long']>;
};

export type Customer = {
  __typename?: 'Customer';
  birthDate: Scalars['String'];
  debt: Scalars['Float'];
  id: Scalars['Int'];
  name: Scalars['String'];
  pets?: Maybe<Array<Maybe<Pet>>>;
};

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addDebt?: Maybe<Customer>;
  deleteCustomer?: Maybe<Scalars['Boolean']>;
  deletePet?: Maybe<Scalars['Boolean']>;
  login?: Maybe<SigninPayload>;
  newAppointment?: Maybe<Appointment>;
  newCustomer: Customer;
  newPet?: Maybe<Pet>;
  newUser?: Maybe<User>;
  removeDebt?: Maybe<Customer>;
  updateCustomer?: Maybe<Customer>;
  updatePet: Pet;
};


export type MutationAddDebtArgs = {
  id: Scalars['Int'];
  value: Scalars['String'];
};


export type MutationDeleteCustomerArgs = {
  id: Scalars['Int'];
};


export type MutationDeletePetArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationNewAppointmentArgs = {
  date: Scalars['String'];
  petId: Scalars['Int'];
  time: Scalars['String'];
  userId: Scalars['Int'];
};


export type MutationNewCustomerArgs = {
  birthDate: Scalars['String'];
  name: Scalars['String'];
};


export type MutationNewPetArgs = {
  birthDate: Scalars['String'];
  name: Scalars['String'];
  ownerId: Scalars['Int'];
  speciesId: Scalars['Int'];
};


export type MutationNewUserArgs = {
  isAdmin: Scalars['Boolean'];
  isVet: Scalars['Boolean'];
  name: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRemoveDebtArgs = {
  id: Scalars['Int'];
  value: Scalars['Float'];
};


export type MutationUpdateCustomerArgs = {
  id: Scalars['Int'];
  newName: Scalars['String'];
};


export type MutationUpdatePetArgs = {
  id: Scalars['Int'];
  newName: Scalars['String'];
};

export type Pet = {
  __typename?: 'Pet';
  birthDate: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  owner: Customer;
  species: Species;
};

export type Query = {
  __typename?: 'Query';
  allSpecies?: Maybe<Array<Maybe<Species>>>;
  appointment?: Maybe<Appointment>;
  appointments?: Maybe<Array<Maybe<Appointment>>>;
  customer?: Maybe<Customer>;
  customerPets?: Maybe<Array<Maybe<Pet>>>;
  customers?: Maybe<Array<Maybe<Customer>>>;
  customersByNameLike?: Maybe<Array<Maybe<Customer>>>;
  dayAppointments?: Maybe<Array<Maybe<Appointment>>>;
  pet?: Maybe<Pet>;
  pets?: Maybe<Array<Maybe<Pet>>>;
  petsByNameLike?: Maybe<Array<Maybe<Pet>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryAppointmentArgs = {
  id: Scalars['Int'];
};


export type QueryCustomerArgs = {
  id: Scalars['Int'];
};


export type QueryCustomerPetsArgs = {
  id: Scalars['Int'];
};


export type QueryCustomersByNameLikeArgs = {
  name: Scalars['String'];
};


export type QueryDayAppointmentsArgs = {
  date: Scalars['String'];
  userId: Scalars['Int'];
};


export type QueryPetArgs = {
  id: Scalars['Int'];
};


export type QueryPetsByNameLikeArgs = {
  name: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type SigninPayload = {
  __typename?: 'SigninPayload';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Species = {
  __typename?: 'Species';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  isAdmin: Scalars['Boolean'];
  isVet: Scalars['Boolean'];
  name: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'SigninPayload', token?: string | null | undefined, user?: { __typename?: 'User', id: number, username: string } | null | undefined } | null | undefined };


export const LoginDocument = gql`
    mutation login($input: LoginInput!) {
  login(input: $input) {
    token
    user {
      id
      username
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;