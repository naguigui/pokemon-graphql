import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import styles from "./CardStyles";

class Card extends Component {
  render() {
    const { id, name, image, abilities, types } = this.props;
    return (
      <View style={styles.card}>
        <View style={styles.wrapper}>
          <Text style={styles.id}>{`#${id}`}</Text>
          <Image style={styles.imageStyle} source={{ uri: image }} />
          <Text style={styles.name}>{name}</Text>
          {abilities.map((abilities, id) => (
            <Text style={styles.abilities} key={id}>
              {abilities.ability.name}
            </Text>
          ))}
          {types.map((types, id) => (
            <Text style={styles.abilities} key={id}>
              {types.type.name}
            </Text>
          ))}
        </View>
      </View>
    );
  }
}

export default Card;
