import React from 'react';
import { StyleSheet, Image, ScrollView, View, TouchableOpacity , Dimensions , Text } from 'react-native';
import { SettingsIcon } from '@/assets/images/settings';
import { ThemedText } from '@/components/ThemedText';
import { Avatar } from '@rneui/themed';
import { useNavigation , useRoute } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const { width } = Dimensions.get('window');

const MyPet = () => {
  
    const navigation = useNavigation();

    const route = useRoute();
    const { 
        name = 'Default Name', 
        image = null,
        animal = 'Default Animal'
    } = route.params || {};
  return (
    <>
      <ScrollView style={{ backgroundColor: 'white' }} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.imageContainer}>
          <Image
            source={image}
            style={styles.image}
            resizeMode="contain"
          />
          <TouchableOpacity style={styles.settingsIcon} onPress={
            () => {
              navigation.navigate(
                'EditPet' 
              )
            }
          }>
            <SettingsIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          
          <ThemedText type='Top'>{name}</ThemedText>
          <View style={{backgroundColor:'#EC4037' , alignItems:'center' , justifyContent:'center' ,width:100 , borderRadius:30}}>
            <Text style={{fontFamily:'bold' , fontSize:18 , color :'white'}}>{animal}</Text>
          </View>
        </View>
        <View style={styles.body}>
          <ThemedText style={{fontSize:15, paddingHorizontal : 10}} type='name'>Activités</ThemedText>
          <TouchableOpacity style={{backgroundColor:'#231F2020', width:'100%' , padding:7 , marginBottom:2}}>
            <View style={{flexDirection:'row' , justifyContent:'space-between' }}>
            <ThemedText style={{fontSize:12,paddingHorizontal : 10}} type='name'>Mes activités</ThemedText>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="#231F20" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#231F2020', width:'100%' , padding:7, marginBottom:2}}>
            <View style={{flexDirection:'row' , justifyContent:'space-between' }}>
            <ThemedText style={{fontSize:12,paddingHorizontal : 10}} type='name'>Mes activités</ThemedText>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="#231F20" />
            </View>
          </TouchableOpacity>
          <ThemedText style={{fontSize:15, paddingHorizontal : 10}} type='name'>Petsn</ThemedText>
          <TouchableOpacity style={{backgroundColor:'#231F2020', width:'100%' , padding:7 , marginBottom:2}}>
            <View style={{flexDirection:'row' , justifyContent:'space-between' }}>
            <ThemedText style={{fontSize:12,paddingHorizontal : 10}} type='name'>My pets</ThemedText>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="#231F20" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#231F2020', width:'100%' , padding:7, marginBottom:2}}>
            <View style={{flexDirection:'row' , justifyContent:'space-between' }}>
            <ThemedText style={{fontSize:12,paddingHorizontal : 10}} type='name'>Visiter la boutique</ThemedText>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="#231F20" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#231F2020', width:'100%' , padding:7, marginBottom:2}}>
            <View style={{flexDirection:'row' , justifyContent:'space-between' }}>
            <ThemedText style={{fontSize:12,paddingHorizontal : 10}} type='name'>Mes récompenses</ThemedText>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="#231F20" />
            </View>
          </TouchableOpacity>
          <ThemedText style={{fontSize:15, paddingHorizontal : 10}} type='name'>Ma communauté</ThemedText>
          <TouchableOpacity style={{backgroundColor:'#231F2020', width:'100%' , padding:7 , marginBottom:2}}>
            <View style={{flexDirection:'row' , justifyContent:'space-between' }}>
            <ThemedText style={{fontSize:12,paddingHorizontal : 10}} type='name'>Parrainer mes amis</ThemedText>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="#231F20" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#231F2020', width:'100%' , padding:7, marginBottom:2}}>
            <View style={{flexDirection:'row' , justifyContent:'space-between' }}>
            <ThemedText style={{fontSize:12,paddingHorizontal : 10}} type='name'>Rechercher des contact sur Petsn</ThemedText>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="#231F20" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
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
    width: width,
    height : width  ,
  },
  settingsIcon: {
    position: 'absolute',
    width: 30,
    height: 30,
    top: 50,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: 10,
    borderBottomWidth : 1 ,
    paddingBottom : 10 ,
    flexDirection : 'row' ,
    justifyContent : 'space-between',
    alignItems:'center'

  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  avatarWrapper: {
    position: 'relative',
    marginLeft: -15,
    marginTop: 2,

  },
  avatar: {
    width: 30,
    height: 30,

  },
  addIcon: {
    position: 'relative',
    marginLeft: -15,
    // backgroundColor: '#EC4037',
    // borderRadius: 20,
    // padding: 5,
    // justifyContent: 'center',
    // alignItems: 'center',

    // borderWidth: 2,
    // borderColor: 'white',
  },
  addIconText: {
    color: 'white',
    // fontWeight: 'bold',
  },
  details : {
    flexDirection : 'row' , 
    justifyContent:'space-between',
    paddingHorizontal : 20 ,
  },
  detailsContent : {
    alignItems:'center'
  },
  body : {
    paddingTop : 8 ,
    
  }
});

export default MyPet;
