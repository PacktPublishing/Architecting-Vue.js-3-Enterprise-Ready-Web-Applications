import { gql } from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
        email
        username
      }
    }
  }
`;

export const REGISTER = gql`
  mutation register($input: RegisterUserInput!) {
    register(data: $input) {
      id
      name
      email
    }
  }
`;
