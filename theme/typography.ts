import { StyleSheet, TextStyle } from 'react-native';
import { normalize } from './metrics';
import { colors } from './colors';

const fontSize12 = normalize('font', 12);
const fontSize14 = normalize('font', 14);
const fontSize16 = normalize('font', 16);
const fontSize18 = normalize('font', 18);
const fontSize20 = normalize('font', 20);
const fontSize22 = normalize('font', 22);
const fontSize25 = normalize('font', 25);
const fontSize30 = normalize('font', 30);

const commonFontStyling: TextStyle = {
  includeFontPadding: false,
  padding: 0,
  color: colors.black,
};

export const TypographyStyles = StyleSheet.create({
  fireCode16: {
    fontSize: fontSize16,
    fontFamily: 'firaCode',
    ...commonFontStyling,
  },
  fireCode18: {
    fontSize: fontSize18,
    fontFamily: 'firaCode',
    ...commonFontStyling,
  },
  fireCode20: {
    fontSize: fontSize20,
    fontFamily: 'firaCode',
    ...commonFontStyling,
  },
  fireCode22: {
    fontSize: fontSize22,
    fontFamily: 'firaCode',
    ...commonFontStyling,
    color: colors.white,
  },
  inter12: {
    fontSize: fontSize12,
    fontFamily: 'inter',
    ...commonFontStyling,
  },
  inter14: {
    fontSize: fontSize14,
    fontFamily: 'inter',
    ...commonFontStyling,
  },
  inter16: {
    fontSize: fontSize16,
    fontFamily: 'inter',
    ...commonFontStyling,
  },
  inter18: {
    fontSize: fontSize18,
    fontFamily: 'inter',
    ...commonFontStyling,
  },
  inter20: {
    fontSize: fontSize20,
    fontFamily: 'inter',
    ...commonFontStyling,
  },

  montserrat14: {
    fontSize: fontSize14,
    fontFamily: 'montserrat',
    ...commonFontStyling,
  },
  montserrat16: {
    fontSize: fontSize16,
    fontFamily: 'montserrat',
    ...commonFontStyling,
  },
  montserrat18: {
    fontSize: fontSize18,
    fontFamily: 'montserrat',
    ...commonFontStyling,
  },
  montserrat20: {
    fontSize: fontSize20,
    fontFamily: 'montserrat',
    ...commonFontStyling,
  },

  playFair16: {
    fontSize: fontSize16,
    fontFamily: 'playFair',
    ...commonFontStyling,
  },
  playFair18: {
    fontSize: fontSize18,
    fontFamily: 'playFair',
    ...commonFontStyling,
  },
  playFair20: {
    fontSize: fontSize20,
    fontFamily: 'playFair',
    ...commonFontStyling,
  },
  playFair22: {
    fontSize: fontSize22,
    fontFamily: 'playFair',
    ...commonFontStyling,
    color: colors.white,
  },
  poppins14: {
    fontSize: fontSize14,
    fontFamily: 'poppins',
    ...commonFontStyling,
  },
  poppins16: {
    fontSize: fontSize16,
    fontFamily: 'poppins',
    ...commonFontStyling,
    color: colors.darkGray,
  },
  poppins18: {
    fontSize: fontSize18,
    fontFamily: 'poppins',
    ...commonFontStyling,
  },
  poppins20: {
    fontSize: fontSize20,
    fontFamily: 'poppins',
    ...commonFontStyling,
  },
  poppins22: {
    fontSize: fontSize22,
    fontFamily: 'poppins',
    ...commonFontStyling,
    color: colors.white,
  },
});
