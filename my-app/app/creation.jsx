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

const Creation = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [gender, setGender] = useState(['Male', 'Female']);
  const [selectedGender, setSelectedGender] = useState("");
  const [check1, setCheck1] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    fetchCountries();
  }, []);

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
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  const handleDobChange = (text) => {

    let cleaned = text.replace(/[^0-9]/g, '');
    let formatted = '';

    // Format the input as dd/mm/yyyy
    if (cleaned.length > 0) {
      formatted = cleaned.slice(0, 2);
    }
    if (cleaned.length >= 3) {
      formatted += '/' + cleaned.slice(2, 4);
    }
    if (cleaned.length >= 5) {
      formatted += '/' + cleaned.slice(4, 8);
    }

    setDob(formatted);
  };


  const isAllFilled = email && password && firstName && lastName && dob && selectedCountry && selectedGender;

  return (
    <>
      <Bar />
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require('../assets/images/Petsn.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <ThemedText type='title'>Connexion</ThemedText>
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
        <ThemedText type='title'>A propos de vous</ThemedText>
        <ThemedInput
          placeholder='Prénom'
          icon={<FontAwesome5 name="user-circle" size={15} color="white" />}
          value={firstName}
          onChangeText={setFirstName}
        />
        <ThemedInput
          placeholder='Nom'
          icon={<FontAwesome5 name="user-circle" size={15} color="white" />}
          value={lastName}
          onChangeText={setLastName}
        />
        <ThemedInput
          placeholder='Date de naissance (dd/mm/yyyy)'
          icon={<FontAwesome5 name="calendar-alt" size={15} color="white" />}
          value={dob}
          onChangeText={handleDobChange}
          maxLength={10}  
          keyboardType="numeric"  
        />
        <Text style={styles.text}>Vous devez avoir au moins 16 ans pour utiliser l’app</Text>
        <View style={styles.drop}>
          <View style={styles.countryContainer}>
            <AntDesign name="flag" size={15} color="white" />
            <Text style={{ color: 'white', marginLeft: 8, fontSize: 16 }}>|</Text>
            <Box style={styles.selectBox}>
              <Select
                borderColor={"#231F20"}
                borderRadius={30}
                fontFamily={'custom'}
                fontSize={12}
                backgroundColor={"#231F20"}
                selectedValue={selectedCountry}
                placeholder="Pays"
                _selectedItem={{
                  endIcon: <CheckIcon size="4" color="white" />,
                }}
                onValueChange={(itemValue) => setSelectedCountry(itemValue)}
                variant="filled"
                color="white"
                dropdownIcon={<Ionicons name="chevron-down-outline" size={12} color="white" />}
              >
                {countries.map((country) => (
                  <Select.Item key={country.value} label={country.label} value={country.value} />
                ))}
              </Select>
            </Box>
          </View>
          <View style={styles.countryContainer}>
            <SimpleLineIcons name="people" size={15} color="white" />
            <Text style={{ color: 'white', marginLeft: 8, fontSize: 16 }}>|</Text>
            <Box style={styles.selectBox}>
              <Select
                borderColor={"#231F20"}
                borderRadius={30}
                fontFamily={'custom'}
                fontSize={12}
                backgroundColor={"#231F20"}
                selectedValue={selectedGender}
                placeholder="Gender"
                _selectedItem={{
                  endIcon: <CheckIcon size="4" color="white" />,
                }}
                onValueChange={(itemValue) => setSelectedGender(itemValue)}
                variant="filled"
                color="white"
                dropdownIcon={<Ionicons name="chevron-down-outline" size={12} color="white" />}
              >
                {gender.map((gender) => (
                  <Select.Item key={gender} label={gender} value={gender} />
                ))}
              </Select>
            </Box>
          </View>
        </View>
        <CheckBox
          center
          title="J’ai lu et j’accepte les conditions de confidentialité et les conditions d’utilisation de Petsn Groupe"
          checked={check1}
          size={16}
          checkedColor='#189D99'
          onPress={() => setCheck1(!check1)}
          textStyle={{
            fontFamily: 'custom',
            fontSize: 7,
            color: '#000',
            fontWeight: '100'
          }}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: isAllFilled ? '#189D99' : '#231F2080' }]}
          onPress={() => { if (isAllFilled) { navigation.navigate('Main') } }}
          disabled={!isAllFilled}
        >
          <Text style={styles.buttonText}>Créer mon compte</Text>
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
    backgroundColor : 'white'
  },
  logo: {
    width: '70%',
    height: undefined,
    aspectRatio: 2,
    marginBottom: 20,
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
    width: '80%',
    marginBottom: 10,
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

export default Creation;
