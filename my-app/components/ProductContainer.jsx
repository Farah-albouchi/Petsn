import React, { useRef } from 'react';
import { StyleSheet, ScrollView, Text, View, Animated, Image, TouchableOpacity, Dimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useNavigation  } from '@react-navigation/native';
const { width } = Dimensions.get('window');

const ProductContainer = ({ title, products }) => {
    const navigation = useNavigation();
    const scrollValue = useRef(new Animated.Value(0)).current;
    const translateX = scrollValue.interpolate({
        inputRange: [0, width],
        outputRange: [0, 36],
    });

    return (
        <View>
            <View style={styles.headerContainer}>
                <ThemedText type="Type">{title}</ThemedText>
                <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                    <ThemedText style={{ marginTop: 2 }} type="number">Voir Plus</ThemedText>
                </TouchableOpacity>
            </View>

            <View style={styles.container2}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollValue } } }],
                        { useNativeDriver: false },
                    )}
                >
                    {products.map((product, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() =>
                                navigation.navigate('Product', {
                                    name: product.name, 
                                    description: product.description, 
                                    image: product.image, 
                                    total:product.total ,
                                    price : product.price , 
                                    reduction : product.reduction , 
                                    type : product.type , 
                                    available : product.available
                                })
                            }
                        >
                            <View style={styles.card}>
                                <Image
                                    source={product.image}
                                    style={{width:'89%'}}
                                    resizeMode="contain"
                                />
                                <Text style={styles.text}>{product.name}</Text>
                                <Text style={styles.text}>{product.reduction}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View style={styles.indicatorConatiner} pointerEvents="none">
                    {products.map((_, index) => (
                        <Indicator key={index} />
                    ))}
                    <Animated.View
                        style={[
                            styles.activeIndicator,
                            { position: 'absolute', transform: [{ translateX }] },
                        ]}
                    />
                </View>
            </View>
        </View>
    );
};
function Indicator() {
    return <View style={styles.indicator} />;
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    container2: {
        // paddingHorizontal: 10,
    },
    card: {
        width: width - 10,
        height : width , 
        marginHorizontal: 5,
        backgroundColor: '#231F20',
        paddingTop: 30,
        paddingHorizontal: 5,
        paddingBottom: 18,
    },
    indicatorConatiner: {
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 5,
    },
    indicator: {
        height: 3,
        width: 22,
        backgroundColor: '#231F20',
        marginHorizontal: 7,
    },
    activeIndicator: {
        width: 24,
        height: 3,
        backgroundColor: '#EC4037',
        marginHorizontal: 7,
    },
    text: {
        color: 'white',
        fontFamily: 'bold',
        fontSize: 16,
    },
});

export default ProductContainer;
