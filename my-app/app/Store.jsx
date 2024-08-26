import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import TopBar from '@/components/TopScreen';
import ProductContainer from '@/components/ProductContainer';

const Store = () => {
    const types = ['Alimentation', 'Brosses', 'Croquettes', 'Gamelle'];
    const products = [
        { name: 'Overbaked', reduction: '15% de réduction', image: require('@/assets/images/product1.png'),description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',type:'Alimentation',total:20 , available:12 , price:'400 TND' },
        { name: 'Overbaked', reduction: '15% de réduction', image: require('@/assets/images/product1.png'),description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',type:'Alimentation',total:20 , available:12 , price:'400 TND' },
        { name: 'Overbaked', reduction: '15% de réduction', image: require('@/assets/images/product1.png'),description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',type:'Alimentation',total:20 , available:12 , price:'400 TND' },
    ];
    const products2 = [
      { name: 'Gant brosse', reduction: '15% de réduction', image: require('@/assets/images/product2.png'),description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',type:'Brosses',total:20 , available:5 , price:'400 TND'  },
      { name: 'Overbaked', reduction: '15% de réduction', image: require('@/assets/images/product1.png'),description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',type:'Brosses',total:20 , available:12 , price:'400 TND'  },
      
  ];
  const products3 = [
    { name: 'Croquette', reduction: '15% de réduction', image: require('@/assets/images/product3.png'),description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',type:'Croquettes',total:20 , available:10 , price:'400 TND'  },
    { name: 'Overbaked', reduction: '15% de réduction', image: require('@/assets/images/product1.png') ,description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',type:'Croquettes',total:20 , available:20 , price:'400 TND' },
 
];

    const colors = ['#189D99', '#EC4037', '#ED057E', '#D7DE1F'];

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <TopBar screen={'Store'} />
            <ScrollView contentContainerStyle={[styles.scrollViewContent, { paddingBottom: 100 }]}>
                <ScrollView horizontal contentContainerStyle={styles.typesContainer}>
                    {types.map((type, index) => (
                        <Text 
                            key={index} 
                            style={[
                                styles.types, 
                                { backgroundColor: colors[index % colors.length] }
                            ]}
                        >
                            {type}
                        </Text>
                    ))}
                </ScrollView>
                <ProductContainer title="Alimentation" products={products} />
                {/* You can call ProductContainer multiple times with different props */}
                <ProductContainer title="Brosses" products={products2} />
                <ProductContainer title="Croquettes" products={products3} />
                {/* <ProductContainer title="Gamelle" products={products} /> */}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    typesContainer: {
        marginVertical: 5,
        flexDirection: 'row',
    },
    types: {
        marginHorizontal: 5,
        fontSize: 16,
        color: 'white',
        paddingVertical: 4,
        borderRadius: 20,
        paddingHorizontal: 12,
    },
    scrollViewContent: {},
});

export default Store;
