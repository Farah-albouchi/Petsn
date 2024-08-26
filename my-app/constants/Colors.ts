/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Button } from "react-native";
import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#231F20',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
   label :'#fff',
    button : '#231F20',
    
  },
  dark: {
    // text: '#ECEDEE',
    // background: '#151718',
    // tint: tintColorDark,
    // icon: '#9BA1A6',
    // tabIconDefault: '#9BA1A6',
    // tabIconSelected: tintColorDark,
    //  label :'#231F20' ,
    // button : '#fff' 
    text: '#231F20',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
   label :'#fff',
    button : '#231F20',
  },
};
