import React from 'react';
import { View, Text } from 'react-native';
import AppScreen from '@/core/navigation/app-screen.enum';

function HomeScreen() {
  return (
    <View>
      <Text>Hello from homepage</Text>
    </View>
  );
}

HomeScreen.screenName = AppScreen.Home;

export default HomeScreen;
