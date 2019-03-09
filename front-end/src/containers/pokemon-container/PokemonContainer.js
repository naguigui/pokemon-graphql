import React from "react";
import { Text, ActivityIndicator } from "react-native";
import { Card } from "../../components";
import { GetPokemon } from "./graphql/pokemon.container.query";
import {
  PokemonContainerWrapper,
  PokemonLoadingWrapper
} from "./PokemonContainerStyled";

const LOADING_COLOR = "#fff";
const LOADING_SIZE = "large";

const PokemonContainer = props => {
  const { data } = props;
  const { getPokemon } = data;
  return (
    <React.Fragment>
      {getPokemon && (
        <Card
          id={getPokemon.id}
          name={getPokemon.name}
          image={getPokemon.sprites.front_default}
          abilities={getPokemon.abilities}
          types={getPokemon.types}
        />
      )}
    </React.Fragment>
  );
};

const PokemonContainerWithQuery = props => {
  return (
    <GetPokemon props={props}>
      {({ data, loading, error }) => {
        return (
          <PokemonContainerWrapper>
            {!loading && !error && data && (
              <PokemonContainer {...props} data={data} />
            )}
            {loading && (
              <PokemonLoadingWrapper>
                <ActivityIndicator size={LOADING_SIZE} color={LOADING_COLOR} />
              </PokemonLoadingWrapper>
            )}
            {!loading && error && <Text>Oh noes we have an errors!</Text>}
          </PokemonContainerWrapper>
        );
      }}
    </GetPokemon>
  );
};

export default PokemonContainerWithQuery;
