import {StyleSheet} from "react-native";

const colors = {
  white: '#FFFFFF',
  grey: '#777777',
  darkGrey: '#282828',
  black: '#121212',
  green: '#1ED760',
}

const fontFamilies = {
  roboto: {
    regular: 'Roboto-Regular',
    medium: 'Roboto-Medium',
    bold: 'Roboto-Bold',
  }
}

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
    })
  }
}

export default AppTheme;
