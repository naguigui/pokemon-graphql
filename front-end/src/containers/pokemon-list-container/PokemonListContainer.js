import React, { Component } from "react";
import { List, ListItem, LoadingSpinner } from "../../components";
import { GetAllPokemons } from "./graphql/pokemon.list.container.query";
import {
  PokemonListContainerWrapper,
  PokemonListLoadingWrapper
} from "./PokemonListContainerStyled";

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
                <LoadingSpinner />
              </PokemonListLoadingWrapper>
            )}
          </PokemonListContainerWrapper>
        );
      }}
    </GetAllPokemons>
  );
};

export default PokemonListContainerWithQuery;
