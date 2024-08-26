import React from 'react';
import { StyleSheet, Image, ScrollView, View, TouchableOpacity } from 'react-native';
import { SettingsIcon } from '@/assets/images/settings';
import { ThemedText } from '@/components/ThemedText';
import { Avatar } from '@rneui/themed';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation  } from '@react-navigation/native';
const Profile = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView style={{ backgroundColor: 'white' }} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/profile.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <TouchableOpacity style={styles.settingsIcon} onPress={
            () => {
              navigation.navigate(
                'EditProfile' 
              )
            }
          }>
            <SettingsIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <ThemedText type='Top'>Chahd Bennani</ThemedText>
            <View style={styles.avatarContainer}>
              <View style={[styles.avatarWrapper, { zIndex: 3 }]}>
                <Avatar
                  rounded
                  size="small"
                  source={require('@/assets/images/dog.png')}
                  avatarStyle={styles.avatar}
                />
              </View>
              <View style={[styles.avatarWrapper, { zIndex: 2 }]}>
                <Avatar
                  rounded
                  size="small"
                  source={require('@/assets/images/cat.png')}
                  avatarStyle={styles.avatar}
                />
              </View>
              <TouchableOpacity style={[styles.addIcon, { zIndex: 1 }]}>
                <Avatar
                  size={30}
                  rounded
                  icon={{ name: "plus" }}
                  containerStyle={{ backgroundColor: "#EC4037" }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.details} >
               <View style={styles.detailsContent}>
                  <ThemedText style={{fontSize:12}} type='address'>Abonnements</ThemedText>
                  <ThemedText style={{fontSize:12}} type='address'>0</ThemedText>
               </View>
               <View style={styles.detailsContent}>
                  <ThemedText style={{fontSize:12}} type='address'>Abonnés</ThemedText>
                  <ThemedText style={{fontSize:12}} type='address'>0</ThemedText>
               </View>
               <View style={styles.detailsContent}>
                  <ThemedText style={{fontSize:12 }} type='address'>Pets</ThemedText>
                  <ThemedText style={{fontSize:12}} type='address'>2</ThemedText>
               </View>
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
          <TouchableOpacity style={{backgroundColor:'#231F2020', width:'100%' , padding:7 , marginBottom:2}} onPress={
            () => {
              navigation.navigate(
                'MyPet' , {
                  name:'Gibby' ,
                  animal : 'Dog' ,
                  image : require('@/assets/images/Mypet.png')
                }
              )
            }
          }>
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
    width: '100%',
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
  header: {
    paddingHorizontal: 10,
    borderBottomWidth : 1 ,
    paddingBottom : 10 ,

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

export default Profile;
