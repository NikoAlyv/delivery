import {
  Text,
  StyleProp,
  ViewStyle,
  Pressable,
  TextStyle,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import { colors } from '@/theme/colors';
import { normalize } from '@/theme/metrics';
import { useTypography } from '@/hook/useTypography';
import { TypographyStyles } from '@/theme/typography';
import { CommonStyles } from '@/theme/common.styles';

interface IButton {
  title?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
}
export const Button: React.FC<IButton> = ({
  title,
  loading,
  onPress,
  style,
  disabled,
  textStyle,
}) => {
  const fontsLoaded = useTypography();
  const [pressed, setPressed] = useState<boolean>(false);
  const onPressIn = () => setPressed(true);
  const onPressOut = () => setPressed(false);
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color={colors.blue} />;
  }
  return (
    <Pressable
      style={[styles.root, pressed ? styles.pressedButton : undefined, style]}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={disabled ? undefined : onPress}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <Text
          style={[
            TypographyStyles.poppins16,
            CommonStyles.textAlignCenter,
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.yellow,
    paddingVertical: normalize('vertical', 15),
    justifyContent: 'center',
    borderRadius: 30,
  },

  pressedButton: {
    backgroundColor: colors.white,
  },
});
