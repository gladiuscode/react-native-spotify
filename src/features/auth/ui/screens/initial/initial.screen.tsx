import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppScreen from '@/core/navigation/app-screen.enum';
import AppText from '@/components/app-typography/app-text.component';
import appTheme from '@/core/theme/app-theme';
import AppButton from '@/components/app-button/app-button.component';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import useInitialScreenFacade from '@/features/auth/ui/screens/initial/useInitialScreen.facade';

function InitialScreen() {
  const { t, safeAreaInsets, handleSignUp, handleSocialSignUp, handleLogin } =
    useInitialScreenFacade();

  return (
    <View style={[{ ...safeAreaInsets }, styles.container]}>
      <View style={styles.logoContainer}>
        <FontAwesome5 name="spotify" size={53} color="white" />
      </View>
      <AppText.Title style={styles.title}>{t('title')}</AppText.Title>
      <AppButton.Filled
        style={styles.signUpButton}
        text={t('btn-sign-up')}
        color={'green'}
        onPress={handleSignUp}
      />
      <AppButton.Outlined
        style={styles.signUpButton}
        text={t('btn-google-sign-up')}
        onPress={handleSocialSignUp('google')}
      />
      <AppButton.Outlined
        style={styles.signUpButton}
        text={t('btn-facebook-sign-up')}
        onPress={handleSocialSignUp('facebook')}
      />
      <AppButton.Outlined
        style={styles.signUpButton}
        text={t('btn-apple-sign-up')}
        onPress={handleSocialSignUp('apple')}
      />
      <AppText.H2 style={styles.logInButton} onPress={handleLogin}>
        {t('btn-log-in')}
      </AppText.H2>
    </View>
  );
}

InitialScreen.screenName = AppScreen.Initial;

export default InitialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: appTheme.spacings.forty,
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: appTheme.spacings.eight,
  },
  title: {
    textAlign: 'center',
    marginBottom: appTheme.spacings.forty,
  },
  signUpButton: {
    marginBottom: appTheme.spacings.twelve,
  },
  logInButton: {
    textAlign: 'center',
    marginBottom: appTheme.spacings.forty + 14,
  },
});
