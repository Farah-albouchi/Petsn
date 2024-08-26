import { useState, useEffect } from 'react';
import * as Font from 'expo-font';


export default function useFonts(fontMap) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync(fontMap);
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return fontsLoaded;
}
