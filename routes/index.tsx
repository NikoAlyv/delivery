import React, { useCallback, useEffect, useState } from 'react';
import { AuthRouter } from './Auth.Router';
import { NavigationContainer } from '@react-navigation/native';
import { MainRouter } from './Main.Router';
import { View } from 'react-native';
import { useUserStore } from '@/store/user/user.store';

export const Router = () => {
  const {
    user,
    actions: { initialize: initializeUser },
  } = useUserStore((state) => state);
  const delay = (ms: number, cb?: any) =>
    new Promise((resolve) => setTimeout(resolve, ms, cb));
  const [ready, setReady] = useState<boolean>(false);
  const init = useCallback(async () => {
    await delay(1500, initializeUser());
    setReady(true);
  }, [initializeUser]);

  useEffect(() => {
    init();
  }, [init]);
  if (!ready) {
    return null;
  }
  return <>{user ? <MainRouter /> : <AuthRouter />}</>;
};
