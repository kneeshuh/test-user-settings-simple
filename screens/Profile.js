import { View, Text, Button, Image } from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../FirebaseConfig'

const Profile = () => {
    console.log(FIREBASE_AUTH.currentUser.photoURL)
    return (
        <View>
            <Text>Profile</Text>
            <Text>User: {FIREBASE_AUTH.currentUser.displayName}</Text>
            <Text>Email: {FIREBASE_AUTH.currentUser.email}</Text>
            <Image source={{ url: FIREBASE_AUTH.currentUser.photoURL}} />
        </View>
    )
}

export default Profile