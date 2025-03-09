import React from 'react';
import { Router } from '@/routes/index';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Toast } from '@/components/Toast';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
// import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

function App() {
  return (
    <SafeAreaProvider>
      <Router />
      <Toast />
    </SafeAreaProvider>
  );
}
export default gestureHandlerRootHOC(App);
