import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "column",
    padding: 10
  },
  wrapper: {
    height: 250,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  id: {
    fontSize: 24,
    fontFamily: "Helvetica"
  },
  name: {
    fontSize: 16,
    fontFamily: "Helvetica"
  },
  imageStyle: {
    width: 100,
    height: 100
  }
});
