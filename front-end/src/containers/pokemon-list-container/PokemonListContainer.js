import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { List, ListItem } from "../../components";
import styles from "./PokemonListContainerStyles";

class PokemonListContainer extends Component {
  createList = ({ item }) => {
    return <ListItem name={item.name} path="Pokemon" />;
  };
  createKeyExtractor = item => {
    return item.name;
  };
  render() {
    return (
      <View style={styles.PokemonListContainerStyles}>
        <Query query={pokemonQuery}>
          {({ loading, data }) => {
            if (loading) {
              return (
                <View style={styles.loading}>
                  <ActivityIndicator size="large" color="#FF0000" />
                </View>
              );
            }
            if (data) {
              return (
                <List
                  data={data.getAllPokemon.results}
                  renderItem={this.createList}
                  keyExtractor={this.createKeyExtractor}
                />
              );
            }
          }}
        </Query>
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
export default PokemonListContainer;
