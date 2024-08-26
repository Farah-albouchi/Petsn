import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Modal, Image } from 'react-native';
import { Avatar } from '@rneui/themed';
import { ThemedText } from '@/components/ThemedText';
import { LinearGradient } from 'expo-linear-gradient';

const ProfileCard = ({ isOwner, avatarSource, name, storySource }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [hasViewedStory, setHasViewedStory] = useState(false);

  const handlePress = () => {
    setIsModalVisible(true);
    setHasViewedStory(true);

    setTimeout(() => {
      setIsModalVisible(false);
    }, 2000); 
  };

  return (
    <View style={styles.group}>
      {isOwner ? (
        <TouchableOpacity onPress={handlePress}>
        <LinearGradient
          colors={['#EC4037', '#189D99', '#ED057E', '#D7DE1F']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.linearGradient}
        >
          <View>
            <Avatar
              rounded
              size="medium"
              source={avatarSource}
              avatarStyle={styles.avatar}
            />
          </View>
        </LinearGradient>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handlePress}>
          <View style={[styles.avatarContainer, hasViewedStory && styles.grayBorder]}>
            <Avatar
              rounded
              size="medium"
              source={avatarSource}
              avatarStyle={styles.avatar}
            />
          </View>
        </TouchableOpacity>
      )}
      <ThemedText type='subtitle'>{name}</ThemedText>

   
      <Modal
        visible={isModalVisible}
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Image source={storySource} style={styles.storyImage} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'transparent',
    padding: 2,
    marginBottom: '6%',
  },
  avatarContainer: {
    borderColor: '#189D99',
    borderWidth: 2,
    borderRadius: 50,
    padding: 1,
    marginBottom: '6%',
  },
  grayBorder: {
    borderColor: 'gray',
  },
  avatar: {
    borderWidth: 0,
  },
  group: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)', 
  },
  storyImage: {
    width: 300,
    height: 500,
    resizeMode: 'contain',
  },
});

export default ProfileCard;
