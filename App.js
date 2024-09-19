import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import ListScreen from './screens/ListScreen';

// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  const Stack = createNativeStackNavigator();
  
  return (

    <><StatusBar backgroundColor='#ff9600' />
      <NavigationContainer>
        <Stack.Navigator initialRoutName='Home'
          screenOptions={{
            headerStyle: {
              backgroundColor: '#ff9600',
              statusBarColor: '#ff9600'
            },
            headerShadowVisible: false,
          }}
        >
            <Stack.Screen name="Home" component={HomeScreen}
              options={{ headerShown: false }} />
            <Stack.Screen name="ListScreen" component={ListScreen}
              options={{
                title: 'back',
              }} />
            <Stack.Screen name="DetailScreen" component={DetailScreen}
              options={{
                title: 'back',
              }} />
        </Stack.Navigator>
    </NavigationContainer></>
  );
}
       