import React from 'react';
import { StyleSheet, ScrollView, Text, View, ImageBackground, TouchableOpacity, requireNativeComponent } from 'react-native';
import TopBar from '@/components/TopScreen';
import { SafeZone } from '@/assets/images/safeZone';
import { ThemedText } from '@/components/ThemedText';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Service } from '@/components/Service';
import ProfileCard from '@/components/ProfileCard';
import Veterinarian from '@/components/veterinarian';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar } from '@rneui/themed';
import Appointment from '@/components/Appointment';

 const Medic = () => {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <TopBar screen={'Need a medic'} />
        <ScrollView contentContainerStyle={[styles.scrollViewContent, { paddingBottom: 100 }]}>
          <ThemedText style={{ fontSize: 15, }} type='Type'>Available veterinarians now</ThemedText>
          <ScrollView
            horizontal
            contentContainerStyle={styles.container}
          >
            <Veterinarian
              avatarSource={require('@/assets/images/veterinarian1.jpeg')}
            />
            <Veterinarian
              avatarSource={require('@/assets/images/veterinarian2.png')}
            />
            <Veterinarian
              avatarSource={require('@/assets/images/veterinarian3.png')}
            />
            <Veterinarian
              avatarSource={require('@/assets/images/veterinarian3.png')}
            />
            <Veterinarian
              avatarSource={require('@/assets/images/veterinarian3.png')}
            />
            <Veterinarian
              avatarSource={require('@/assets/images/veterinarian3.png')}
            />
          </ScrollView>
          <ThemedText style={{ fontSize: 15,marginBottom:20 }} type='Type'>Book Appointment</ThemedText>

         <Appointment image={require('@/assets/images/veterinarian1.jpeg')} name={'Dr . Arwa Aissa'} price={'40 TND/Hour'} time={'10pm - 05am'} />
         <Appointment image={require('@/assets/images/veterinarian2.png')} name={'Dr . Arwa Aissa'} price={'40 TND/Hour'} time={'10pm - 05am'} />
         <Appointment image={require('@/assets/images/veterinarian3.png')} name={'Dr . Arwa Aissa'} price={'40 TND/Hour'} time={'10pm - 05am'} />
         <Appointment image={require('@/assets/images/veterinarian3.png')} name={'Dr . Arwa Aissa'} price={'40 TND/Hour'} time={'10pm - 05am'} />
        </ScrollView>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 10,
    overflow: 'visible',
  },
  scrollViewContent: {
    paddingHorizontal: 12
  },
  avatarContainer: {

    borderRadius: 50,
    padding: 1,
    marginBottom: '6%',
    position: 'relative', // Required for absolute positioning
  },
  avatar: {
    borderWidth: 0,
  },
  greenDot: {
    width: 12, // Adjust size as needed
    height: 12, // Adjust size as needed
    backgroundColor: '#18F13A',
    borderRadius: 6,
    position: 'absolute',
    bottom: 4,
    right: 2,
    borderColor: '#FFFFFF', // Optional: white border around the dot
    borderWidth: 2,
  },
})
export default Medic ; 