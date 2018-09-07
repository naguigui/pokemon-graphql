import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./ListItemStyles";

class ListItem extends Component {
  render() {
    const { name } = this.props;
    return (
      <View style={styles.ListItemView}>
        <TouchableOpacity style={styles.ListItem}>
          <Text style={styles.ListItemText}>{name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ListItem;
