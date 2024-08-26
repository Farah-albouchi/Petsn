import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import Bar from '../components/AppBar';

import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  return (
    <>
      <Bar />
      <View style={styles.container}>
        <Image
          source={require('../assets/images/Petsn.png')}
          style={styles.logo}
          resizeMode="contain" 
        />
        <Image
          source={require('../assets/images/Login.png')}
          style={styles.image}
          resizeMode="contain" 
        />
        
        <TouchableOpacity style={styles.button} onPress={() => {{navigation.navigate('Creation')}}}>
          <Text style={styles.buttonText}>Créer un compte</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {{{navigation.navigate('FirstScreen')}}}}>
          <Text style={styles.buttonText}>Se Connecter</Text>
        </TouchableOpacity>
        
        <Text style={{ fontSize: 12, margin: 10, color: '#231F20', fontFamily: 'custom', fontWeight: '400' ,marginTop:20}}>
          Ou connectez-vous avec
        </Text>
        <Image
          source={require('../assets/images/google.png')}
          style={styles.google}
          resizeMode="contain" 
        />
        <Text style={{ fontSize: 10, color: '#231F20', marginTop: 5, fontFamily: 'custom' }}>
          Google
        </Text>
      </View>
      <Bar />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '68%',
    height: undefined, 
    aspectRatio: 2, 
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.3,
    marginBottom : 30
  },
  google: {
    width: '13%',
    height: undefined,
    aspectRatio: 1,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#231F20',
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
    width: '80%',
    height: 34 
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'custom',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Login;
