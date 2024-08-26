import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from '@/components/ThemedText';

export const Filter = ({ image: ImageComponent, title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient
                colors={['#000000BA', '#231F20']}
                style={styles.gradient}
            >
                <View style={styles.container}>
                    <ImageComponent />
                    <ThemedText style={styles.text} type='Top'>{title}</ThemedText>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    gradient: {
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 20,
        marginRight: 5,
        marginBottom: 5,
    },
    container: {
        height: 80,
        justifyContent: 'center',
        padding: 10,
        width: 100,
    },
    text: {
        fontSize: 10,
        color: 'white',
        marginTop: 8,
    },
});
