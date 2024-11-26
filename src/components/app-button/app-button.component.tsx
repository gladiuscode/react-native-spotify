import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { ReactNode } from 'react';
import appTheme from '@/core/theme/app-theme';
import AppText from '../app-typography/app-text.component';

type FilledProps = {
  color?: keyof typeof appTheme.colors;
  text: string | ReactNode;
  disabled?: boolean;
} & TouchableOpacityProps;
function Filled({ style, color = 'white', text, ...otherProps }: FilledProps) {
  return (
    <Container style={[style, { backgroundColor: color }]} {...otherProps}>
      <AppText.H2 style={styles.text} color={'black'}>
        {text}
      </AppText.H2>
    </Container>
  );
}

type OutlinedProps = {
  text: string | ReactNode;
  disabled?: boolean;
} & TouchableOpacityProps;
function Outlined({ style, text, ...otherProps }: OutlinedProps) {
  return (
    <Container style={[styles.outlinedContainer, style]} {...otherProps}>
      <AppText.H2 style={styles.text} color={'white'}>
        {text}
      </AppText.H2>
    </Container>
  );
}

const AppButton = {
  Filled,
  Outlined,
};

export default AppButton;

type ContainerProps = TouchableOpacityProps & {
  disabled?: boolean;
};
function Container({
  style,
  children,
  disabled = false,
  ...otherProps
}: ContainerProps) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        style,
        disabled ? styles.containerDisabled : null,
      ]}
      {...otherProps}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: appTheme.spacings.twelve,
    borderRadius: 45,
  },
  text: {
    textAlign: 'center',
  },
  outlinedContainer: {
    borderWidth: 1,
    borderColor: appTheme.colors.grey,
  },
  containerDisabled: {
    backgroundColor: appTheme.colors.darkGrey,
  },
});
