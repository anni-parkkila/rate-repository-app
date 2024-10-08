import { Platform, Text as NativeText, StyleSheet } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: Platform.select({
      ios: theme.fonts.main.ios,
      android: theme.fonts.main.android,
      default: theme.fonts.main.default,
    }),
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorTextError: {
    color: theme.colors.textError,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorWhite: {
    color: theme.colors.white,
  },
  colorLightGray: {
    color: theme.colors.lightGray,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeAppBar: {
    fontSize: theme.fontSizes.appBar,
    fontWeight: theme.fontWeights.bold,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  textAlignCenter: {
    textAlign: "center",
  },
});

const Text = ({ color, fontSize, fontWeight, textAlign, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "textError" && styles.colorTextError,
    color === "primary" && styles.colorPrimary,
    color === "white" && styles.colorWhite,
    color === "lightGray" && styles.colorLightGray,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontSize === "appBar" && styles.fontSizeAppBar,
    fontWeight === "bold" && styles.fontWeightBold,
    textAlign === "center" && styles.textAlignCenter,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
