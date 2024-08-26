// FAQItem.js
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { ThemedText } from '@/components/ThemedText';
import { LinearGradient } from 'expo-linear-gradient';

const FAQItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={{ marginVertical: 15 }}>
      <TouchableOpacity style={styles.faqItem} onPress={handlePress}>
        <ThemedText type='name'>{question}</ThemedText>
        <FontAwesome5 
          name={expanded ? 'minus' : 'plus'} 
          size={18} 
          color="black" 
        />
      </TouchableOpacity>
      
      {expanded && (
        <View style={styles.answerContainer}>
          <ThemedText type='number'>{answer}</ThemedText>
        </View>
      )}

      <LinearGradient
        colors={['#189D99', '#EC4037', '#D7DE1F', '#ED057E']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.gradientLine}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  faqItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  gradientLine: {
    height: 2, // Thin line
    marginTop: 5, // Space between the question and the line
  },
  answerContainer: {
    marginTop: 10,
  },
});

export default FAQItem;
