import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View>
        <Image
          source={{
            uri: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
          }}
          style={{
            height: 170,
            width: 170,
            borderRadius: 85,
            borderWidth: 2,
            borderColor: "black",
          }}
        />
      </View>
      <View style={{ flexDirection: "column", marginBottom: 5 }}>
        <Text>Name: </Text>
        <Text>{FIREBASE_AUTH.currentUser.displayName}</Text>
      </View>
      <View style={{ flexDirection: "column", marginBottom: 5 }}>
        <Text>Email: </Text>
        <Text>{FIREBASE_AUTH.currentUser.email}</Text>
      </View>
      <View style={{ flexDirection: "column", marginBottom: 5 }}>
        <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
          <MaterialIcons name="settings" />
          <Text>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
