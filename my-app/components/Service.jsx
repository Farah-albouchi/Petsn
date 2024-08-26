import React from 'react';
import { StyleSheet, Text, Image, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Service = ({ image, title, description, backgroundImage , link }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={{ width: '50%' }} onPress={() => navigation.navigate(link)}>
      <View style={styles.service}>
        <ImageBackground
          source={backgroundImage}
          style={styles.Servicebackground}
          imageStyle={styles.backgroundImage}
        >
          <Image
            source={image}
            style={styles.serviceImage}
          />
          <Text style={{ color: 'white', fontSize: 14, fontFamily: 'bold', marginBottom: 6 }}>{title}</Text>
          <Text style={{ color: 'white', fontSize: 9, fontFamily: 'medium', paddingHorizontal: 2 }}>{description}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Servicebackground: {
    paddingBottom: 20,
    paddingTop: 10,
    paddingLeft: 6,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 10, // Added margin bottom to separate each service
  },
  backgroundImage: {
    borderRadius: 20,
  },
  service: {
    padding: 8, // Reduced padding to minimize space between services
  },
  serviceImage: {
    width: 35,
    height: 35,
  },
});
