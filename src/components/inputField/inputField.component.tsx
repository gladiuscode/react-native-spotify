import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import React, { ReactNode, useCallback, useState } from 'react';
import appTheme from '@/core/theme/app-theme';
import Feather from '@expo/vector-icons/Feather';
import AppText from '../app-typography/app-text.component';

type Props = Omit<TextInputProps, 'defaultValue' | 'style'> & {
  containerStyle?: StyleProp<ViewStyle>;
  initialValue?: TextInputProps['defaultValue'];
  label?: string | ReactNode;
  icon?: IconName | ReactNode;
  tip?: string | ReactNode;
  errored?: boolean;
  onIconPress?: () => void;
};

function InputField({
  initialValue,
  label,
  tip,
  containerStyle,
  icon,
  errored = false,
  onIconPress,
  ...otherProps
}: Props) {
  const [focused, setFocused] = useState(false);

  const handleOnFocus = useCallback(() => setFocused(true), []);
  const handleOnBlur = useCallback(() => setFocused(false), []);

  return (
    <View style={containerStyle}>
      {typeof label === 'string' ? <AppText.H1>{label}</AppText.H1> : label}
      <View
        style={[
          styles.container,
          focused ? styles.containerFocused : undefined,
          errored ? styles.containerErrored : undefined,
        ]}
      >
        <TextInput
          style={[styles.input, errored ? styles.inputErrored : undefined]}
          selectionColor={appTheme.colors.green}
          defaultValue={initialValue}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          {...otherProps}
        />
        {typeof icon === 'string' ? (
          <Feather
            name={icon as IconName}
            size={20}
            color={appTheme.colors.white}
            style={styles.icon}
            onPress={onIconPress}
          />
        ) : (
          icon
        )}
      </View>
      {typeof tip === 'string' ? (
        <AppText.Small style={styles.tip}>{tip}</AppText.Small>
      ) : (
        tip
      )}
    </View>
  );
}

export default InputField;

const defaultInputHeight = 51;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: appTheme.spacings.twelve,
    height: defaultInputHeight,
    backgroundColor: appTheme.colors.darkGrey,
    borderRadius: 5,
  },
  containerFocused: {
    backgroundColor: appTheme.colors.grey,
  },
  containerErrored: {
    backgroundColor: appTheme.colors.lightGrey,
  },
  input: {
    ...appTheme.font.styles.h2,
    flex: 1,
    height: defaultInputHeight,
  },
  inputErrored: {
    color: appTheme.colors.red,
  },
  icon: {
    marginLeft: appTheme.spacings.twelve,
  },
  tip: {
    marginTop: appTheme.spacings.eight,
  },
});

type IconName = keyof typeof Feather.glyphMap;
