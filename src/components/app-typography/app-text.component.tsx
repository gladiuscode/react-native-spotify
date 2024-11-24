import React from "react";
import {Text, TextProps} from "react-native";
import appTheme from "../../core/theme/app-theme";

const AppText = buildAppText();

function buildAppText() {
  const variants = Object.keys(appTheme.font.styles) as (keyof ThemeFontStyles)[];

  return variants.reduce((acc, variant) => {
    const name = variant.charAt(0).toUpperCase() + variant.slice(1);
    const element = createVariantFor(variant);
    return {...acc, [name]: element};
  }, {} as AppTextType);
}

function createVariantFor(type: keyof ThemeFontStyles) {
  return ({ style, color, children, ...otherProps}: Props) => {
    const colorStyle = color ? { color: appTheme.colors[color] } : undefined;
    return (
      <Text style={[appTheme.font.styles[type], colorStyle, style]} {...otherProps}>
        {children}
      </Text>
    )
  }
}

type AppTextType = {
  [key in Capitalize<keyof ThemeFontStyles>]: (props: Props) => React.JSX.Element;
}

type ThemeFontStyles = typeof appTheme.font.styles;

type Props = TextProps & {
  color?: keyof typeof appTheme.colors;
};

export default AppText;


