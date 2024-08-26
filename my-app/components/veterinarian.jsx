import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar } from '@rneui/themed';
import { ThemedText } from '@/components/ThemedText';

const Veterinarian = ({ avatarSource, name }) => {
  return (
    <View style={styles.group}>
      <View style={styles.avatarContainer}>
        <Avatar
          rounded
          size={45} 
          source={avatarSource}
          avatarStyle={styles.avatar}
        />
        <View style={styles.greenDot} />
      </View>
      <ThemedText type='subtitle'>{name}</ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    borderColor: '#189D99',
    borderWidth: 1,
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
    right: 0,
    borderColor: '#FFFFFF', // Optional: white border around the dot
    borderWidth: 2,
  },
  group: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
});

export default Veterinarian;
