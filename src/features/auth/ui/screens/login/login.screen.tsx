import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppScreen from '@/core/navigation/app-screen.enum';
import useLoginScreenFacade from '@/features/auth/ui/screens/login/useLoginScreen.facade';
import NavHeader from '@/components/nav-header/nav-header.component';

function LoginScreen() {
  const { t, safeAreaInsets } = useLoginScreenFacade();

  return (
    <View style={[{ ...safeAreaInsets }, styles.container]}>
      <NavHeader text={'Log In'} />
    </View>
  );
}

LoginScreen.screenName = AppScreen.Login;

export default LoginScreen;

const styles = StyleSheet.create({
  container: {},
});
