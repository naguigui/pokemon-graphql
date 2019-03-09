import React from "react";
import { GET_ALL_POKEMONS } from "./queries";
import { Query } from "react-apollo";

export const GetAllPokemons = ({ children }) => {
  return <Query query={GET_ALL_POKEMONS}>{children}</Query>;
};
