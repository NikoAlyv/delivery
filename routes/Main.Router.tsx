import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Routes } from './routes';
import { NavigationParamList } from '@/types/navigation.types';
import { HomeScreen } from '@/app/Home.Screen';
import { ChatScreen } from '@/app/Chat.Screen';

const MianStack = createNativeStackNavigator<NavigationParamList>();

export const MainRouter = () => {
  return (
    <MianStack.Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_left' }}
      initialRouteName={Routes.home}
    >
      <MianStack.Screen name={Routes.home} component={HomeScreen} />
      <MianStack.Screen name={Routes.chat} component={ChatScreen} />
    </MianStack.Navigator>
  );
};
