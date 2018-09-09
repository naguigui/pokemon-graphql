import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import styles from "./ListItemStyles";

class ListItem extends Component {
  onRowPress = () => {
    const { navigation, name, path } = this.props;
    navigation.navigate(path, {
      title: name
    });
  };
  render() {
    const { name } = this.props;
    return (
      <View style={styles.ListItemView}>
        <TouchableOpacity style={styles.ListItem} onPress={this.onRowPress}>
          <Text style={styles.ListItemText}>{name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(ListItem);
