import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window'); 

const Bar = () => {
  return (
    <Image
      source={require('../assets/images/TopImage.png')} 
      style={styles.background}
      resizeMode="cover" 
    />
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%', 
   
    aspectRatio:7 ,
    height : undefined 
  },
});

export default Bar;
