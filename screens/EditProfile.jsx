import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, Button } from "react-native";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { updateEmail, updateProfile } from "firebase/auth";

const EditProfileScreen = () => {
  const [name, setName] = useState(FIREBASE_AUTH.currentUser.displayName);
  const [email, setEmail] = useState(FIREBASE_AUTH.currentUser.email);

  const handleSubmitChanges = () => {
    updateProfile(FIREBASE_AUTH.currentUser, {
      displayName: name,
    });
    updateEmail(FIREBASE_AUTH.currentUser, email);
    console.log(FIREBASE_AUTH.currentUser.displayName);
    console.log(FIREBASE_AUTH.currentUser.email);
  };
  //   console.log(FIREBASE_AUTH.currentUser);
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: FIREBASE_AUTH.currentUser.photoURL,
          }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Display Name:</Text>
        <View>
          <TextInput
            style={styles.infoValue}
            onChangeText={(value) => setName(value)}
          >
            {FIREBASE_AUTH.currentUser.displayName}
          </TextInput>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <View>
          <TextInput
            style={styles.infoValue}
            onChangeText={(value) => setEmail(value)}
          >
            {FIREBASE_AUTH.currentUser.email}
          </TextInput>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Location:</Text>
        <Text style={styles.infoValue}>San Francisco, CA</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Bio:</Text>
        <Text style={styles.infoValue}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
          magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa
          sem. Etiam finibus odio quis feugiat facilisis.
        </Text>
      </View>
      <View>
        <Button title="Submit Changes" onPress={handleSubmitChanges} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: "black",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoLabel: {
    fontWeight: "bold",
  },
  infoValue: {
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 4,
    padding: 4,
  },
});

export default EditProfileScreen;
