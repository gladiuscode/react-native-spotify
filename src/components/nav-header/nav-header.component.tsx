import { StyleSheet, TouchableOpacity, View, ViewProps } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useCallback } from 'react';
import AppText from '@/components/app-typography/app-text.component';
import appTheme from '@/core/theme/app-theme';
import { useNavigation } from '@react-navigation/native';
import { defaultHitSlop } from '@/core/constants';

type Props = ViewProps & {
  text: string;
};

// TODO: ADD ANIMATION ON SWIPE BACK
function NavHeader({ style, text, ...otherProps }: Props) {
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }, []);

  return (
    <View style={[styles.container, style]} {...otherProps}>
      <View style={styles.expand}>
        <TouchableOpacity hitSlop={defaultHitSlop} onPress={handleGoBack}>
          <Ionicons
            name="chevron-back"
            size={24}
            color={appTheme.colors.white}
          />
        </TouchableOpacity>
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
