import {StyleSheet} from "react-native";

const fontFamilies = {
  roboto: {
    regular: 'Roboto-Regular',
    medium: 'Roboto-Medium',
    bold: 'Roboto-Bold',
  }
}

const AppTheme = {
  colors: {
    white: '#FFFFFF',
    grey: '#777777',
    darkGrey: '#282828',
    black: '#121212',
    green: '#1ED760',
  },
  font: {
    families: fontFamilies,
    styles: StyleSheet.create({
      title: {
        fontFamily: fontFamilies.roboto.bold,
        fontSize: 28,
      },
      h1: {
        fontFamily: fontFamilies.roboto.bold,
        fontSize: 20,
      },
      h2: {
        fontFamily: fontFamilies.roboto.bold,
        fontSize: 16,
      },
      text: {
        fontFamily: fontFamilies.roboto.medium,
        fontSize: 10,
      },
      small: {
        fontFamily: fontFamilies.roboto.medium,
        fontSize: 8,
      },
    })
  }
}

export default AppTheme;
