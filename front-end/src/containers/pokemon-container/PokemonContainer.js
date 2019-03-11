import React from "react";
import { Text } from "react-native";
import { Card, LoadingSpinner } from "../../components";
import { GetPokemon } from "./graphql/pokemon.container.query";
import {
  PokemonContainerWrapper,
  PokemonLoadingWrapper
} from "./PokemonContainerStyled";

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
                <LoadingSpinner />
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
