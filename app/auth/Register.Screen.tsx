import { View, Text, ScrollView, StatusBar } from "react-native";
import React, { useState } from "react";
import { InputControlled } from "@/components/InputControlled";
import { useForm } from "react-hook-form";
import { FormRules } from "@/constants/formRules";
import { colors } from "@/theme/colors";
import { Button } from "@/components/Button";

export interface IRegister {
    name: string;
    password: string;
    comfirmPassword: string;
    email: string;
  }
export const RegisterScreen = () => {
    const [loading, setLoading] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: {errors, isLoading},
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
      >
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
     

      <InputControlled
        control={control}
        errorMessage={errors.name?.message}
        rules={FormRules.fullName}
        label="User Name"
        placeholder="Enter your name"
        name="name"
        type="user"
      />

      <InputControlled
        keyboardType="email-address"
        control={control}
        errorMessage={errors.email?.message}
        rules={FormRules.email}
        label="Email"
        name="email"
        style={styles.space}
        type="text"
        placeholder="Enter your email"
      />
      <InputControlled
        control={control}
        placeholder="Enter your password"
        name="password"
        label="Password"
        style={styles.space}
        errorMessage={errors.password?.message}
        type="password"
        rules={FormRules.password}
      />

      <Button
        style={styles.button}
        title="Create an account"
        loading={loading}
        textStyle={styles.buttonText}
        onPress={handleSubmit(onSubmit)}
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
