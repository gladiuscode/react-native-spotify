import React, {PropsWithChildren} from "react";
import {StyleProp, Text, TextStyle} from "react-native";
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

  return (props: Props) => {
    return (
      <Text style={[appTheme.font.styles[type], {color: props.color ?? appTheme.font.styles[type].color}, props.style]}>
        {props.children}
      </Text>
    )
  }
}

type AppTextType = {
  [key in Capitalize<keyof ThemeFontStyles>]: (props: Props) => React.JSX.Element;
}

type ThemeFontStyles = typeof appTheme.font.styles;

type Props = PropsWithChildren<{
  style?: StyleProp<TextStyle>;
  color?: keyof typeof appTheme.colors;
}>;

export default AppText;


