import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import Foundation from '@expo/vector-icons/Foundation';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { ThemedText } from '@/components/ThemedText'; // Adjust the path as needed

const { width } = Dimensions.get('window');

const PetCard = ({ image, name, gender, location }) => {
    return (
        <View style={{ marginRight: 10, justifyContent: 'center' }}>
            <Image
                source={image}
                style={{
                    width: width * 0.67,
                    height: width * 0.5,
                }}
                resizeMode="contain"
            />
            <View style={{
                width: width * 0.67,
                marginBottom: 50,
                borderBottomRightRadius: 80,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 80,
                elevation: 6,
                paddingVertical: 10,
                backgroundColor: 'white',
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                    <ThemedText style={{ fontSize: 16, marginBottom: 6 }} type='Top'>{name}</ThemedText>
                    <Foundation name={gender === 'male' ? 'male-symbol' : 'female-symbol'} size={24} color="#189D99" />
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 10, alignItems: 'center' }}>
                    <EvilIcons name="location" size={24} color="#189D99" />
                    <ThemedText style={{ fontSize: 10, color: '#B3B3B3' }} type='Top'>{location}</ThemedText>
                </View>
            </View>
        </View>
    );
};

export default PetCard;
