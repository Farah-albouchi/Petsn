import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useCallback, useState } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import App from './main2';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  

  const [fontsLoaded] = useFonts({
    custom: require('../assets/fonts/Custom.ttf'),
    light: require('../assets/fonts/SourceCodePro-ExtraLight.ttf'),
    bold: require('../assets/fonts/SourceCodePro-Bold.ttf'),
    medium: require('../assets/fonts/SourceCodePro-Medium.ttf'),
  });

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded]);

  if (!appIsReady || !fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <NativeBaseProvider>
        <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
          <App />
        </View>
      </NativeBaseProvider>
    </ThemeProvider>
  );
}
