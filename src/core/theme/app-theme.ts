import { Platform, StyleSheet } from 'react-native';

// TODO: ADD THEME PROVIDER FOR DARK THEME AND INSETS

const colors = {
  white: '#FFFFFF',
  lightGrey: '#cbcbcb',
  grey: '#777777',
  darkGrey: '#282828',
  black: '#121212',
  green: '#1ED760',
  red: '#c72e2e',
};

const fontFamilies = {
  roboto: {
    regular: Platform.select({
      android: 'Roboto_400Regular',
      ios: 'Roboto-Regular',
    }),
    medium: Platform.select({
      android: 'Roboto_500Medium',
      ios: 'Roboto-Medium',
    }),
    bold: Platform.select({
      android: 'Roboto_700Bold',
      ios: 'Roboto-Bold',
    }),
  },
};

const AppTheme = {
  colors,
  font: {
    families: fontFamilies,
    styles: StyleSheet.create({
      title: {
        fontFamily: fontFamilies.roboto.bold,
        fontSize: 28,
        color: colors.white,
      },
      h1: {
        fontFamily: fontFamilies.roboto.bold,
        fontSize: 20,
        color: colors.white,
      },
      h2: {
        fontFamily: fontFamilies.roboto.bold,
        fontSize: 16,
        color: colors.white,
      },
      text: {
        fontFamily: fontFamilies.roboto.medium,
        fontSize: 10,
        color: colors.white,
      },
      small: {
        fontFamily: fontFamilies.roboto.medium,
        fontSize: 8,
        color: colors.white,
      },
    }),
  },
  spacings: {
    four: 4,
    eight: 8,
    twelve: 12,
    sixteen: 16,
    twenty: 20,
    twentyFour: 24,
    twentyEight: 28,
    thirtyTwo: 32,
    thirtySix: 36,
    forty: 40,
  },
};

export default AppTheme;
