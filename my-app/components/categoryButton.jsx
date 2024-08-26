import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Avatar } from '@rneui/themed';
import { ThemedText } from '@/components/ThemedText';

const CategoryButton = ({ image, name, selected, onPress }) => {
    return (
        <TouchableOpacity 
            style={[
                styles.container, 
                selected ? styles.selected : styles.default
            ]}
            onPress={onPress}
        >
            <Avatar
                rounded
                size={27}
                source={image}
                avatarStyle={styles.avatar}
            />
            <ThemedText 
                style={[
                    styles.text, 
                    selected ? styles.selectedText : styles.defaultText
                ]} 
                type='Top'
            >
                {name}
            </ThemedText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginRight: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 8,
        borderRadius: 30,
    marginBottom : 10 ,
        paddingBottom: 5,
    },
    default: {
        backgroundColor: 'white',
    },
    selected: {
        backgroundColor: '#189D99',
    },
    text: {
        fontSize: 15,
        marginLeft: 5,
    },
    defaultText: {
        color: 'black',
    },
    selectedText: {
        color: 'white',
    },
    avatar: {
        // Add any custom styling for the avatar here
    },
});

export default CategoryButton;
