import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "./SplashScreen";
import Main from "./main";
import Login from "./login";
import Creation from "./creation";
import FirstScreen from "./FirstScreen";

const Stack = createNativeStackNavigator();

export default function App () {
return (
    <NavigationContainer independent>
     <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="SplashScreen" component={SplashScreen}  />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Creation" component={Creation} />
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="Main" component={Main} />
     </Stack.Navigator>
    </NavigationContainer>
)
}