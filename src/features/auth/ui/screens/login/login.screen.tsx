import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppScreen from '@/core/navigation/app-screen.enum';
import useLoginScreenFacade from '@/features/auth/ui/screens/login/useLoginScreen.facade';
import NavHeader from '@/components/nav-header/nav-header.component';
import appTheme from '@/core/theme/app-theme';
import InputField from '@/components/inputField/inputField.component';
import AppButton from '@/components/app-button/app-button.component';

function LoginScreen() {
  const { t, safeAreaInsets } = useLoginScreenFacade();

  return (
    <View style={[{ ...safeAreaInsets }, styles.container]}>
      <NavHeader style={styles.navHeader} text={t('login-screen.title')} />
      <InputField
        containerStyle={styles.inputEmail}
        label={t('login-screen.input-email-username-label')}
      />
      <InputField
        containerStyle={styles.inputPassword}
        label={t('login-screen.input-password-label')}
      />
      <AppButton.Filled
        style={styles.btnLogIn}
        text={t('login-screen.btn-log-in')}
      />
      <AppButton.Outlined text={t('login-screen.btn-log-in')} />
    </View>
  );
}

LoginScreen.screenName = AppScreen.Login;

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: appTheme.spacings.twelve,
  },
  navHeader: {
    marginBottom: appTheme.spacings.twentyEight,
  },
  inputEmail: {
    marginBottom: appTheme.spacings.twenty,
  },
  inputPassword: {
    marginBottom: appTheme.spacings.forty,
  },
  btnLogIn: {
    marginBottom: appTheme.spacings.eight,
  },
});
