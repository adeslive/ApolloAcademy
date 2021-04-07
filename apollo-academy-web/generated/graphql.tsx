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
  classrooms: Array<VirtualClassroom>;
  classroomsByCourse: Array<VirtualClassroom>;
  classroom: VirtualClassroom;
  courses: Array<Course>;
  isPaid: Scalars['Boolean'];
  teacher: Teacher;
  verifyLogin?: Maybe<User>;
  users: Array<User>;
  user: User;
  mycourses: Array<Course>;
};


export type QueryClassroomsByCourseArgs = {
  id: Scalars['ID'];
};


export type QueryClassroomArgs = {
  id: Scalars['ID'];
};


export type QueryIsPaidArgs = {
  id: Scalars['ID'];
};


export type QueryTeacherArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type VirtualClassroom = {
  __typename?: 'VirtualClassroom';
  id: Scalars['ID'];
  description: Scalars['String'];
  teacher: Teacher;
  course: Course;
  capacity: Scalars['Int'];
  link: Scalars['String'];
};

export type Teacher = {
  __typename?: 'Teacher';
  id: Scalars['ID'];
  user: User;
  classrooms: Array<VirtualClassroom>;
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

export type Course = {
  __typename?: 'Course';
  id?: Maybe<Scalars['ID']>;
  language: Language;
  classrooms: Array<VirtualClassroom>;
  name: Scalars['String'];
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
  active?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  course: Course;
  getPayments: CResponse;
  createCheckout: CResponse;
  pay: CResponse;
  getCode: CResponse;
  restore: CResponse;
  changePassword: CResponse;
  register: CResponse;
  login: CResponse;
  logout: Scalars['Boolean'];
};


export type MutationCourseArgs = {
  id: Scalars['Int'];
};


export type MutationCreateCheckoutArgs = {
  classroom: Scalars['ID'];
};


export type MutationPayArgs = {
  key: Scalars['String'];
  classroom: Scalars['ID'];
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
  virtual: VirtualClassroom;
  key: Scalars['String'];
  amount?: Maybe<Scalars['Float']>;
  paid: Scalars['Boolean'];
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
  & Pick<Course, 'id' | 'name' | 'price'>
  & { language: (
    { __typename?: 'Language' }
    & Pick<Language, 'id' | 'name' | 'code'>
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

export type CreateCheckoutSessionMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


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

export type PayMutationVariables = Exact<{
  id: Scalars['ID'];
  key: Scalars['String'];
}>;


export type PayMutation = (
  { __typename?: 'Mutation' }
  & { pay: (
    { __typename?: 'CResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorField' }
      & Pick<ErrorField, 'field' | 'message'>
    )>>, receipt?: Maybe<(
      { __typename?: 'Receipt' }
      & Pick<Receipt, 'id' | 'amount'>
    )> }
  ) }
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

export type GetClassroomQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetClassroomQuery = (
  { __typename?: 'Query' }
  & { classroom: (
    { __typename?: 'VirtualClassroom' }
    & Pick<VirtualClassroom, 'id' | 'link' | 'description' | 'capacity'>
    & { course: (
      { __typename?: 'Course' }
      & Pick<Course, 'id' | 'name' | 'price'>
      & { language: (
        { __typename?: 'Language' }
        & Pick<Language, 'id' | 'name' | 'code'>
      ) }
    ), teacher: (
      { __typename?: 'Teacher' }
      & Pick<Teacher, 'id'>
      & { user: (
        { __typename?: 'User' }
        & RegularUserFragment
      ) }
    ) }
  ) }
);

export type GetClassroomsByCourseQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetClassroomsByCourseQuery = (
  { __typename?: 'Query' }
  & { classroomsByCourse: Array<(
    { __typename?: 'VirtualClassroom' }
    & Pick<VirtualClassroom, 'id' | 'description' | 'capacity' | 'link'>
    & { course: (
      { __typename?: 'Course' }
      & RegularCourseFragment
    ), teacher: (
      { __typename?: 'Teacher' }
      & Pick<Teacher, 'id'>
      & { user: (
        { __typename?: 'User' }
        & RegularUserFragment
      ) }
    ) }
  )> }
);

export type GetClassroomsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClassroomsQuery = (
  { __typename?: 'Query' }
  & { classrooms: Array<(
    { __typename?: 'VirtualClassroom' }
    & Pick<VirtualClassroom, 'id' | 'link' | 'description' | 'capacity'>
    & { course: (
      { __typename?: 'Course' }
      & Pick<Course, 'id' | 'name' | 'price'>
      & { language: (
        { __typename?: 'Language' }
        & Pick<Language, 'id' | 'name' | 'code'>
      ) }
    ), teacher: (
      { __typename?: 'Teacher' }
      & Pick<Teacher, 'id'>
      & { user: (
        { __typename?: 'User' }
        & RegularUserFragment
      ) }
    ) }
  )> }
);

export type GetTeacherQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetTeacherQuery = (
  { __typename?: 'Query' }
  & { teacher: (
    { __typename?: 'Teacher' }
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'email'>
    ), classrooms: Array<(
      { __typename?: 'VirtualClassroom' }
      & Pick<VirtualClassroom, 'id' | 'link' | 'description' | 'capacity'>
      & { course: (
        { __typename?: 'Course' }
        & Pick<Course, 'id' | 'name' | 'price'>
        & { language: (
          { __typename?: 'Language' }
          & Pick<Language, 'id' | 'name' | 'code'>
        ) }
      ) }
    )> }
  ) }
);

export type GetUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & RegularUserFragment
  ) }
);

export type IsPaidQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type IsPaidQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'isPaid'>
);

export type MyCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type MyCoursesQuery = (
  { __typename?: 'Query' }
  & { mycourses: Array<(
    { __typename?: 'Course' }
    & Pick<Course, 'id' | 'name' | 'price'>
    & { language: (
      { __typename?: 'Language' }
      & Pick<Language, 'id' | 'name' | 'code'>
    ), classrooms: Array<(
      { __typename?: 'VirtualClassroom' }
      & Pick<VirtualClassroom, 'id' | 'link' | 'description' | 'capacity'>
      & { teacher: (
        { __typename?: 'Teacher' }
        & Pick<Teacher, 'id'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'id' | 'name' | 'email'>
        ) }
      ) }
    )> }
  )> }
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
  price
  language {
    id
    name
    code
  }
}
    `;
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
    mutation createCheckoutSession($id: ID!) {
  createCheckout(classroom: $id) {
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
export const PayDocument = gql`
    mutation pay($id: ID!, $key: String!) {
  pay(classroom: $id, key: $key) {
    errors {
      field
      message
    }
    receipt {
      id
      amount
    }
  }
}
    `;

export function usePayMutation() {
  return Urql.useMutation<PayMutation, PayMutationVariables>(PayDocument);
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
export const GetClassroomDocument = gql`
    query getClassroom($id: ID!) {
  classroom(id: $id) {
    id
    link
    description
    capacity
    course {
      id
      name
      price
      language {
        id
        name
        code
      }
    }
    teacher {
      id
      user {
        ...RegularUser
      }
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useGetClassroomQuery(options: Omit<Urql.UseQueryArgs<GetClassroomQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetClassroomQuery>({ query: GetClassroomDocument, ...options });
};
export const GetClassroomsByCourseDocument = gql`
    query getClassroomsByCourse($id: ID!) {
  classroomsByCourse(id: $id) {
    id
    description
    capacity
    link
    course {
      ...RegularCourse
    }
    teacher {
      id
      user {
        ...RegularUser
      }
    }
  }
}
    ${RegularCourseFragmentDoc}
${RegularUserFragmentDoc}`;

export function useGetClassroomsByCourseQuery(options: Omit<Urql.UseQueryArgs<GetClassroomsByCourseQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetClassroomsByCourseQuery>({ query: GetClassroomsByCourseDocument, ...options });
};
export const GetClassroomsDocument = gql`
    query getClassrooms {
  classrooms {
    id
    link
    description
    capacity
    course {
      id
      name
      price
      language {
        id
        name
        code
      }
    }
    teacher {
      id
      user {
        ...RegularUser
      }
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useGetClassroomsQuery(options: Omit<Urql.UseQueryArgs<GetClassroomsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetClassroomsQuery>({ query: GetClassroomsDocument, ...options });
};
export const GetTeacherDocument = gql`
    query getTeacher($id: ID!) {
  teacher(id: $id) {
    user {
      id
      name
      email
    }
    classrooms {
      id
      link
      description
      capacity
      course {
        id
        name
        price
        language {
          id
          name
          code
        }
      }
    }
  }
}
    `;

export function useGetTeacherQuery(options: Omit<Urql.UseQueryArgs<GetTeacherQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetTeacherQuery>({ query: GetTeacherDocument, ...options });
};
export const GetUserDocument = gql`
    query getUser($id: ID!) {
  user(id: $id) {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

export function useGetUserQuery(options: Omit<Urql.UseQueryArgs<GetUserQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetUserQuery>({ query: GetUserDocument, ...options });
};
export const IsPaidDocument = gql`
    query isPaid($id: ID!) {
  isPaid(id: $id)
}
    `;

export function useIsPaidQuery(options: Omit<Urql.UseQueryArgs<IsPaidQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<IsPaidQuery>({ query: IsPaidDocument, ...options });
};
export const MyCoursesDocument = gql`
    query myCourses {
  mycourses {
    id
    name
    price
    language {
      id
      name
      code
    }
    classrooms {
      id
      link
      description
      capacity
      teacher {
        id
        user {
          id
          name
          email
        }
      }
    }
  }
}
    `;

export function useMyCoursesQuery(options: Omit<Urql.UseQueryArgs<MyCoursesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MyCoursesQuery>({ query: MyCoursesDocument, ...options });
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