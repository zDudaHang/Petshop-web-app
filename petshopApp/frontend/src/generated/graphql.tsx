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
};

export enum AuthenticationError {
  ExpiredAccessToken = 'EXPIRED_ACCESS_TOKEN',
  ExpiredRefreshToken = 'EXPIRED_REFRESH_TOKEN'
}

export type CreateUserInput = {
  name: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
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
  login: SigninPayload;
  newCustomer: Customer;
  newPet?: Maybe<Pet>;
  newUser?: Maybe<User>;
  refreshToken: SigninPayload;
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
  input: CreateUserInput;
};


export type MutationRefreshTokenArgs = {
  input: RefreshTokenInput;
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
  customer?: Maybe<Customer>;
  customerPets?: Maybe<Array<Maybe<Pet>>>;
  customers?: Maybe<Array<Maybe<Customer>>>;
  customersByNameLike?: Maybe<Array<Maybe<Customer>>>;
  pet?: Maybe<Pet>;
  pets?: Maybe<Array<Maybe<Pet>>>;
  petsByNameLike?: Maybe<Array<Maybe<Pet>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
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


export type QueryPetArgs = {
  id: Scalars['Int'];
};


export type QueryPetsByNameLikeArgs = {
  name: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type RefreshTokenInput = {
  refreshToken: Scalars['String'];
};

export type SigninPayload = {
  __typename?: 'SigninPayload';
  accessToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
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
  name: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'SigninPayload', accessToken?: string | null | undefined, refreshToken?: string | null | undefined, user?: { __typename?: 'User', id: number, username: string } | null | undefined } };

export type RefreshTokenMutationVariables = Exact<{
  input: RefreshTokenInput;
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'SigninPayload', accessToken?: string | null | undefined, refreshToken?: string | null | undefined } };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', newUser?: { __typename?: 'User', id: number, username: string } | null | undefined };


export const LoginDocument = gql`
    mutation login($input: LoginInput!) {
  login(input: $input) {
    accessToken
    refreshToken
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
export const RefreshTokenDocument = gql`
    mutation refreshToken($input: RefreshTokenInput!) {
  refreshToken(input: $input) {
    accessToken
    refreshToken
  }
}
    `;
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const CreateUserDocument = gql`
    mutation createUser($input: CreateUserInput!) {
  newUser(input: $input) {
    id
    username
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;