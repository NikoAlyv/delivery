import {
  View,
  Text,
  TouchableWithoutFeedback,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { useTypography } from '@/hook/useTypography';
import { windowHeight, windowWidth } from '@/theme/consts.styles';
import { normalize } from '@/theme/metrics';
import { colors } from '@/theme/colors';
import { CommonStyles } from '@/theme/common.styles';
import { TypographyStyles } from '@/theme/typography';
import { Button } from './Button';
interface IModal {
  onPress: () => void;
  logout?: () => void;
  text: string;
  buttonText?: string;
}
export const Modal: React.FC<IModal> = ({
  logout,
  onPress,
  text,
  buttonText,
}) => {
  const fontsLoaded = useTypography();

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color={colors.blue} />;
  }
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.logoutContainer}>
        <Text
          style={[TypographyStyles.poppins22, CommonStyles.textAlignCenter]}
        >
          {text}
        </Text>

        <Button title={buttonText} onPress={logout} />
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  logoutContainer: {
    height: windowHeight,
    width: windowWidth,
    position: 'absolute',
    ...CommonStyles.flexJustifyCenter,
    gap: 20,
    backgroundColor: colors.backdrop,
    paddingHorizontal: normalize('horizontal', 60),
  },
});
