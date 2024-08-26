import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, ImageBackground, TouchableOpacity, Image, Dimensions } from 'react-native';
import TopBar from '@/components/TopScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SearchBar } from '@rneui/themed';
import { ThemedText } from '@/components/ThemedText';
import CategoryButton from '@/components/categoryButton';
import PetCard from '@/components/PetCard';

const { width } = Dimensions.get('window');


const petData = [
    { id: 1, name: 'Bazinga', category: 'Dog', gender: 'male', location: 'Akouda, Sousse, Tunisie', image: require('@/assets/images/pet1.png') },
    { id: 2, name: 'Bella', category: 'Cat', gender: 'female', location: 'Akouda, Sousse, Tunisie', image: require('@/assets/images/cat.jpg') },
    { id: 3, name: 'Pica', category: 'Cat', gender: 'female', location: 'Akouda, Sousse, Tunisie', image: require('@/assets/images/cat2.jpg') },
    { id: 4, name: 'Tina', category: 'turtle', gender: 'female', location: 'Akouda, Sousse, Tunisie', image: require('@/assets/images/turtle.jpeg') },
    { id: 5, name: 'Hammy', category: 'hamster', gender: 'male', location: 'Akouda, Sousse, Tunisie', image: require('@/assets/images/hamster.jpg') },
   
];

export const Rescue = () => {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState('Cat');

    const updateSearch = (search) => {
        setSearch(search);
    };

    const filteredPets = petData.filter(pet => 
        pet.name.toLowerCase().includes(search.toLowerCase()) && 
        pet.category === selectedCategory
    );

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <TopBar screen={'Rescue'} />
            <ScrollView contentContainerStyle={[styles.scrollViewContent, { paddingBottom: 100 }]}>
                <View style={styles.view}>
                    <SearchBar
                        placeholder="Search for a pet"
                        placeholderTextColor={'#B3B3B3'}
                        onChangeText={updateSearch}
                        value={search}
                        containerStyle={styles.containerStyle}
                        inputContainerStyle={styles.inputContainerStyle}
                        inputStyle={styles.inputStyle}
                        rightIconContainerStyle={styles.rightIconContainerStyle}
                        leftIconContainerStyle={{ display: 'none' }}
                    />
                    <View style={styles.search}>
                        <Ionicons name="search" size={24} color="white" />
                    </View>
                </View>

                <View style={styles.container}>
                    <ImageBackground
                        source={require('@/assets/images/background1.png')}
                        style={styles.background}
                        imageStyle={styles.backgroundImage}
                    >
                        <View style={styles.overlay}>
                            <View style={styles.part1}>
                                <Text style={styles.text}>Join our animal lovers community</Text>
                                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ width: '60%', color: '#189D99', backgroundColor: 'white', paddingVertical: 5, borderRadius: 10, paddingHorizontal: 4, fontFamily: 'bold', fontSize: 9, textAlign: 'center' }}>Join now</Text>
                                </TouchableOpacity>
                            </View>
                            <Image
                                source={require('@/assets/images/rescue.png')}
                                style={styles.image}
                            />
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.categorySection}>
                    <ThemedText style={{ fontSize: 16 }} type='Top'>Pet categories</ThemedText>
                    <TouchableOpacity>
                        <ThemedText style={{ fontSize: 10, color: '#B3B3B3' }} type='Top'>More categories</ThemedText>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal>
                    <CategoryButton
                        image={require('@/assets/images/rescueCat.png')}
                        name="Cat"
                        selected={selectedCategory === 'Cat'}
                        onPress={() => setSelectedCategory('Cat')}
                    />
                    <CategoryButton
                        image={require('@/assets/images/rescueDog.png')}
                        name="Dog"
                        selected={selectedCategory === 'Dog'}
                        onPress={() => setSelectedCategory('Dog')}
                    />
                    <CategoryButton
                        image={require('@/assets/images/turtle.png')}
                        name="turtle"
                        selected={selectedCategory === 'turtle'}
                        onPress={() => setSelectedCategory('turtle')}
                    />
                    <CategoryButton
                        image={require('@/assets/images/hamster.png')}
                        name="hamster"
                        selected={selectedCategory === 'hamster'}
                        onPress={() => setSelectedCategory('hamster')}
                    />
                </ScrollView>

                <View style={styles.categorySection}>
                    <ThemedText style={{ fontSize: 16 }} type='Top'>Adopt pet</ThemedText>
                    <TouchableOpacity>
                        <ThemedText style={{ fontSize: 10, color: '#B3B3B3' }} type='Top'>See all</ThemedText>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal>
                    {filteredPets.map(pet => (
                        <PetCard
                            key={pet.id}
                            image={pet.image}
                            name={pet.name}
                            gender={pet.gender}
                            location={pet.location}
                        />
                    ))}
                </ScrollView>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollViewContent: {
        paddingHorizontal: 12
    },
    view: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 8,
        borderRadius: 20,
        width: '90%',
        paddingBottom: 5,
    },
    containerStyle: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        width: '90%',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainerStyle: {
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        paddingLeft: 10,
        color: 'white',
        height: 30,
    },
    inputStyle: {
        color: '#000',
        backgroundColor: 'white',
        fontFamily: 'bold',
        fontSize: 10,
    },
    search: {
        backgroundColor: '#189D99',
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    overlay: {
        flexDirection: 'row'
    },
    image: {
        width: '70%',
        aspectRatio: 2,
        alignSelf: 'flex-end'
    },
    part1: {
        width: '50%',
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'bold',
        color: 'white',
        fontSize: 12,
        marginBottom: 10
    },
    background: {
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'transparent',
        paddingTop: 20,
    },
    container: {
        borderRadius: 20,
        overflow: 'hidden',
        marginTop: '8%',
    },
    categorySection: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
