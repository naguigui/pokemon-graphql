import React from "react";
import { ActivityIndicator } from "react-native";

const LOADING_COLOR = "#3b4cca";
const LOADING_SIZE = "large";

const LoadingSpinner = props => {
  return (
    <ActivityIndicator
      size={props.loadingSize || LOADING_SIZE}
      color={props.loadingColor || LOADING_COLOR}
    />
  );
};

export default LoadingSpinner;
