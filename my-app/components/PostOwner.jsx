import React, { useState, useRef } from 'react';
import { StyleSheet, View, Image, Dimensions, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Avatar } from '@rneui/themed';
import { ThemedText } from '@/components/ThemedText';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path } from 'react-native-svg';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Comment } from './Comments';
import { Input } from 'native-base';

const { width } = Dimensions.get('window');

const PostOwner = ({ address, avatarSource, post, name, liked, comments, Postdescription, numberLikes, date, saved }) => {
  const [showComments, setShowComments] = useState(false);
  const [addComment, setAddComment] = useState(false)
  const [IsLiked, setIsLiked] = useState(liked);
  const [Issaved, setIssaved] = useState(saved);
  const lastTap = useRef(null);

  const toggleComments = () => {
    setShowComments(prevShowComments => !prevShowComments);
  };
  const Likes = () => {
    setIsLiked(prevIssetIsLiked => !prevIssetIsLiked);
  };
  const save = () => {
    setIssaved(prevIssetIssaved => !prevIssetIssaved);
  };
  const handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300; // 300 ms for double-tap

    if (lastTap.current && (now - lastTap.current) < DOUBLE_PRESS_DELAY) {
      setIsLiked(true);
    } else {
      lastTap.current = now;
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.group}>
          <LinearGradient
            colors={['#EC4037', '#189D99', '#ED057E', '#D7DE1F']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.linearGradient}
          >
            <Avatar
              rounded
              size="small"
              source={avatarSource}
              avatarStyle={styles.avatar}
            />
          </LinearGradient>
          <View style={styles.textContainer}>
            <ThemedText type='name'>{name}</ThemedText>
            <ThemedText type='address'>{address}</ThemedText>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={handleDoubleTap}>
          <Image
            source={post}
            style={styles.image}
            resizeMode="contain"
          />
        </TouchableWithoutFeedback>

        <View style={styles.reaction}>
          <View style={styles.icons}>
            <TouchableOpacity onPress={Likes}>
              {!IsLiked ? <AntDesign name="hearto" size={22} color="black" /> : <AntDesign name="heart" size={22} color="rgb(231, 14, 14)" />}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setAddComment(!addComment)}>
              <Svg style={styles.icon} width={24} height={24} viewBox="0 0 24 24">
                <Path d="M13.5212 0.850453H4.47865C2.46552 0.850453 0.818724 2.56124 0.818724 4.65238V11.3621C0.818724 13.4529 2.46584 15.164 4.47865 15.164H7.3221C6.91532 16.8358 6.42263 18.338 4.9175 19.7245C7.79544 18.9599 10.0171 17.4142 11.6476 15.164H12.1394C14.152 15.164 17.1814 13.4532 17.1814 11.3621V4.65238C17.1811 2.56124 15.5343 0.850453 13.5212 0.850453ZM13.0752 6.87545C12.3418 6.87545 11.7472 7.49337 11.7472 8.25526C11.7472 9.01715 12.3418 9.63507 13.0752 9.63507C13.809 9.63507 14.4036 9.01715 14.4036 8.25526C14.4036 7.49337 13.809 6.87545 13.0752 6.87545ZM4.92459 6.87545C4.19096 6.87545 3.59626 7.49337 3.59626 8.25526C3.59626 9.01715 4.19096 9.63507 4.92459 9.63507C5.65806 9.63507 6.25292 9.01715 6.25292 8.25526C6.25292 7.49337 5.65806 6.87545 4.92459 6.87545ZM9 6.87545C8.26653 6.87545 7.67167 7.49337 7.67167 8.25526C7.67167 9.01715 8.26653 9.63507 9 9.63507C9.73363 9.63507 10.3282 9.01715 10.3282 8.25526C10.3282 7.49337 9.73363 6.87545 9 6.87545ZM4.47865 0H13.5214L13.5223 0.00334824C14.7565 0.00368307 15.876 0.525507 16.6849 1.36592L16.6833 1.36759C17.4935 2.21017 17.9965 3.37268 17.9968 4.65188V11.3621C17.9961 12.7298 17.0814 13.9223 15.8629 14.7547C14.7282 15.5296 13.2952 16.011 12.1394 16.0111H12.0462C11.2301 17.0673 10.2829 17.9688 9.19775 18.709C7.99819 19.5273 6.64101 20.1439 5.11864 20.5483L5.11799 20.5456C4.83144 20.621 4.51571 20.5314 4.30636 20.2858C4.00788 19.9354 4.03947 19.3999 4.37679 19.0898C5.04047 18.4786 5.48062 17.8424 5.79924 17.1756C5.97669 16.8042 6.11932 16.4166 6.24325 16.0141H4.47848H4.47736V16.0106C3.24347 16.0103 2.12401 15.4885 1.31495 14.6481C0.505739 13.8078 0.00338449 12.6446 0.00322332 11.3624V4.65238H0V4.65121H0.00322332C0.00338449 3.39545 0.487205 2.25337 1.26967 1.41698C1.28401 1.39956 1.29884 1.38249 1.31463 1.36608C2.12385 0.525506 3.24347 0.00334824 4.478 0.00318083L4.47865 0Z" />
              </Svg>
            </TouchableOpacity>


          </View>

          <TouchableOpacity onPress={save}>
            <View style={styles.save}>
              {!Issaved ? <Ionicons name="bookmark-outline" size={24} color="black" /> : <Ionicons name="bookmark" size={24} color="black" />}
            </View>
          </TouchableOpacity>

        </View>
        <View style={styles.likes}>
          <ThemedText style={{ marginRight: 10 }} type='number'>{numberLikes}</ThemedText>
          <ThemedText type='likes'>likes</ThemedText>
        </View>

        <Comment Owner={name} comment={Postdescription} />

        <TouchableOpacity style={{ marginVertical: 5 }} onPress={toggleComments}>
          <ThemedText style={{ fontSize: 10 }} type='subtitle'>
            {showComments ? "View less" : "View all comments"}
          </ThemedText>
        </TouchableOpacity>
        {comments.length > 0 && (
          <Comment Owner={comments[0].owner} comment={comments[0].comment} />
        )}

        {showComments && comments.slice(1).map((comment, index) => (
          <Comment key={index} Owner={comment.owner} comment={comment.comment} />
        ))}
        <ThemedText style={{ fontSize: 10 }} type='subtitle'>
          {date}
        </ThemedText>
        {addComment ? (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Input
              style={{ width: '60%' }}
              variant="underlined"
              placeholder="Add your comment"
            />
            <TouchableOpacity style={styles.send} onPress={() => { }}>
              <Ionicons name="send" size={12} color="#189D99" />
            </TouchableOpacity>
          </View>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  group: {
    flexDirection: 'row',
    alignItems: 'center',
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
  textContainer: {
    marginLeft: 2,
  },
  image: {
    marginTop: 10,
    width: width - 20,
    height: (width - 20) * 1.3,
    alignSelf: 'center',
  },
  reaction: {
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  commentIcon: {
    width: 100,
    height: 100,
  },
  icon: {
    marginLeft: '9%',
    marginTop: 2
  },
  icons: {

    flexDirection: 'row',

    justifyContent: 'flex-start'
  },
  save: {

  },
  likes: {
    flexDirection: 'row',

    marginTop: '1%' 
  },

});

export default PostOwner;
