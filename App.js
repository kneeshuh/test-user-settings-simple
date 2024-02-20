import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Login from './screens/Login';

const Stack = createNativeStackNavigator()

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>

    <Tab.Navigator initialRouteName='Login'>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
