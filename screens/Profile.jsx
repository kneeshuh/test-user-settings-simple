import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { updateProfile } from "firebase/auth";

const Profile = ({ navigation }) => {
  // updateProfile(FIREBASE_AUTH.currentUser, {
  //   photoURL: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
  // })
  //   .then(() => {
  //     console.log("profile updated");
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: FIREBASE_AUTH.currentUser.photoURL,
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{FIREBASE_AUTH.currentUser.displayName}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email: </Text>
        <Text>{FIREBASE_AUTH.currentUser.email}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>User ID:</Text>
        <Text style={styles.infoValue}>{FIREBASE_AUTH.currentUser.uid}</Text>
      </View>
      <View style={styles.infoContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
          <MaterialIcons name="settings">EDIT PROFILE</MaterialIcons>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
  },
});

export default Profile;
