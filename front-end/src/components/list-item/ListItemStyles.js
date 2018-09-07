import { StyleSheet } from "react-native";

export default StyleSheet.create({
  ListItemView: {
    display: "flex",
    flexDirection: "row"
  },
  ListItem: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    height: 60,
    borderWidth: 0.5,
    borderColor: "black",
    backgroundColor: "#fff",
    padding: 20
  },
  ListItemText: {
    fontFamily: "Helvetica",
    fontWeight: "500",
    fontSize: 16
  }
});
