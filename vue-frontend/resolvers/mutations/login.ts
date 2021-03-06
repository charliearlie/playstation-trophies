import gql from 'graphql-tag'
export const login = gql`
  mutation Login($usernameOrEmail: String!, $password: String!) {
    login(usernameOrEmail: $usernameOrEmail, password: $password) {
      user {
        email
        username
      }
      errors {
        field
        message
      }
    }
  }
`
