import React from "react";
import {View} from "react-native";
import AppScreen from "../../../../../core/navigation/app-screen.enum";
import AppText from "../../../../../components/app-typography/app-text.component";
import appTheme from "../../../../../core/theme/app-theme";

function InitialScreen() {
  return (
    <View>
      <Text>Hello!</Text>
    </View>
  );
}

InitialScreen.screenName = AppScreen.Initial;

export default InitialScreen;
