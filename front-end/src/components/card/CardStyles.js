import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "column",
    padding: 10
  },
  wrapper: {
    backgroundColor: "#fff",
    height: 250,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#3e3e3f",
    alignItems: "center",
    justifyContent: "center"
  },
  id: {
    fontSize: 24,
    fontFamily: "Helvetica"
  },
  name: {
    fontSize: 16,
    fontFamily: "Helvetica",
    fontWeight: "500",
    marginBottom: 10
  },
  imageStyle: {
    width: 100,
    height: 100
  },
  abilities: {
    fontSize: 16,
    fontFamily: "Helvetica"
  }
});
