import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Routes } from "./routes";
import { NavigationParamList } from "@/types/navigation.types";
import { SafeAreaView } from "react-native";
import { HomeScreen } from "@/app/Home.Screen";

const Stack = createNativeStackNavigator<NavigationParamList>();

export const MainRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: "slide_from_left" }}
      initialRouteName={Routes.home}
    >
      <Stack.Screen name={Routes.home} component={HomeScreen} />
    </Stack.Navigator>
  );
};
