import React, { Component } from "react";
import { FlatList } from "react-native";

class List extends Component {
  render() {
    const { data, keyExtractor, renderItem } = this.props;
    return (
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    );
  }
}

export default List;
