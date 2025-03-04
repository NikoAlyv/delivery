import { View, Text, ScrollView, StatusBar, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { InputControlled } from '@/components/InputControlled';
import { useForm } from 'react-hook-form';
import { FormRules } from '@/constants/formRules';
import { colors } from '@/theme/colors';
import { Button } from '@/components/Button';
import { TextLink } from '@/components/TextLinks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationParamList } from '@/types/navigation.types';
import { Routes } from '@/routes/routes';
import { CommonStyles } from '@/theme/common.styles';
import { normalize } from '@/theme/metrics';

export interface IRegister {
  name: string;
  password: string;
  comfirmPassword: string;
  email: string;
}
export const RegisterScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.login>
> = ({ navigation }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<IRegister>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      scrollEnabled={false}
      contentContainerStyle={[CommonStyles.flexJustifyCenter, styles.root]}
    >
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />

      <InputControlled
        control={control}
        errorMessage={errors.name?.message}
        rules={FormRules.fullName}
        label="User Name"
        style={styles.inputSpace}
        placeholder="Enter your name"
        name="name"
        type="user"
      />

      <InputControlled
        keyboardType="email-address"
        control={control}
        style={styles.inputSpace}
        errorMessage={errors.email?.message}
        rules={FormRules.email}
        label="Email"
        name="email"
        type="text"
        placeholder="Enter your email"
      />
      <InputControlled
        control={control}
        placeholder="Enter your password"
        name="password"
        label="Password"
        style={styles.inputSpace}
        errorMessage={errors.password?.message}
        type="password"
        rules={FormRules.password}
      />

      <Button
        title="Create an account"
        style={styles.button}
        loading={loading}
      />
      <TextLink
        content="Do syou have an account?
 Sign in"
        center
        highlighted={[
          {
            text: 'Sign in',
            callback: () => navigation.navigate(Routes.login),
          },
        ]}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: normalize('horizontal', 24),
  },
  inputSpace: {
    marginVertical: normalize('vertical', 10),
  },
  button: {
    marginBottom: 10,
  },
});
