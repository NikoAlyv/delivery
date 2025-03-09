import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';
import { Button } from '@/components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationParamList } from '@/types/navigation.types';
import { Routes } from '@/routes/routes';
import { CommonStyles } from '@/theme/common.styles';
import { colors } from '@/theme/colors';
import { normalize } from '@/theme/metrics';
import { TypographyStyles } from '@/theme/typography';
import { useTypography } from '@/hook/useTypography';

export const WelcomeScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.welcome>
> = ({ navigation }) => {
  const fontsLoaded = useTypography();
  const navigateToLogin = () => navigation.navigate(Routes.login);
  const navigateToRegister = () => navigation.navigate(Routes.register);
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color={colors.blue} />;
  }

  return (
    <View style={styles.root}>
      <Text
        style={[TypographyStyles.montserrat20, CommonStyles.textAlignCenter]}
      >
        Delivery
      </Text>

      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.image}
      />

      <View style={styles.buttonContainer}>
        <Button title="Hesab yaradın" onPress={navigateToRegister} />
        <Button title="Daxil olun" onPress={navigateToLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    ...CommonStyles.flexJustifyCenter,
    backgroundColor: colors.white,
    gap: 20,
    paddingHorizontal: normalize('horizontal', 24),
  },
  buttonContainer: {
    gap: 15,
    marginTop: 60,
  },
  image: {
    width: 400,
    height: 400,
    alignSelf: 'center',
  },
});
