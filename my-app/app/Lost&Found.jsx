import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Dimensions, TouchableOpacity } from 'react-native';
import TopBar from '@/components/TopScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SearchBar } from '@rneui/themed';
import { ThemedText } from '@/components/ThemedText';
import { Filter } from '@/components/filter';
import { Items } from '@/assets/images/items';
import { DogIcon } from '@/assets/images/dogIcon';
import { CatIcon } from '@/assets/images/catIcon';
import { Chicken } from '@/assets/images/chicken';
import LostItem from '@/components/LostItem';

const { width } = Dimensions.get('window');

export const Lost = () => {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState('All items');

    const updateSearch = (search) => {
        setSearch(search);
    };

    const itemsData = [
        { id: 1, title: "Gant brosse", image: Items, time: "3 min ago", distance: "0.6 km", category: "All items" },
        { id: 2, title: "Chien dalmatien", image: DogIcon, time: "40 min ago", distance: "3.2 km", category: "Dogs" },
        { id: 3, title: "Cat object", image: CatIcon, time: "1 hour ago", distance: "2.1 km", category: "Cats" },
        { id: 4, title: "Chicken item", image: Chicken, time: "2 hours ago", distance: "1.0 km", category: "Chicken" },
        // Add more items as needed
    ];

    const filteredItems = itemsData.filter(item => 
        item.title.toLowerCase().includes(search.toLowerCase()) &&
        (selectedCategory === 'All items' || item.category === selectedCategory)
    );

    return (
        <>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <TopBar screen={'Lost'} />
                <ScrollView contentContainerStyle={[styles.scrollViewContent, { paddingBottom: 100 }]}>
                    <View style={styles.view}>
                        <SearchBar
                            placeholder="Search for your lost pet or object..."
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
                    <ThemedText style={{ fontSize: 16 }} type='Top'>Quick filter</ThemedText>
                    <ScrollView horizontal>
                        <Filter image={Items} title="All items" onPress={() => setSelectedCategory('All items')} />
                        <Filter image={DogIcon} title="Dogs" onPress={() => setSelectedCategory('Dogs')} />
                        <Filter image={CatIcon} title="Cats" onPress={() => setSelectedCategory('Cats')} />
                        <Filter image={Chicken} title="Chicken" onPress={() => setSelectedCategory('Chicken')} />
                    </ScrollView>
                    <View style={styles.headerContainer}>
                        <ThemedText style={{ fontSize: 16 }} type='Top'>Recently lost</ThemedText>
                        <TouchableOpacity>
                            <ThemedText style={{ fontSize: 10, color: '#B3B3B3' }} type='Top'>View all</ThemedText>
                        </TouchableOpacity>
                    </View>
                  
                    {filteredItems.map(item => (
                        <LostItem
                            key={item.id}
                            title={item.title}
                            image={item.image}
                            time={item.time}
                            distance={item.distance}
                        />
                    ))}
                </ScrollView>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        paddingHorizontal: 12,
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
        width: '85%',
        paddingBottom: 5,
    },
    containerStyle: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        width: '98%',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: 8,
    },
    search: {
        backgroundColor: '#231F20',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        width: 44,
    },
    headerContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default Lost;
