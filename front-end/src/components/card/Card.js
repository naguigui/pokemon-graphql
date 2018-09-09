import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import styles from "./CardStyles";

class Card extends Component {
  render() {
    const { id, name, image } = this.props;
    return (
      <View style={styles.card}>
        <View style={styles.wrapper}>
          <Text style={styles.id}>{`#${id}`}</Text>
          <Image style={styles.imageStyle} source={{ uri: image }} />
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
    );
  }
}

export default Card;
