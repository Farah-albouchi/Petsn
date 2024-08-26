import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import TopBar from '@/components/TopScreen';
import ProfileCard from '@/components/ProfileCard';
import PostOwner from '@/components/PostOwner';

const Home = () => {
  const [viewedStories, setViewedStories] = useState({});

  const handleViewStory = (name) => {
    setViewedStories((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <>
      <View style={{ backgroundColor: 'white' }}>
        <TopBar screen={'Home'} />
        <ScrollView style={{ backgroundColor: 'white' }} contentContainerStyle={styles.scrollViewContent}>
          <ScrollView
            horizontal
            contentContainerStyle={styles.container}
          >
            <ProfileCard
              isOwner
              avatarSource={require('@/assets/images/person.png')}
              storySource={require('@/assets/images/person2.png')}
              name="Chahed Bennani"
              onViewStory={() => handleViewStory('Chahed Bennani')}
            />
            <ProfileCard
              isOwner={false}
              avatarSource={require('@/assets/images/person2.png')}
              storySource={require('@/assets/images/person2.png')}
              name="Chahed Bennani"
              onViewStory={() => handleViewStory('Chahed Bennani')}
            />
            <ProfileCard
              isOwner={false}
              avatarSource={require('@/assets/images/postOwner.png')}
              storySource={require('@/assets/images/person.png')}
              name="aaaaa"
              onViewStory={() => handleViewStory('aaaaa')}
            />
          </ScrollView>
          <View style={styles.posts}>
            <PostOwner
              avatarSource={require('@/assets/images/postOwner.png')}
              name="Charlotte de Witte"
              address="Sousse, Tunisie"
              post={require('@/assets/images/dog.png')}
              liked={false}
              saved={true}
              Postdescription={"3 years old australian shepherd real race with all his equipment"}
              comments={[{ owner: 'Charlotte de Witte', comment: 'Thank u so much @chahd' }, { owner: 'Charlotte de Witte', comment: 'i really appriciate it dude @hamdi' }]}
              date={"3 weeks ago"}
              numberLikes={37.944}
            />
            <PostOwner
              avatarSource={require('@/assets/images/person2.png')}
              name="Samir bouargoub"
              address="Nabeul, Tunisie"
              post={require('@/assets/images/cat.png')}
              liked={true}
              saved={false}
              Postdescription={" 3 months old Seberian cats realrace with all their equipment"}
              comments={[{ owner: 'Samir bouargoub', comment: 'Thank u so much @chahd' }, { owner: 'Samir bouargoub', comment: 'i really appriciate it dude @hamdi' }]}
              date={"4 weeks ago"}
              numberLikes={35}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 4,
    paddingVertical: 10,
    overflow: 'visible',
  },
  posts: {
    borderTopColor: '#231F20',
    borderTopWidth: 0.5,
  },
  scrollViewContent: {
    paddingBottom: 200, 
  },
});

export default Home;
