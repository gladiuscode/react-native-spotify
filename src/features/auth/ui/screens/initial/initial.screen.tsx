import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppScreen from '@/core/navigation/app-screen.enum';
import useAppTranslation from '@/core/i18n/use-app-translation';
import AppText from '@/components/app-typography/app-text.component';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import appTheme from '@/core/theme/app-theme';
import AppButton from '@/components/app-button/app-button.component';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

function InitialScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const { t } = useAppTranslation('auth');

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
        onPress={console.log}
      />
      <AppButton.Outlined
        style={styles.signUpButton}
        text={t('btn-google-sign-up')}
        onPress={console.log}
      />
      <AppButton.Outlined
        style={styles.signUpButton}
        text={t('btn-facebook-sign-up')}
        onPress={console.log}
      />
      <AppButton.Outlined
        style={styles.signUpButton}
        text={t('btn-apple-sign-up')}
        onPress={console.log}
      />
      <AppText.H2 style={styles.logInButton} onPress={console.log}>
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
