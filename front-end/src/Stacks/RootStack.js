import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import PokemonListContainer from "../containers/pokemon-list-container";
import styles from "./StacksStyles";

const AppStack = createStackNavigator({
  List: {
    screen: PokemonListContainer,
    navigationOptions: () => ({
      title: "Pokemon",
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.headerTitleStyle,
      headerTintColor: "#FFDE00"
    })
  }
});

export default createSwitchNavigator(
  {
    App: AppStack
  },
  {
    initialRouteName: "App"
  }
);
