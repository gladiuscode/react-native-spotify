import {StyleSheet, View, ViewProps} from "react-native";
import appTheme from "../../core/theme/app-theme";

type Props = Omit<ViewProps, 'style'> & {
  height?: number;
  marginBottom?: keyof typeof appTheme.spacings | number;
  marginTop?: keyof typeof appTheme.spacings | number;
  marginVertical?: keyof typeof appTheme.spacings | number;
}

function Divider({height = 1, marginBottom, marginTop, marginVertical, ...otherProps}: Props) {
  const marginBottomStyle = typeof marginBottom === 'string' ? appTheme.spacings[marginBottom] : marginBottom;
  const marginTopStyle = typeof marginTop === 'string' ? appTheme.spacings[marginTop] : marginTop;
  const marginVerticalStyle = typeof marginVertical === 'string' ? appTheme.spacings[marginVertical] : marginVertical;

  return (
    <View
      style={[styles.container, {
        height,
        marginBottom: marginBottomStyle,
        marginTop: marginTopStyle,
        marginVertical: marginVerticalStyle
      }]}
      {...otherProps}
    />
  );
}

export default Divider;

const styles = StyleSheet.create({
  container: {
    backgroundColor: appTheme.colors.grey,
  },
});
