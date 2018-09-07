import React, { Component } from "react";
import { View, Text } from "react-native";
import { List, ListItem } from "../../components";

class PokemonListContainer extends Component {
  createListItem = ({ item }) => {
    return <ListItem name={item.name} />;
  };
  render() {
    return (
      <View>
        <List renderItem={this.createListItem} />
      </View>
    );
  }
}

export default PokemonListContainer;
