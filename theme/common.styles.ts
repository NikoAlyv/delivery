import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {windowHeight, windowWidth} from './consts.styles';

export const CommonStyles = StyleSheet.create({
  flex: {
    flex: 1,
  } as ViewStyle | TextStyle,
  flexJustifyCenter: {
    flex: 1,
    justifyContent: 'center',
  } as ViewStyle,
  flexAlignCenter: {
    flex: 1,
    alignItems: 'center',
  } as ViewStyle,
  flexRow: {
    flex: 1,
    flexDirection: 'row',
  } as ViewStyle,
  flexAlignRow: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  } as ViewStyle,
  flexAlignJustifyCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  row: {
    flexDirection: 'row',
  } as ViewStyle,
  rowReverse: {
    flexDirection: 'row-reverse',
  } as ViewStyle,
  justifyCenterRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  } as ViewStyle,
  alignCenterRow: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  alignJustifyCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  alignJustifyCenterRow: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  } as ViewStyle,
  flexAlignJustifyCenterRow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  } as ViewStyle,
  alignCenterJustifyBetween: {
    justifyContent: 'space-between',
    alignItems: 'center',
  } as ViewStyle,
  alignCenterJustifyBetweenRow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  } as ViewStyle,
  justifyBetweenRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  } as ViewStyle,

  alginSelfCenter: {
    alignSelf: 'center',
  } as ViewStyle,
  alginSelfEnd: {
    alignSelf: 'flex-end',
  } as ViewStyle,
  alginSelfStart: {
    alignSelf: 'flex-start',
  } as ViewStyle,

  textAlignCenter: {
    textAlign: 'center',
  } as TextStyle,
  windowSize: {
    width: windowWidth,
    height: windowHeight,
  },
  positionAbsolute: {
    position: 'absolute',
  },
});
