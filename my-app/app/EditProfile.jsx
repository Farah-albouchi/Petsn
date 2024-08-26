import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, ScrollView, View, TouchableOpacity, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ThemedEdit } from '@/components/Edit';
import { Select, CheckIcon, Box } from "native-base";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import * as ImagePicker from 'expo-image-picker';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Fontisto from '@expo/vector-icons/Fontisto';


const EditProfile = () => {
  const [firstName, setFirstName] = useState("Bennani");
  const [lastName, setLastName] = useState('Chahed');
  const [email, setEmail] = useState("Chahedbennani99@gmail.com");
  const [selectedCountry, setSelectedCountry] = useState("Tunisie");
  const [dob, setDob] = useState("31/07/1999");
  const [selectedGender, setSelectedGender] = useState("Male");
  const [gender, setGender] = useState(['Male', 'Female']);
  const [countries, setCountries] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchCountries();
  }, []);

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
  
  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
  
      const countryList = data.map(country => ({
        label: country.translations.fra.common || country.name.common,
        value: country.cca2,
      }));
  
      countryList.sort((a, b) => a.label.localeCompare(b.label));
  
      setCountries(countryList);
  
      const defaultCountry = countryList.find(country => country.label === 'Tunisie');
      if (defaultCountry) {
        setSelectedCountry(defaultCountry.value);
      }
  
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }} contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.imageContainer}>
        <Image
          source={image ? { uri: image } : require('@/assets/images/profile.png')}
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
          icon={<FontAwesome5 name="user-circle" size={15} color="black" />}
          value={lastName}
          onChangeText={setLastName}
        />
        <ThemedEdit
          placeholder='Prenom'
          icon={<FontAwesome5 name="user-circle" size={15} color="black" />}
          value={firstName}
          onChangeText={setFirstName}
        />
        <ThemedEdit
          placeholder='E-mail'
          icon={<Fontisto name="email" size={15} color="black" />}
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.countryContainer}>
          <AntDesign style={{marginLeft:10}} name="flag" size={15} color="black" />
          <Text style={{ color: 'black', marginLeft: 8, fontSize: 16 }}>|</Text>
          <Box style={styles.selectBox}>
            <Select
              borderColor={"white"}
              borderRadius={30}
              fontFamily={'custom'}
              height={10}
              fontSize={12}
              backgroundColor={"white"}
              selectedValue={selectedCountry}
              placeholder="Pays"
              _selectedItem={{
                endIcon: <CheckIcon size="4" color="black" />,
              }}
              onValueChange={(itemValue) => setSelectedCountry(itemValue)}
              variant="filled"
              color="black"
              dropdownIcon={<Ionicons name="chevron-down-outline" size={12} color="white" />}
            >
              {countries.map((country) => (
                <Select.Item key={country.value} label={country.label} value={country.value} />
              ))}
            </Select>
          </Box>
        </View>
        <ThemedEdit
          placeholder='Date de Naissance'
          icon={<FontAwesome name="calendar" size={15} color="black" />}
          value={dob}
          onChangeText={setDob}
        />
        <View style={styles.countryContainer}>
          <SimpleLineIcons style={{marginLeft:10}} name="people" size={15} color="black" />
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
  }
});

export default EditProfile;
