import React from 'react';
import { Text, type TextProps, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { useThemeColor } from '@/hooks/useThemeColor';


export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'Type' | 'subtitle' | 'link' | 'Top' |'name' |'address' |'number'|'likes';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  // const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

 
  return (
    <Text
      style={[
        { color },
        type === 'default' && styles.default,
        type === 'title' && styles.title,
        type === 'Type' && styles.Type,
        type === 'subtitle' && styles.subtitle,
        type === 'link' && styles.link,
        type === 'Top' && styles.Top,
        type === 'name' && styles.name,
        type === 'address' && styles.address,
        type === 'number' && styles.number,
        type === 'likes' && styles.likes,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    
  },
  Type: {
    fontFamily: 'bold',
    fontSize: 16 ,    
  },
  title: {
    fontSize: 16,
    alignSelf:'flex-start' , 
    paddingHorizontal : 30, 
    lineHeight: 20,
    marginBottom: 2,
    marginTop:10, 
    fontFamily: 'bold',
  },
  subtitle: {
    fontFamily : 'custom',
    fontSize: 7 ,
  
   
  },

  number : {
    fontFamily : 'custom',
    fontSize: 12 ,
  },
  likes : {
    fontFamily : 'bold',
    fontSize: 12 ,
  },
  address: {
    fontFamily : 'custom',
    fontSize: 8 ,
   
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
    
  },
  name: {
    fontFamily : 'medium',
    fontSize: 13,
  },
  Top : {
    fontSize: 20,
    fontFamily: 'bold',
  }
});
