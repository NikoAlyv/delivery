import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Routes } from "./routes";
import { NavigationParamList } from "@/types/navigation.types";
import { LoginScreen } from "@/app/auth/Login.Screen";
import { RegisterScreen } from "@/app/auth/Register.Screen";
import { SafeAreaView } from "react-native";

const AuthStack = createNativeStackNavigator<NavigationParamList>();

export const AuthRouter = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false, animation: "slide_from_left" }}
      initialRouteName={Routes.login}
    >
      <AuthStack.Screen name={Routes.login} component={LoginScreen} />
      <AuthStack.Screen name={Routes.register} component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};
