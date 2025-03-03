import React from "react";
import { Router } from "@/routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthRouter } from "@/routes/Auth.Router";

export default function App() {
  return (
    <SafeAreaProvider>
      <Router />
    </SafeAreaProvider>
  );
}
