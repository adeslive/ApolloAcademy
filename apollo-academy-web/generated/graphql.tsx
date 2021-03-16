import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  courses: Array<Course>;
  getCourse: Course;
  verifyLogin?: Maybe<User>;
  users: Array<User>;
  user: User;
};


export type QueryGetCourseArgs = {
  course: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Course = {
  __typename?: 'Course';
  id: Scalars['ID'];
  language: Language;
  classrooms: VirtualClassroom;
  name: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  active: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Language = {
  __typename?: 'Language';
  id: Scalars['ID'];
  name: Scalars['String'];
  code: Scalars['String'];
  active: Scalars['Boolean'];
};

export type VirtualClassroom = {
  __typename?: 'VirtualClassroom';
  id: Scalars['ID'];
  teacher: Teacher;
  course: Course;
  capacity: Scalars['Int'];
  link: Scalars['String'];
};

export type Teacher = {
  __typename?: 'Teacher';
  id: Scalars['ID'];
  user: User;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  oauth: Oauth;
  name: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Oauth = {
  __typename?: 'Oauth';
  id: Scalars['ID'];
  user: User;
  remote_id: Scalars['String'];
  active: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  getCode: CResponse;
  restore: CResponse;
  changePassword: CResponse;
  register: CResponse;
  login: CResponse;
  logout: Scalars['Boolean'];
  createCheckout: CResponse;
  pay: CResponse;
};


export type MutationGetCodeArgs = {
  email: Scalars['String'];
};


export type MutationRestoreArgs = {
  email: Scalars['String'];
  code: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationCreateCheckoutArgs = {
  classroom: Scalars['Int'];
};


export type MutationPayArgs = {
  classroom: Scalars['Int'];
};

export type CResponse = {
  __typename?: 'CResponse';
  errors?: Maybe<Array<ErrorField>>;
  user?: Maybe<User>;
  stripeID?: Maybe<Scalars['String']>;
  receipt?: Maybe<Receipt>;
};

export type ErrorField = {
  __typename?: 'ErrorField';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Receipt = {
  __typename?: 'Receipt';
  id: Scalars['ID'];
  virtualID: Scalars['Int'];
  stripeID: Scalars['String'];
  amount?: Maybe<Scalars['Float']>;
  user: User;
  createdAt: Scalars['String'];
};

export type RegularClassroomFragment = (
  { __typename?: 'VirtualClassroom' }
  & Pick<VirtualClassroom, 'id' | 'capacity' | 'link'>
  & { teacher: (
    { __typename?: 'Teacher' }
    & Pick<Teacher, 'id'>
    & { user: (
      { __typename?: 'User' }
      & RegularUserFragment
    ) }
  ) }
);

export type RegularCourseFragment = (
  { __typename?: 'Course' }
  & Pick<Course, 'id' | 'name' | 'description' | 'active' | 'createdAt' | 'price'>
  & { language: (
    { __typename?: 'Language' }
    & Pick<Language, 'name' | 'code' | 'active'>
  ), classrooms: (
    { __typename?: 'VirtualClassroom' }
    & RegularClassroomFragment
  ) }
);

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'email'>
);

export type ChangePasswordMutationVariables = Exact<{
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'CResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorField' }
      & Pick<ErrorField, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )> }
  ) }
);

export type CreateCheckoutSessionMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateCheckoutSessionMutation = (
  { __typename?: 'Mutation' }
  & { createCheckout: (
    { __typename?: 'CResponse' }
    & Pick<CResponse, 'stripeID'>
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorField' }
      & Pick<ErrorField, 'field' | 'message'>
    )>> }
  ) }
);

export type GetcodeMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetcodeMutation = (
  { __typename?: 'Mutation' }
  & { getCode: (
    { __typename?: 'CResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorField' }
      & Pick<ErrorField, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )> }
  ) }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'CResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorField' }
      & Pick<ErrorField, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'CResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorField' }
      & Pick<ErrorField, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )> }
  ) }
);

export type RestoreMutationVariables = Exact<{
  code: Scalars['String'];
  email: Scalars['String'];
}>;


export type RestoreMutation = (
  { __typename?: 'Mutation' }
  & { restore: (
    { __typename?: 'CResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorField' }
      & Pick<ErrorField, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )> }
  ) }
);

export type GetCourseQueryVariables = Exact<{
  course: Scalars['Int'];
}>;


export type GetCourseQuery = (
  { __typename?: 'Query' }
  & { getCourse: (
    { __typename?: 'Course' }
    & RegularCourseFragment
  ) }
);

export type VerifyLoginQueryVariables = Exact<{ [key: string]: never; }>;


export type VerifyLoginQuery = (
  { __typename?: 'Query' }
  & { verifyLogin?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  name
  email
}
    `;
export const RegularClassroomFragmentDoc = gql`
    fragment RegularClassroom on VirtualClassroom {
  id
  teacher {
    id
    user {
      ...RegularUser
    }
  }
  capacity
  link
}
    ${RegularUserFragmentDoc}`;
export const RegularCourseFragmentDoc = gql`
    fragment RegularCourse on Course {
  id
  name
  description
  active
  createdAt
  price
  language {
    name
    code
    active
  }
  classrooms {
    ...RegularClassroom
  }
}
    ${RegularClassroomFragmentDoc}`;
export const ChangePasswordDocument = gql`
    mutation changePassword($password: String!, $email: String!) {
  changePassword(password: $password, email: $email) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useChangePasswordMutation() {
  return Urql.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument);
};
export const CreateCheckoutSessionDocument = gql`
    mutation createCheckoutSession {
  createCheckout(classroom: 1) {
    errors {
      field
      message
    }
    stripeID
  }
}
    `;

export function useCreateCheckoutSessionMutation() {
  return Urql.useMutation<CreateCheckoutSessionMutation, CreateCheckoutSessionMutationVariables>(CreateCheckoutSessionDocument);
};
export const GetcodeDocument = gql`
    mutation getcode($email: String!) {
  getCode(email: $email) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useGetcodeMutation() {
  return Urql.useMutation<GetcodeMutation, GetcodeMutationVariables>(GetcodeDocument);
};
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(password: $password, email: $email) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($name: String!, $email: String!, $password: String!) {
  register(name: $name, email: $email, password: $password) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const RestoreDocument = gql`
    mutation restore($code: String!, $email: String!) {
  restore(code: $code, email: $email) {
    errors {
      field
      message
    }
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useRestoreMutation() {
  return Urql.useMutation<RestoreMutation, RestoreMutationVariables>(RestoreDocument);
};
export const GetCourseDocument = gql`
    query getCourse($course: Int!) {
  getCourse(course: $course) {
    ...RegularCourse
  }
}
    ${RegularCourseFragmentDoc}`;

export function useGetCourseQuery(options: Omit<Urql.UseQueryArgs<GetCourseQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetCourseQuery>({ query: GetCourseDocument, ...options });
};
export const VerifyLoginDocument = gql`
    query VerifyLogin {
  verifyLogin {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

export function useVerifyLoginQuery(options: Omit<Urql.UseQueryArgs<VerifyLoginQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<VerifyLoginQuery>({ query: VerifyLoginDocument, ...options });
};