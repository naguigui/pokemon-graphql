import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import PokemonListContainer from "../containers/pokemon-list-container";
import PokemonContainer from "../containers/pokemon-container";
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
  },
  Pokemon: {
    screen: PokemonContainer,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`,
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
