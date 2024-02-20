import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Login from './screens/Login';
import { useState, useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth'

const Stack = createNativeStackNavigator()

const Tab = createBottomTabNavigator()

const HomeStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default function App() {

  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user)
    })
  })

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user ? (
          <Stack.Screen name="HomeStack" component={HomeStack} />
        ) : (
          <Stack.Screen name="Login" component={Login} />

        )}
      </Stack.Navigator>
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
