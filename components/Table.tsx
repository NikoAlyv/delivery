import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import { SvgImage } from './SvgImage';
import { CommonStyles } from '@/theme/common.styles';
import { normalize } from '@/theme/metrics';
import { TypographyStyles } from '@/theme/typography';
import { useTypography } from '@/hook/useTypography';
import { colors } from '@/theme/colors';

interface ITable {
  icon: React.ReactNode;
  title: string;
  subTitle?: string;
  onPress?: () => void;
}
export const Table: React.FC<ITable> = ({ icon, title, subTitle, onPress }) => {
  const fontsLoaded = useTypography();
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color={colors.blue} />;
  }

  return (
    <Pressable
      style={[CommonStyles.alignCenterRow, styles.root]}
      onPress={onPress}
    >
      <SvgImage width={50} height={50} source={icon} />
      <View style={styles.container}>
        <Text style={TypographyStyles.montserrat20}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  root: {
    paddingHorizontal: normalize('horizontal', 12),
    paddingVertical: normalize('vertical', 12),
    gap: 10,
  },
  subTitle: {
    ...TypographyStyles.montserrat14,
    color: colors.green,
  },
  container: {
    gap: 5,
  },
});
