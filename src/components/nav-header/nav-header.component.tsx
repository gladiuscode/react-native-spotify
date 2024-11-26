import { StyleSheet, View, ViewProps } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import AppText from '@/components/app-typography/app-text.component';
import appTheme from '@/core/theme/app-theme';

type Props = ViewProps & {
  text: string;
};

function NavHeader({ style, text, ...otherProps }: Props) {
  return (
    <View style={[styles.container, style]} {...otherProps}>
      <View style={styles.expand}>
        <Ionicons name="chevron-back" size={24} color={appTheme.colors.white} />
      </View>
      <AppText.Title style={styles.text}>{text}</AppText.Title>
      <View style={styles.expand} />
    </View>
  );
}

export default NavHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: { flex: 1, textAlign: 'center' },
  expand: {
    flex: 0.5,
  },
});
