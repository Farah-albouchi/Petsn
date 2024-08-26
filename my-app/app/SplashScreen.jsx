import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Bar from '../components/AppBar';


export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <>
        <Bar />
        <View style={styles.container}>
      <Image
        source={require('@/assets/images/Petsn.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      
      <Image
        source={require('@/assets/images/SplashScreen.png')}
        style={styles.image}
        resizeMode="contain"
      />
      </View>
      <Bar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal:100

  },
  logo: {
    // flex : 0.5 ,
    marginTop : '80%' ,
    width : '95%',
    // aspectRatio:0.5
  },
image : {
  width : '80%' ,
}
});