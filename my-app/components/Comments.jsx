import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

export const Comment = ({ Owner, comment }) => {
  return (
    <View style={styles.container}>
      
        <ThemedText type='name' style={styles.name}>
          {Owner}
        <ThemedText type='number' style={styles.comment}>
        {' '}{comment}
        </ThemedText>
        </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '1%',
  },
  textContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  name: {
    flexBasis: 'auto',
    marginRight: 5,
    fontSize : 10 ,
    fontFamily:'bold'
  },
  comment: {
    flex: 1,
    fontSize : 10 
  },
});

export default Comment;
