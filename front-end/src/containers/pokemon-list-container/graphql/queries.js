import gql from "graphql-tag";

export const GET_ALL_POKEMONS = gql`
  {
    getAllPokemon {
      results {
        name
      }
    }
  }
`;
