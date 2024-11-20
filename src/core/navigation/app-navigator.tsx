import {createStaticNavigation} from "@react-navigation/native";
import RootStack from "./navigators/root-stack";

const MainNavigator = createStaticNavigation(RootStack);

function AppNavigator() {
  return (
    <MainNavigator />
  );
}

export default AppNavigator;
