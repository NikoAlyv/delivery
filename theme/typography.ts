import { StyleSheet, TextStyle } from "react-native";
import { normalize } from "./metrics";
import { colors } from "./colors";
import { useFonts } from "expo-font";

export const [fontsLoaded] = useFonts({
  firaCode: require("../assets/fonts/FiraCode-Medium.ttf"),
  inter: require("../assets/fonts/Inter_18pt-Regular.ttf"),
  montserrat: require("../assets/fonts/Montserrat-Bold.ttf"),
  playFair: require("../assets/fonts/PlayfairDisplay-Medium.ttf"),
  poppins: require("../assets/fonts/Poppins-SemiBold.ttf"),
});

const fontSize10 = normalize("font", 10);
const fontSize12 = normalize("font", 12);
const fontSize16 = normalize("font", 16);
const fontSize18 = normalize("font", 18);
const fontSize20 = normalize("font", 20);
const fontSize24 = normalize("font", 24);
const fontSize25 = normalize("font", 25);
const fontSize30 = normalize("font", 30);

const commonFontStyling: TextStyle = {
  includeFontPadding: false,
  padding: 0,
  color: colors.white,
};

export const TypographyStyles = StyleSheet.create({
  fireCode16: {
    fontSize: fontSize16,
    fontFamily: "firaCode",
    ...commonFontStyling,
  },
  fireCode18: {
    fontSize: fontSize18,
    fontFamily: "firaCode",
    ...commonFontStyling,
  },
  fireCode20: {
    fontSize: fontSize20,
    fontFamily: "firaCode",
    ...commonFontStyling,
  },
  fireCode24: {
    fontSize: fontSize24,
    fontFamily: "firaCode",
    ...commonFontStyling,
  },
  inter16: {
    fontSize: fontSize16,
    fontFamily: "inter",
    ...commonFontStyling,
  },
  inter18: {
    fontSize: fontSize18,
    fontFamily: "inter",
    ...commonFontStyling,
  },
  inter20: {
    fontSize: fontSize20,
    fontFamily: "inter",
    ...commonFontStyling,
  },
  inter24: {
    fontSize: fontSize24,
    fontFamily: "inter",
    ...commonFontStyling,
  },
  montserrat16: {
    fontSize: fontSize16,
    fontFamily: "montserrat",
    ...commonFontStyling,
  },
  montserrat18: {
    fontSize: fontSize18,
    fontFamily: "montserrat",
    ...commonFontStyling,
  },
  montserrat20: {
    fontSize: fontSize20,
    fontFamily: "montserrat",
    ...commonFontStyling,
  },

  montserrat24: {
    fontSize: fontSize24,
    fontFamily: "montserrat",
    ...commonFontStyling,
  },
  playFair16: {
    fontSize: fontSize16,
    fontFamily: "playFair",
    ...commonFontStyling,
  },
  playFair18: {
    fontSize: fontSize18,
    fontFamily: "playFair",
    ...commonFontStyling,
  },
  playFair20: {
    fontSize: fontSize20,
    fontFamily: "playFair",
    ...commonFontStyling,
  },
  playFair24: {
    fontSize: fontSize24,
    fontFamily: "playFair",
    ...commonFontStyling,
  },
  poppins16: {
    fontSize: fontSize16,
    fontFamily: "poppins",
    ...commonFontStyling,
  },
  poppins18: {
    fontSize: fontSize18,
    fontFamily: "poppins",
    ...commonFontStyling,
  },
  poppins20: {
    fontSize: fontSize20,
    fontFamily: "poppins",
    ...commonFontStyling,
  },
  poppins24: {
    fontSize: fontSize24,
    fontFamily: "poppins",
    ...commonFontStyling,
  },
});
