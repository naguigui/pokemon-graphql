import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Card } from "../../components";
import { GetPokemon } from "./graphql/pokemon.container.query";
import styles from "./PokemonContainerStyles";

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
          <View style={styles.PokemonContainerStyles}>
            {!loading && !error && data && (
              <PokemonContainer {...props} data={data} />
            )}
            {loading && !error && (
              <ActivityIndicator size={LOADING_SIZE} color={LOADING_COLOR} />
            )}
            {!loading && error && <Text>Oh noes we have an errors!</Text>}
          </View>
        );
      }}
    </GetPokemon>
  );
};

export default PokemonContainerWithQuery;
