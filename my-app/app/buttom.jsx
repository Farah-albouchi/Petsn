import React, { useState } from 'react';
import {
    Animated,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
} from 'react-native';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Home from '@/app/Home';
import Emergency from './Emergency';
import Store from './Store';
import Profile from './Profile';

const Screen1 = () => {
    return <View style={styles.screen1} />;
};

const Screen2 = () => {
    return <View style={styles.screen2} />;
};

const Screen3 = () => {
    return <View style={styles.screen3} />;
};

const Screen4 = () => {
    return <View style={styles.screen4} />;
};

export default function Buttom() {
    const [isContainerVisible, setIsContainerVisible] = useState(true);

    const toggleContainer = () => {
        setIsContainerVisible(!isContainerVisible);
    };

    const _renderIcon = (routeName, selectedTab) => {
        let icon = '';
     
        switch (routeName) {
            case 'Home':
                icon = 'home';
                break;
            case 'Emergency':
                icon = 'pets';
                break;
            case 'Store':
                icon = 'storefront';
                break;
            case 'Profile': 
                icon = 'person';
                break;
        }

        return (
            <Svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<G filter="url(#filter0_d_107_422)">
<Path fill-rule="evenodd" clip-rule="evenodd" d="M15 0L2 12.8888L5.17171 14.5743L14.9154 4.21917L24.8283 14.5765L28 12.891L15 0ZM5.86361 14.9127L15.0127 5.64983L24.1343 14.9127V24H17.4714V17.5813H12.4715V24H5.86361V14.9127Z" fill="white"/>
</G>
<Defs>
<Filter id="filter0_d_107_422" x="0" y="0" width="30" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_107_422"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_107_422" result="shape"/>
</Filter>
</Defs>
</Svg>
            // <MaterialIcons
            //     name={icon}
            //     size={20}
            //     color={routeName === selectedTab ? '#189D99' : 'gray'}
            // />
        );
    };

    const renderTabBar = ({ routeName, selectedTab, navigate }) => {
        return (
            <TouchableOpacity
                onPress={() => navigate(routeName)}
                style={styles.tabbarItem}
            >
                {_renderIcon(routeName, selectedTab)}
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1 , backgroundColor:"red" }}>
            <CurvedBottomBarExpo.Navigator
                type="UP"
                style={styles.bottomBar}
                shadowStyle={styles.shadow}
                height={70}
                circleWidth={12}
                bgColor="#231F20"
                initialRouteName="Emergency"
                borderTopLeftRight
                renderCircle={({ selectedTab, navigate }) => (
                    <Animated.View style={styles.btnCircleUp}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={toggleContainer}
                        >
                            <MaterialIcons name={isContainerVisible ? "remove" : "add"} size={30} color="white" />
                        </TouchableOpacity>
                    </Animated.View>
                )}
                tabBar={renderTabBar}
                screenOptions={{
                    headerShown: false, 
                }}
            >
                <CurvedBottomBarExpo.Screen
                    name="Home"
                    position="LEFT"
                    component={Home}
                />
                <CurvedBottomBarExpo.Screen
                    name="Emergency"
                    position="LEFT"
                    component={Emergency}
                />
                <CurvedBottomBarExpo.Screen
                    name="Screen3"
                    position="CENTER"
                    component={Screen3}
                />
                <CurvedBottomBarExpo.Screen
                    name="Store"
                    component={Store}
                    position="RIGHT"
                />
                <CurvedBottomBarExpo.Screen
                    name="Profile"
                    component={Profile}
                    position="RIGHT"
                />
            </CurvedBottomBarExpo.Navigator>

            {isContainerVisible && (
               
                <View style={styles.container}>
                    <TouchableOpacity style={styles.containerButton}>
                        <Text>Publier un post</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerButton}>
                        <Text>Scanner le Code QR</Text>
                    </TouchableOpacity>
                </View>
               
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#DDDDDD',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
    },
    bottomBar: {
        width: '100%',
    },
    btnCircleUp: {
        width: 46,
        height: 46,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(24, 157, 153, 0.6)',
        bottom: 18,
        shadowColor: '#231F20',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 1,
    },
    tabbarItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        // height :'40%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#231F20',
        paddingVertical: 40,
    },
    containerButton: {
        alignItems: 'center',
    },
    screen1: {
        flex: 1,
        backgroundColor: '#BFEFFF',
    },
    screen2: {
        flex: 1,
        backgroundColor: '#FFEBCD',
    },
    screen3: {
        flex: 1,
        backgroundColor: '#FFE4B5',
    },
    screen4: {
        flex: 1,
        backgroundColor: '#FFF5EE',
    },
});
