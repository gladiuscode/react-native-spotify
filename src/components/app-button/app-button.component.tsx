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
} & TouchableOpacityProps;
function Filled({ style, color = 'white', text, ...otherProps }: FilledProps) {
  return (
    <Container style={[style, { backgroundColor: color }]} {...otherProps}>
      <AppText.Text style={styles.text} color={'black'}>
        {text}
      </AppText.Text>
    </Container>
  );
}

type OutlinedProps = {
  text: string | ReactNode;
} & TouchableOpacityProps;
function Outlined({ style, text }: OutlinedProps) {
  return (
    <Container style={[styles.outlinedContainer, style]}>
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

function Container({ style, children, ...otherProps }: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={[styles.container, style]} {...otherProps}>
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
});
