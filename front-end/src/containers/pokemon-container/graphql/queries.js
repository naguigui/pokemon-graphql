import gql from "graphql-tag";

export const GET_SINGLE_POKEMON = gql`
  query getPokemon($name: String!) {
    getPokemon(name: $name) {
      name
      id
      abilities {
        ability {
          name
        }
      }
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
    }
  }
`;
