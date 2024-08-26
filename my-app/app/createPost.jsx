import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View , Button , Image,TouchableOpacity , Text } from 'react-native';
import TopBar from '@/components/TopScreen';
import ProfileCard from '@/components/ProfileCard';
import PostOwner from '@/components/PostOwner';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar } from '@rneui/themed';
import { ThemedText } from '@/components/ThemedText';
import { Select, CheckIcon, Box } from "native-base";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Input } from '@rneui/themed';
import * as ImagePicker from 'expo-image-picker';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Video } from 'expo-av';


const CreatePost = () => {
  const [media, setMedia] = useState(null);
  const [mediaType, setMediaType] = useState(null);

  const pickMedia = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [6, 5],
      quality: 1,
    });

    if (!result.canceled) {
      setMedia(result.assets[0].uri);
      setMediaType(result.assets[0].type);  // Set the media type (image or video)
    }
  };

  const [Post, setPost] = useState(['Lost and Found', 'Home', 'Story']);
  const [selectedPost, setSelectedPost] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <TopBar screen={'Create a post'} />
      <ScrollView style={{ backgroundColor: 'white' }} contentContainerStyle={styles.scrollViewContent}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <LinearGradient
                colors={['#EC4037', '#189D99', '#ED057E', '#D7DE1F']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.linearGradient}
              >
                <Avatar
                  rounded
                  size="small"
                  source={require('@/assets/images/person.png')}
                  avatarStyle={styles.avatar}
                />
              </LinearGradient>
              <ThemedText style={{ fontSize: 10 }} type='name'>Chahed Bennani</ThemedText>
            </View>
          <Box style={styles.selectBox}>
            <Select
              borderColor={"#189D99"}
              borderRadius={30}
              fontFamily={'custom'}
              fontSize={12}
              height={8}
              backgroundColor={"#189D99"}
              selectedValue={selectedPost}
              placeholderTextColor={"white"}
              placeholder="Post"
              _selectedItem={{
                endIcon: <CheckIcon size="3" color="white" />,
              }}
              onValueChange={(itemValue) => setSelectedPost(itemValue)}
              variant="filled"
              color="white"
              dropdownIcon={<Ionicons name="chevron-down-outline" size={10} color="white" />}
              style={styles.select}
            >
              {Post.map((Post) => (
                <Select.Item key={Post} label={Post} value={Post} />
              ))}
            </Select>
          </Box>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Input
            w={'80%'}
            borderRadius={10}
            height={10}
            placeholder='Votre titre ici'
            inputContainerStyle={{ borderColor: 'white' }}
            style={{
              fontFamily: 'custom',
              padding: 4,
              color: 'black',
              backgroundColor: '#fff',
              shadowColor: '#000',
              shadowOffset: { width: 1, height: 7 },
              shadowOpacity: 0.3,
              shadowRadius: 3,
              elevation: 5,
              fontSize: 11
            }}
          />
          <Input
            w={'80%'}
            borderRadius={10}
            multiline
            height={200}
            placeholder='Que voulez-vous dire ?'
            inputStyle={{ textAlignVertical: 'top' }}
            inputContainerStyle={{ borderColor: 'white' }}
            style={{
              fontFamily: 'custom',
              padding: 4,
              color: 'black',
              backgroundColor: '#fff',
              shadowColor: '#000',
              shadowOffset: { width: 1, height: 7 },
              shadowOpacity: 0.3,
              shadowRadius: 3,
              elevation: 5,
              fontSize: 11
            }}
          />
        </View>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity 
              style={styles.uploadButton} 
              onPress={pickMedia}>
              <FontAwesome name="image" size={20} color="white" /> 
            </TouchableOpacity>
            <ThemedText style={{ fontSize: 12 }} type='address'>Photo/Video</ThemedText>
          </View>

          {media && (
            mediaType === 'video' ? (
              <Video
                source={{ uri: media }}
                style={styles.media}
                useNativeControls
                resizeMode="contain"
              />
            ) : (
              <Image source={{ uri: media }} style={styles.media} />
            )
          )}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.cancelButton]}>
            <Text style={styles.buttonText}>Annuler</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.publishButton]}>
            <Text style={styles.buttonText}>Publier</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: 200,
  },
  avatar: {
    borderWidth: 0,
  },
  selectBox: {
    flex: 0.8,
    justifyContent: 'center',
  },
  select: {
    marginRight: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingLeft: 20,
  },
  media: {
    width: "90%",
    aspectRatio: 1.2,
    marginTop: 10,
  },
  uploadButton: {
    backgroundColor: "#231F20",
    marginRight: 15,
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  button: {
    width: '40%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#231F20',
  },
  publishButton: {
    backgroundColor: '#189D99',
  },
  buttonText: {
    fontFamily: 'custom',
    color: 'white',
  },
  linearGradient: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'transparent',
    padding: 2,
    marginRight: 8,
  },
  avatar: {
    borderWidth: 0,
  },
});

export default CreatePost;
