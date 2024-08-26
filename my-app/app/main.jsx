import React, { useRef, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Home from './Home';
import Emergency from './Emergency';
import Store from './Store';
import Profile from './Profile';
import Medic from './needMedic';
import { Rescue } from './rescue';
import { Lost } from './Lost&Found';
import { FAQ } from './FAQ';
import CreatePost from './createPost';
import { Product } from './Product';
import { useNavigation } from '@react-navigation/native';
import MyPet from './MyPet';
import EditProfile from './EditProfile';
import EditPet from './EditPet';
import QRCodeScanner from './QRCodeScanner';
import SplashScreen from './SplashScreen';


const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator initialRouteName='Emergency' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Emergency" component={Emergency} />
      <Stack.Screen name="Medic" component={Medic} />
      <Stack.Screen name="Rescue" component={Rescue} />
      <Stack.Screen name="Lost&Found" component={Lost} />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
      <Stack.Screen name="QRCodeScanner" component={QRCodeScanner} />
    </Stack.Navigator>
  );
}

function MainStack2() {
  return (
    <Stack.Navigator initialRouteName='Store' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Store" component={Store} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
      <Stack.Screen name="QRCodeScanner" component={QRCodeScanner} />

    </Stack.Navigator>
  );
}
function Splash() {
  return (
    <Stack.Navigator initialRouteName='SplashScreen'>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
  )
}

function HomeMainStack() {
  return (
    <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
      <Stack.Screen name="QRCodeScanner" component={QRCodeScanner} />
    </Stack.Navigator>
  );
}
function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName='Profile' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="MyPet" component={MyPet} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
      <Stack.Screen name='EditProfile' component={EditProfile} />
      <Stack.Screen name='EditPet' component={EditPet} />

    </Stack.Navigator>)
}

function CustomBottomMenu({ toggleContainer, translateY, isContainerVisible }) {
  const navigation = useNavigation(); 

  return (
    <Animated.View style={{ transform: [{ translateY }] }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('CreatePost')}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <MaterialIcons name="post-add" size={20} color="white" />
            <Text style={styles.text}>Publier un post</Text>
          </View>
        </TouchableOpacity>
        <View style={{ width: 1, backgroundColor: 'white', height: 55 }}></View>
        <TouchableOpacity onPress={() => navigation.navigate('QRCodeScanner')}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <MaterialCommunityIcons name="qrcode-scan" size={20} color="white" />
            <Text style={styles.text}>Scanner le Code QR</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

export default function Main() {
  const [isContainerVisible, setIsContainerVisible] = useState(false);
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: isContainerVisible ? 20 : 150,
      useNativeDriver: true,
      duration: 800,
    }).start();
  }, [isContainerVisible]);

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
      <MaterialIcons
        name={icon}
        size={20}
        color={routeName === selectedTab ? '#189D99' : 'gray'}
      />
    );
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity onPress={() => navigate(routeName)} style={styles.tabbarItem}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <>
      <CurvedBottomBarExpo.Navigator
        type="UP"
        style={styles.bottomBar}
        shadowStyle={styles.shadow}
        height={70}
        circleWidth={12}
        bgColor="#231F20"
        initialRouteName="Home"
        borderTopLeftRight
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity style={styles.button} onPress={toggleContainer}>
              <MaterialIcons name={isContainerVisible ? "remove" : "add"} size={30} color="white" />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
        screenOptions={{ headerShown: false }}
      >
        <CurvedBottomBarExpo.Screen name="Home" position="LEFT" component={HomeMainStack} />
        <CurvedBottomBarExpo.Screen name="Emergency" position="LEFT" component={MainStack} />
        <CurvedBottomBarExpo.Screen name="Store" component={MainStack2} position="RIGHT" />
        <CurvedBottomBarExpo.Screen name="Profile" component={ProfileStack} position="RIGHT" />
      </CurvedBottomBarExpo.Navigator>



      <CustomBottomMenu
        toggleContainer={toggleContainer}
        translateY={translateY}
        isContainerVisible={isContainerVisible}
      />
    </>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#DDDDDD',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {
    width: '100%',
    zIndex: 3,
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
    shadowOffset: { width: 0, height: 1 },
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
    backgroundColor: '#231F20',
    width: '100%',
    position: 'absolute',
    bottom: 20,
    height: 150,
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'bold',
    fontSize: 8,
    width: '60%',
    textAlign: 'center',
  },
});