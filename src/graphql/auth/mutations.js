import { gql } from "graphql-tag";

export const LOGIN_USER = gql`
  mutation loginUser($input: LoginUserInput!) {
    loginUser(data: $input) {
      id
      name
      email
      token
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
