import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useRef, useState } from 'react';
import { Button } from '@/components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationParamList } from '@/types/navigation.types';
import { Routes } from '@/routes/routes';
import { InputControlled } from '@/components/InputControlled';
import { useForm } from 'react-hook-form';
import { FormRules } from '@/constants/formRules';
import { normalize } from '@/theme/metrics';
import { SvgImage } from '@/components/SvgImage';
import { colors } from '@/theme/colors';
import { TextLink } from '@/components/TextLinks';
import BottomSheet, { BottomSheetRefProps } from '@/components/BottomSheet';
//https://github.com/mbugua70/coke_app_rn
interface ILogin {
  email: string;
  password: string;
}
export const LoginScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.login>
> = ({ navigation }) => {
  const ref = useRef<BottomSheetRefProps>(null);

  const [loading, setLoading] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<ILogin>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = async (data: ILogin) => {
    console.log(data);
  };
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      scrollEnabled={false}
      style={{ flex: 1 }}
      contentContainerStyle={styles.root}
    >
      <SvgImage
        color={colors.black}
        source={require('../../assets/vectors/eye.svg')}
      />

      <InputControlled
        keyboardType="email-address"
        control={control}
        errorMessage={errors.email?.message}
        rules={FormRules.email}
        label="Email"
        name="email"
        type="text"
        placeholder="Enter your email"
        style={styles.inputSpace}
      />
      <InputControlled
        control={control}
        placeholder="********"
        name="password"
        label="Password"
        style={styles.inputSpace}
        errorMessage={errors.password?.message}
        type="password"
        rules={FormRules.password}
      />

      <Button
        style={styles.button}
        title="Login"
        onPress={handleSubmit(onSubmit)}
      />
      <TextLink
        content="You have an account?
                    Sign up now!"
        center
        highlighted={[
          {
            text: 'Sign up now!',
            callback: () => navigation.navigate(Routes.register),
          },
        ]}
      />
      <BottomSheet ref={ref}></BottomSheet>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.yellow,
    paddingHorizontal: normalize('horizontal', 24),
  },
  button: {
    marginVertical: normalize('vertical', 10),
  },
  inputSpace: {
    paddingBottom: 10,
  },
});
