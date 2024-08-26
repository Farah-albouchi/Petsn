import React from 'react';
import { StyleSheet, ScrollView, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import TopBar from '@/components/TopScreen';
import { SafeZone } from '@/assets/images/safeZone';
import { ThemedText } from '@/components/ThemedText';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Service } from '@/components/Service';

const Emergency = () => {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <TopBar screen={'Emergency'} />
        <ScrollView style={{ backgroundColor: 'white'}}  contentContainerStyle={[styles.scrollViewContent, { paddingBottom: 100 }]} >
          <View style={styles.container}>
            <ImageBackground
              source={require('@/assets/images/Medic.png')}
              style={styles.background}
              imageStyle={styles.backgroundImage}
            >
              <View style={styles.overlay}>
                <View style={styles.rectangle}>
                  <SafeZone />
                  <Text style={{ color: 'white', fontSize: 12, fontFamily: 'medium', marginTop: 10, paddingHorizontal: 2 }}>Safe zone</Text>
                </View>
                <View>
                  <Text style={{ color: 'white', fontSize: 19, fontFamily: 'bold', marginBottom: 10 }}>Need a medic ?</Text>
                  <Text style={{ color: 'white', fontSize: 9, fontFamily: 'medium', paddingHorizontal: 2 }}>For getting instant services</Text>
                  <Text style={{ color: 'white', fontSize: 9, fontFamily: 'medium', paddingHorizontal: 2, marginBottom: 16 }}>please send your nearest veterinary</Text>
                  <View style={styles.call}>
                    <TouchableOpacity style={{ maxWidth: '40%', width: '37%', marginRight: 10 }}>
                      <View style={styles.button}>
                        <Ionicons name="call-outline" size={16} color="white" />
                        <Text style={{ color: 'white', marginLeft: 4, fontFamily: 'custom', fontSize: 12 }}>Call</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={{ color: '#189D99', marginLeft: 4, backgroundColor: 'white', paddingVertical: 7, borderRadius: 10, paddingHorizontal: 12, fontFamily: 'custom', fontSize: 12 }}>Quick alert</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <ThemedText style={{ marginVertical: 30 }} type='title'>Get to know our services</ThemedText>
          <View style={styles.gridContainer}>
            <Service backgroundImage={require('@/assets/images/background1.png')} image={require('@/assets/images/serviceOne.png')} title={'Need a medic'} description={'Lorem Ipsum is simply dummy text of the '}  link='Medic'/>
            <Service backgroundImage={require('@/assets/images/background2.png')} image={require('@/assets/images/serviceTwo.png')} title={'Rescue'} description={'Lorem Ipsum is simply dummy text of the '} link='Rescue' />
            <Service backgroundImage={require('@/assets/images/background3.png')} image={require('@/assets/images/serviceThree.png')} title={'Lost and found'} description={'Lorem Ipsum is simply dummy text of the '} link='Lost&Found' />
            <Service backgroundImage={require('@/assets/images/background4.png')} image={require('@/assets/images/serviceFour.png')} title={'FAQ'} description={'Lorem Ipsum is simply dummy text of the '} link='FAQ'/>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    height: 170,
    justifyContent: 'center',
    paddingLeft: '3%',
    borderRadius: 30,
    overflow: 'hidden',
  },
  backgroundImage: {
    borderRadius: 30,
  },
  scrollViewContent: {
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  container: {
    width: '98%',
    borderRadius: 30,
    overflow: 'hidden',
    marginTop: '8%',
  },
  rectangle: {
    alignSelf: 'flex-start',
    width: '27%',
    height: '100%',
    backgroundColor: '#FFFFFF80',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 15,
  },
  overlay: {
    flexDirection: 'row',
  },
  button: {
    borderColor: 'white',
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  call: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  },

});

export default Emergency;
