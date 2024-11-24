import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import AppText from '../app-typography/app-text.component';
import React, {
  PropsWithChildren,
  ReactNode,
  useCallback,
  useState,
} from 'react';
import appTheme from '@/core/theme/app-theme';
import Feather from '@expo/vector-icons/Feather';
import buildContext from '@/utils/buildContext.util';

type SimpleProps = {
  style?: StyleProp<ViewStyle>;
  size?: number;
  initialValue?: boolean;
};
function Simple({ style, size, initialValue = false }: SimpleProps) {
  return (
    <Container style={style} initialValue={initialValue}>
      <Check size={size} />
    </Container>
  );
}

type WithLeftText = SimpleProps & {
  text: string | ReactNode;
};
function WithLeftText({
  style,
  size,
  text,
  initialValue = false,
}: WithLeftText) {
  return (
    <Container style={style} initialValue={initialValue}>
      <AppText.Text style={styles.textLeft}>{text}</AppText.Text>
      <Check size={size} />
    </Container>
  );
}

type WithRightText = SimpleProps & {
  text: string | ReactNode;
};
function WithRightText({
  style,
  size,
  text,
  initialValue = false,
}: WithRightText) {
  return (
    <Container style={style} initialValue={initialValue}>
      <Check size={size} />
      <AppText.Text style={styles.textRight}>{text}</AppText.Text>
    </Container>
  );
}

const Checkbox = {
  Simple,
  WithLeftText,
  WithRightText,
};

export default Checkbox;

type CheckboxContext = {
  checked: boolean;
  pressed: boolean;
};
const [useCheckbox, Provider] = buildContext<CheckboxContext>('Checkbox');

// TODO: Animate press in / press out
type ContainerProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
  initialValue?: boolean;
}>;
function Container({ style, initialValue = false, children }: ContainerProps) {
  const [checked, setChecked] = useState(initialValue);
  const [pressed, setPressed] = useState(false);

  const handleOnPress = useCallback(
    () => setChecked((current) => !current),
    [],
  );

  const handleOnPressIn = useCallback(
    () => setPressed((current) => !current),
    [],
  );

  const handleOnPressOut = useCallback(
    () => setPressed((current) => !current),
    [],
  );

  return (
    <Provider
      value={{
        checked,
        pressed,
      }}
    >
      <Pressable
        style={[style, styles.container]}
        onPress={handleOnPress}
        onPressIn={handleOnPressIn}
        onPressOut={handleOnPressOut}
      >
        {children}
      </Pressable>
    </Provider>
  );
}

type CheckProps = {
  size?: number;
};
function Check({ size }: CheckProps) {
  const { checked, pressed } = useCheckbox();

  const dimensions = size
    ? { width: size, height: size, borderRadius: size * 2 }
    : undefined;

  return (
    <View
      style={[
        styles.checkbox,
        checked ? styles.checkedCheckbox : undefined,
        pressed ? styles.pressedCheckbox : undefined,
        dimensions,
      ]}
    >
      {checked ? (
        <Feather
          name="check"
          size={styles.checkbox.width - 8}
          color={appTheme.colors.black}
        />
      ) : null}
    </View>
  );
}

const defaultSize = 24;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  textLeft: {
    marginRight: appTheme.spacings.thirtyTwo,
  },
  textRight: {
    marginLeft: appTheme.spacings.thirtyTwo,
  },
  checkbox: {
    width: defaultSize,
    height: defaultSize,
    borderWidth: 1,
    borderColor: appTheme.colors.grey,
    borderRadius: defaultSize * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedCheckbox: {
    backgroundColor: appTheme.colors.green,
    borderWidth: 0,
  },
  pressedCheckbox: {
    opacity: 0.4,
  },
});
