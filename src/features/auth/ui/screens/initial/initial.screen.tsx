import React from 'react';
import { View, Text } from 'react-native';
import AppScreen from '@/core/navigation/app-screen.enum';

function InitialScreen() {
  return (
    <View>
      <Text>Hello!</Text>
    </View>
  );
}

InitialScreen.screenName = AppScreen.Initial;

export default InitialScreen;
