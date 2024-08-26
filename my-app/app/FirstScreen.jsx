import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedInput } from '@/components/Input';
import Bar from '../components/AppBar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Select, CheckIcon, Box } from "native-base";
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { CheckBox } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const FirstScreen = () => {

  const navigation = useNavigation();
  // New state variables for the inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 



  // Check if all fields are filled
  const isAllFilled = email && password ;

  return (
    <>
      <Bar />
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require('../assets/images/Petsn.png')}
          style={styles.logo}
          resizeMode="contain"
        />
       
        <ThemedInput
          placeholder='E-mail'
          icon={<FontAwesomeIcon color='white' icon={faPaperPlane} size={15} />}
          value={email}
          onChangeText={setEmail}
        />
        <ThemedInput
          type='password'
          placeholder='Mot de passe'
          icon={<AntDesign name="unlock" size={15} color="white" />}
          value={password}
          onChangeText={setPassword}
        />
           <TouchableOpacity
          style={[styles.button, { backgroundColor: isAllFilled ? '#189D99' : '#231F2080' }]}
          onPress={() => { if (isAllFilled) { navigation.navigate('Main') } }}
          disabled={!isAllFilled}
        >
          <Text style={styles.buttonText}>Se Connecter</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 12, margin: 10, color: '#231F20', fontFamily: 'light', fontWeight: '300' ,marginTop:10}}>
          Ou connectez-vous avec
        </Text>
        <Image
          source={require('../assets/images/google.png')}
          style={styles.google}
          resizeMode="contain" 
        />
        <Text style={{ fontSize: 10, color: '#231F20', marginTop: 5, fontFamily: 'light', marginBottom:'20%' }}>
          Google
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={80} color="black" />
        </TouchableOpacity>
      </ScrollView>
    
      <Bar />

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '70%',
    height: undefined,
    aspectRatio: 2,
    marginBottom: '24%',
    marginTop: 10,
  },
  text: {
    fontFamily: 'custom',
    fontSize: 7,
  },
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#231F20',
    borderRadius: 30,
    width: '45%',
    marginTop: 4,
    paddingHorizontal: 10,
    marginRight: 5,
  },
  selectBox: {
    flex: 1,
  },
  drop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  button: {
    width: '90%',
  
    marginTop: 20 , 
    borderRadius: 30,
    paddingVertical: 7,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'custom',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default FirstScreen;
