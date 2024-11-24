import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { PropsWithChildren, ReactNode } from 'react';
import appTheme from '@/core/theme/app-theme';
import AppText from '../app-typography/app-text.component';

type FilledProps = {
  style?: StyleProp<ViewStyle>;
  color?: keyof typeof appTheme.colors;
  text: string | ReactNode;
};
function Filled({ style, color = 'white', text }: FilledProps) {
  return (
    <Container style={[style, { backgroundColor: color }]}>
      <AppText.Text style={styles.text} color={'black'}>
        {text}
      </AppText.Text>
    </Container>
  );
}

type OutlinedProps = {
  style?: StyleProp<ViewStyle>;
  text: string | ReactNode;
};
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

function Container({
  style,
  children,
}: PropsWithChildren<{ style?: StyleProp<ViewStyle> }>) {
  return (
    <TouchableOpacity style={[styles.container, style]}>
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
