import {StyleProp, Text, TextStyle} from "react-native";
import AppTheme from "../../core/theme/app-theme";
import {PropsWithChildren} from "react";

type DefaultStyleKey = keyof typeof AppTheme['font']['styles']

type Props = PropsWithChildren<{
  style: DefaultStyleKey | StyleProp<TextStyle>;
}>;

function AppText({ style, children }: Props) {
  const isDefaultStyle = typeof style === 'string' && style !== '';

  return (
    <Text style={isDefaultStyle ? AppTheme.font.styles[style] : style}>
      {children}
    </Text>
  );
}

export default AppText;
