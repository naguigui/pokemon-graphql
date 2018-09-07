import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import PokemonListContainer from "../containers/pokemon-list-container";

const AppStack = createStackNavigator({
  List: {
    screen: PokemonListContainer,
    navigationOptions: () => ({
      title: "Pokemons"
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
