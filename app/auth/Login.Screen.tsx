import { View, Text } from "react-native";
import React, { useState } from "react";
import { Button } from "@/components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationParamList } from "@/types/navigation.types";
import { Routes } from "@/routes/routes";
import { InputControlled } from "@/components/InputControlled";
import { useForm } from "react-hook-form";
import { FormRules } from "@/constants/formRules";

interface ILogin {
  email: string;
  password: string;
}
export const LoginScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.login>
> = ({ navigation }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<ILogin>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <View>
      <InputControlled
        keyboardType="email-address"
        control={control}
        errorMessage={errors.email?.message}
        rules={FormRules.email}
        label="Email"
        name="email"
        type="text"
        placeholder="Enter your email"
      />
      
      <Button
        title="Login"
        onPress={() => navigation.navigate(Routes.register)}
      />
    </View>
  );
};
