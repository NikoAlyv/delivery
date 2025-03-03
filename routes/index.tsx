import React, { useCallback, useEffect, useState } from "react";
import { AuthRouter } from "./Auth.Router";
import { NavigationContainer } from "@react-navigation/native";
import { MainRouter } from "./Main.Router";
import BootSplash from "react-native-bootsplash";
import { View } from "react-native";

export const Router = () => {
  const user = null;
  return <>{user ? <MainRouter /> : <AuthRouter />}</>;
};
