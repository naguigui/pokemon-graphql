import React, { Component } from "react";
import { View, ActivityIndicator, Text, Image } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Card } from "../../components";
import styles from "./PokemonContainerStyles";

class PokemonContainer extends Component {
  getName = () => {
    const { navigation } = this.props;
    return navigation.state.params.title;
  };
  render() {
    const name = this.getName();
    return (
      <View style={styles.PokemonContainerStyles}>
        <Query query={GET_SINGLE_POKEMON} variables={{ name }}>
          {({ loading, data }) => {
            const { getPokemon } = data;
            if (loading) {
              return (
                <View style={styles.loading}>
                  <ActivityIndicator size="large" color="#FF0000" />
                </View>
              );
            }
            if (getPokemon) {
              return (
                <Card
                  id={getPokemon.id}
                  name={getPokemon.name}
                  image={getPokemon.sprites.front_default}
                />
              );
            }
          }}
        </Query>
      </View>
    );
  }
}

const GET_SINGLE_POKEMON = gql`
  query getPokemon($name: String!) {
    getPokemon(name: $name) {
      name
      id
      abilities {
        ability {
          name
        }
      }
      sprites {
        front_default
      }
    }
  }
`;

export default PokemonContainer;
