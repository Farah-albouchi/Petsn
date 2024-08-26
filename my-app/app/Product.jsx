import React from 'react';
import { StyleSheet, ScrollView, View , Image, TouchableOpacity,Text } from 'react-native';
import TopBar from '@/components/TopScreen';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation , useRoute } from '@react-navigation/native';
import { ThemedText } from '@/components/ThemedText';
import { Progress } from 'native-base';
export const Product = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { 
        name = 'Default Name', 
        description = 'Default Description', 
        image = null,
        type = 'Default Type', 
        available = 0, 
        total = 0, 
        price = '0 TND', 
        reduction = '0%' 
    } = route.params || {};

    return (
        <>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <TopBar screen={'Product'} />
                <ScrollView contentContainerStyle={[styles.scrollViewContent, { paddingBottom: 100 }]}>
                    <View style={{ backgroundColor: '#231F20', paddingHorizontal: 12, paddingVertical: 10 }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Feather name="arrow-left-circle" size={24} color="white" />
                        </TouchableOpacity>

                        <Image source={image} />

                    </View>
                    <View style={{ padding: 10 }}>
                        <ThemedText type="Type">{name}</ThemedText>
                        <ThemedText style={styles.timeText} type='Top'>{reduction}</ThemedText>
                        <Progress _filledTrack={{ bg: '#231F20' }} style={{ alignSelf: 'center' }} size='md' w="97%" shadow={2} value={(available/total)*100} mx="4" />
                        <View style={{ flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'space-between', marginTop: 10 }}>
                            <ThemedText type="likes">{available} pièces</ThemedText>
                            <ThemedText type="likes">{total} pièces</ThemedText>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: '#231F20', borderRadius: 20, alignItems: 'center', justifyContent: 'center', paddingVertical: 3, marginVertical: 10 }}>
                            <Text style={{ fontFamily: 'bold', fontSize: 19, color: 'white' }}>{price}</Text>
                        </TouchableOpacity>
                        <ThemedText type='likes'>{description}</ThemedText>
                    </View>
                </ScrollView>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingTop: 10,


  },
  timeText: {
    fontSize: 10,
    color: '#B3B3B3',
    marginBottom : 20
},

});
