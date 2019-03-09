import React from "react";
import { GET_SINGLE_POKEMON } from "./queries";
import { Query } from "react-apollo";

export const GetPokemon = ({ children, props }) => {
  return (
    <Query
      query={GET_SINGLE_POKEMON}
      variables={{ name: props.navigation.state.params.title }}
    >
      {children}
    </Query>
  );
};
