import React, { Component } from "react";
import { ActivityIndicator } from "react-native";
import { List, ListItem } from "../../components";
import { GetAllPokemons } from "./graphql/pokemon.list.container.query";
import {
  PokemonListContainerWrapper,
  PokemonListLoadingWrapper
} from "./PokemonListContainerStyled";

const LOADING_COLOR = "#fff";
const LOADING_SIZE = "large";
class PokemonListContainer extends Component {
  createList = ({ item }) => {
    return <ListItem name={item.name} path="Pokemon" />;
  };
  createKeyExtractor = item => {
    return item.name;
  };
  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        <List
          data={data.getAllPokemon.results}
          renderItem={this.createList}
          keyExtractor={this.createKeyExtractor}
        />
      </React.Fragment>
    );
  }
}

const PokemonListContainerWithQuery = props => {
  return (
    <GetAllPokemons>
      {({ data, loading, error }) => {
        return (
          <PokemonListContainerWrapper>
            {!loading && !error && data && <PokemonListContainer data={data} />}
            {loading && !error && (
              <PokemonListLoadingWrapper>
                <ActivityIndicator size={LOADING_SIZE} color={LOADING_COLOR} />
              </PokemonListLoadingWrapper>
            )}
          </PokemonListContainerWrapper>
        );
      }}
    </GetAllPokemons>
  );
};

export default PokemonListContainerWithQuery;
