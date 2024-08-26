import React, { useState } from 'react';
import { StyleSheet, Image, ScrollView, View, TouchableOpacity, Text, TextInput } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ThemedEdit } from '@/components/Edit';
import {Stack, Select, CheckIcon, Box , Input } from "native-base";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import * as ImagePicker from 'expo-image-picker';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const EditPet = () => {
  const [firstName, setFirstName] = useState("Bennani");
  const [lastName, setLastName] = useState('Chahed');
  const [email, setEmail] = useState("Chahedbennani99@gmail.com");
  const [weight, setWeight] = useState("20");
  const [height, setHeight] = useState("50");
  const [dob, setDob] = useState("31/07/1999");
  const [selectedGender, setSelectedGender] = useState("Male");
  const [gender, setGender] = useState(['Male', 'Female']);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [6, 5],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // Custom Input Component for Weight and Height
  const CustomInput = ({ value, onChangeText, placeholder, unit , icon }) => (
    <Stack
      w="90%"
      alignItems="center" 
      justifyItems="center"
      marginTop={2}
      style={{
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
        borderRadius :30 ,
      }}
    >
      <Input
      keyboardType='numeric'
        w="93%"
        borderRadius={30}
        paddingLeft={4}
        variant="unstyled"
        InputLeftElement={
          <View style={styles.iconWrapper}>
            {icon}
            <Text style={{ color: 'black', marginLeft: 8, fontSize: 16 }}>|</Text>
          </View>
        }
        placeholder={placeholder}
        placeholderTextColor={'black'}
        _focus={{ borderColor: 'transparent' }}
        style={[styles.input]}
        value={value} 
        onChangeText={onChangeText}
       InputRightElement={
        <Text style={{paddingRight:5}}>{unit}</Text>
       }
      />
    </Stack>
  );

  return (
    <ScrollView style={{ backgroundColor: 'white' }} contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.imageContainer}>
        <Image
          source={image ? { uri: image } : require('@/assets/images/Mypet.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.settingsIcon} onPress={pickImage}>
          <FontAwesome name="image" size={16} color="#EC4037" />
        </TouchableOpacity>
      </View>
       
      <View style={styles.body}>
        <ThemedEdit
          placeholder='Nom'
          icon={<MaterialCommunityIcons name="dog" size={24} color="black" />}
          value={lastName}
          onChangeText={setLastName}
        />
        <ThemedEdit
          placeholder='Age'
          icon={<MaterialCommunityIcons name="dog" size={24} color="black" />}
          value={firstName}
          onChangeText={setFirstName}
        />
     
        <CustomInput
          placeholder="Weight"
          unit="kg"
          value={weight}
          onChangeText={setWeight}
          icon={<FontAwesome5 name="weight" size={24} color="black" />}
        />
        <CustomInput
          placeholder="Height"
          unit="cm"
          value={height}
          onChangeText={setHeight}
          icon={<MaterialIcons name="height" size={24} color="black" />}
        />
        <ThemedEdit
          placeholder='Date de Naissance (dd/mm/yyyy)'
          icon={<FontAwesome name="calendar" size={24} color="black" />}
          value={dob}
          onChangeText={setDob}
        />
        <View style={styles.countryContainer}>
          <SimpleLineIcons style={{marginLeft:10}} name="people" size={24} color="black" />
          <Text style={{ color: 'black', marginLeft: 8, fontSize: 16 }}>|</Text>
          <Box style={styles.selectBox}>
            <Select
              borderColor={"white"}
              borderRadius={30}
              height={10}
              fontFamily={'custom'}
              fontSize={12}
              backgroundColor={"white"}
              selectedValue={selectedGender}
              placeholder="Gender"
              _selectedItem={{
                endIcon: <CheckIcon size="4" color="black" />,
              }}
              onValueChange={(itemValue) => setSelectedGender(itemValue)}
              variant="filled"
              color="black"
              dropdownIcon={<Ionicons name="chevron-down-outline" size={12} color="white" />}
            >
              {gender.map((gender) => (
                <Select.Item key={gender} label={gender} value={gender} />
              ))}
            </Select>
          </Box>
        </View>
      </View>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:30}}>
        <TouchableOpacity style={{backgroundColor:'#231F20', width:'40%', borderRadius:20, alignItems:'center', justifyContent:'center', height:30, marginRight:10}}>
          <Text style={{fontFamily:'custom', color:'white'}}>Annuler</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#189D99', width:'40%', borderRadius:20, alignItems:'center', justifyContent:'center', height:30}}>
          <Text style={{fontFamily:'custom', color:'white'}}>Sauvgarder</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    input: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'thin',
        fontFamily: 'custom',
        height: 40,
        padding: 4,
      },
      iconWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
        marginVertical: 8,
      },
      eyeIconWrapper: {
        justifyContent: 'center',
        margin: 8,
      },
  scrollViewContent: {
    paddingBottom: 200,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 300, 
  },
  settingsIcon: {
    position: 'absolute',
    width: 30,
    height: 30,
    top: 36,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    paddingTop: 8,
    alignItems: "center"
  },
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    width: '89%',
    height : 40,
    marginTop: 5,
    paddingHorizontal: 10,
    marginRight: 5,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  selectBox: {
    flex: 1,
    height: 40
  },
  customInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    width: '89%',
    height: 40,
    marginTop: 5,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  customInput: {
    flex: 1,
    height: '100%',
    color: 'black',
    fontSize: 16,
  },
  unitText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 5,
  },
});

export default EditPet;
