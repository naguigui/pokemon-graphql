import React, { Component } from "react";
import { View, Text } from "react-native";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { List, ListItem } from "../../components";

class PokemonListContainer extends Component {
  createList = ({ item }) => {
    return <ListItem name={item.name} />;
  };
  createKeyExtractor = item => {
    return item.name;
  };
  render() {
    const { getAllPokemon, loading } = this.props.data;
    return (
      <View>
        {loading && <Text>Loading</Text>}
        {getAllPokemon && (
          <List
            data={getAllPokemon.results}
            renderItem={this.createList}
            keyExtractor={this.createKeyExtractor}
          />
        )}
      </View>
    );
  }
}

const pokemonQuery = gql`
  {
    getAllPokemon {
      results {
        name
      }
    }
  }
`;
export default graphql(pokemonQuery)(PokemonListContainer);
