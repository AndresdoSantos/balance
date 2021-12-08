import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/inter';

import { AppProvider } from './src/contexts/AppContext';

import { Render } from './src/Render';

export default function App() {
  let [fontsLoaded] = useFonts({
    'inter-400': require('./assets/fonts/Inter/Inter-Regular.ttf'),
    'inter-600': require('./assets/fonts/Inter/Inter-Medium.ttf'),
    'inter-700': require('./assets/fonts/Inter/Inter-SemiBold.ttf'),
    'inter-800': require('./assets/fonts/Inter/Inter-Bold.ttf'),
    'inter-900': require('./assets/fonts/Inter/Inter-ExtraBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <AppProvider>
        <Render />
      </AppProvider>
    );
  }
}
