import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./ListItemStyles";

class ListItem extends Component {
  render() {
    const { name } = this.props;
    return (
      <View style={styles.ListItem}>
        <Text>{name}</Text>
      </View>
    );
  }
}

export default ListItem;
