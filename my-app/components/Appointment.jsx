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

const Appointment = ({ name, price, time, image }) => {
  return (
    <View>
      <View style={{ flexDirection: 'row', flex: 1, position: 'relative', marginBottom: 10 }}>
        <View style={{ backgroundColor: '#EEF2EA', paddingHorizontal: 20, borderTopLeftRadius: 20, height: 185, paddingTop: 10, borderWidth: 1, borderColor: 'transparent', borderBottomLeftRadius: 20, }}>
          <Text style={{ fontFamily: 'bold', color: '#231F20', fontSize: 18 }}>{name}</Text>
          <Text style={{ fontFamily: 'custom', color: '#757071', fontSize: 16 }}>veterinary</Text>
          <Text style={{ fontFamily: 'bold', color: '#231F20', fontSize: 16 }}>{price}</Text>
          <Text style={{ fontFamily: 'custom', color: '#757071', fontSize: 16 }}>{time}</Text>
        </View>
        <LinearGradient
          colors={['#ACC492', '#FFFFFF00']}
          style={{ borderWidth: 1, borderColor: 'transparent', borderTopRightRadius: 20, borderBottomRightRadius: 20, width: '30%' }}
        >
          <View style={{ height: 185, alignItems: 'center', padding: 10, paddingTop: 50 }}>
            <View style={styles.avatarContainer}>
              <Avatar
                rounded
                size={55}
                source={image}
                avatarStyle={styles.avatar}
              />
              <View style={styles.greenDot} />
            </View>
          </View>
        </LinearGradient>
      </View>
      <TouchableOpacity style={{
        backgroundColor: '#231F20', position: 'absolute',
        bottom: 30,
        right: 40, borderRadius: 20, padding: 10, borderWidth: 1, width: 150, justifyContent: 'center', alignItems: 'center'
      }}>
        <Text style={{ color: 'white', fontFamily: 'bold' }}>Appointment</Text>
      </TouchableOpacity>
    </View>
  );
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
    position: 'relative', 
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
});
export default Appointment; 