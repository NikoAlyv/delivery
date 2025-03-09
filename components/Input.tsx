import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardTypeOptions,
  StyleProp,
  ViewStyle,
  Pressable,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import React, { useMemo, useState } from 'react';
import { SvgImage } from './SvgImage';
import { TypographyStyles } from '../theme/typography';
import { colors } from '../theme/colors';
import { standardHitSlopSize } from '../theme/consts.styles';
import { useTypography } from '@/hook/useTypography';
import { CommonStyles } from '@/theme/common.styles';
import { normalize } from '@/theme/metrics';

export type TIcon = {
  source: NodeRequire;
  color?: string;
  width?: number;
  height?: number;
  position?: 'left' | 'right';
};

export interface IInput {
  type?: 'text' | 'password' | 'user';
  label?: string;
  caption?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  keyboardType?: KeyboardTypeOptions;
  icon?: TIcon | NodeRequire;
  errorMessage?: string;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  maxLength?: number;
  setValue?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onInputPress?: () => void;
  onIconPress?: () => void;
  multiLine?: boolean;
  labelStyle?: StyleProp<TextStyle>;
}
export const Input: React.FC<IInput> = ({
  value,
  type = 'text',
  setValue,
  icon,
  inputStyle,
  multiLine,
  onIconPress,
  labelStyle,
  ...props
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(
    type === 'password'
  );
  const [open, setOpen] = useState<boolean>(false);

  const fontsLoaded = useTypography();
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color={colors.blue} />;
  }
  const isMoreIcon = useMemo(
    () =>
      ('position' in (icon ?? {}) && (icon as TIcon)?.position === 'right') ||
      type === 'password' ||
      type === 'user',
    [icon, type]
  );

  const isPressable = props.onInputPress instanceof Function;

  const renderIcon = useMemo(() => {
    if (type === 'password') {
      return (
        <Pressable
          onPress={() => setSecureTextEntry((state) => !state)}
          hitSlop={standardHitSlopSize}
          style={CommonStyles.alginSelfCenter}
        >
          <SvgImage
            color={colors.white}
            source={
              secureTextEntry
                ? require('../assets/vectors/eye-off.svg')
                : require('../assets/vectors/eye.svg')
            }
            width={20}
            fill={colors.black}
            height={20}
          />
        </Pressable>
      );
    }

    if (!icon) {
      return null;
    }
    if ('source' in icon) {
      return (
        <SvgImage
          source={icon.source}
          width={icon.width}
          color={icon.color}
          height={icon.height}
        />
      );
    }
    return (
      <Pressable onPress={onIconPress}>
        <SvgImage source={icon} />
      </Pressable>
    );
  }, [icon, props.disabled, secureTextEntry, open, type]);

  const handleOnFocused = () => {
    setFocused(true);
    props?.onFocus?.();
  };
  const handleOnBlur = () => {
    setFocused(false);
    props?.onBlur?.();
  };

  return (
    <View style={[props?.style]}>
      {props.label ? (
        <Text style={[TypographyStyles.montserrat14, labelStyle]}>
          {props.label}
        </Text>
      ) : null}
      <View
        style={[
          styles.wrapper,
          focused && styles.focused,
          props.disabled && styles.wrapperDisabled,
          isMoreIcon && { flexDirection: 'row-reverse' },
          inputStyle,
        ]}
      >
        {renderIcon}
        <TextInput
          placeholder={props.placeholder}
          keyboardType={props.keyboardType}
          value={value}
          onFocus={handleOnFocused}
          onBlur={handleOnBlur}
          onPressIn={props.onInputPress}
          autoCapitalize="none"
          maxLength={props.maxLength}
          secureTextEntry={secureTextEntry}
          onChangeText={setValue}
          multiline={multiLine}
          placeholderTextColor={props.disabled ? colors.red : colors.gray}
          style={styles.input}
        />
      </View>

      {props.caption || props.errorMessage ? (
        <Text
          style={[
            TypographyStyles.inter12,
            props?.errorMessage ? styles.error : undefined,
          ]}
        >
          {props.errorMessage ?? props.caption}
        </Text>
      ) : (
        <View style={styles.space} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  focused: {
    borderBottomWidth: 2,
    borderColor: colors.yellow,
  },
  wrapperDisabled: {},
  error: {
    color: colors.red,
  },
  space: {
    height: 16,
  },
  wrapper: {
    marginTop: 4,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.black,
    padding: 1,
    paddingHorizontal: normalize('horizontal', 10),
    height: 45,
    gap: 10,
  },
  input: {
    flex: 1,
    flexGrow: 1,
  },
  flatlist: {
    maxHeight: 200,
    gap: 6,
  },
});
