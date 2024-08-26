import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import TopBar from '@/components/TopScreen';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { ThemedText } from '@/components/ThemedText';
import { LinearGradient } from 'expo-linear-gradient';
import FAQItem from '@/components/FAQItem';

export const FAQ = () => {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <TopBar screen={'FAQ'} />
        <ScrollView contentContainerStyle={[styles.scrollViewContent, { paddingBottom: 100 }]}>
          <ThemedText style={{ fontSize: 20, textAlign: 'center' ,   paddingHorizontal: 12, }} type='Top'>Frequently Asked Questions</ThemedText>
           <FAQItem 
           question="Lorem Ipsum is simply dummy?" 
            answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
           />
            <FAQItem 
           question="Lorem Ipsum is simply dummy?" 
            answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
           />
          {/* <View style={{ marginVertical: 15 }}>
            <View style={styles.faqItem}>
              <ThemedText type='name'>Lorem Ipsum is simply dummy?</ThemedText>
              <FontAwesome5 name="plus" size={18} color="black" />
            </View>
            
            <LinearGradient
              colors={['#189D99', '#EC4037', '#D7DE1F', '#ED057E']}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={styles.gradientLine}
            />
          </View> */}
          
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingTop: 10,
paddingHorizontal : 3 ,
   
  },
  faqItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom : 12 ,
    
  },
  gradientLine: {
    height: 2, // Thin line
  
    marginTop: 5, // Space between the question and the line
  },
});
