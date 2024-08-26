import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from '@/components/ThemedText';
import { Items } from '@/assets/images/items';
import { Location } from '@/assets/images/location';

const LostItem = ({ title, time, distance , image: ImageComponent}) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.leftContainer}>
                <LinearGradient
                    colors={['#000000BA', '#231F20']}
                    style={styles.gradient}
                >
                    <View style={styles.imageContainer}>
                    <ImageComponent  />
                    </View>
                </LinearGradient>
                <View style={styles.textContainer}>
                    <ThemedText style={styles.titleText} type='Top'>{title}</ThemedText>
                    <ThemedText style={styles.timeText} type='Top'>{time}</ThemedText>
                </View>
            </View>
            <View style={styles.rightContainer}>
                <Location />
                <ThemedText style={styles.distanceText} type='Top'>{distance}</ThemedText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    gradient: {
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 10,
        marginRight: 5,
       width : 50 
        
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width :'100%'
    },
    textContainer: {
        justifyContent:'flex-start' ,
        // alignItems: 'center',
        marginLeft: 10,
        
    },
    titleText: {
        fontSize: 10,
       
    },
    timeText: {
        fontSize: 10,
        color: '#B3B3B3',
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    distanceText: {
        fontSize: 10,
        marginLeft: 7,
    },
});

export default LostItem;
