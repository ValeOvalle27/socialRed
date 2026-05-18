import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { profileStyles } from "../../styles/profileStyles";

const ProfileHeader = ({ username }) => {

  const router = useRouter();

  return (
    <View style={profileStyles.header}>

      <TouchableOpacity onPress={() => router.push("/feed")}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="white"
        />
      </TouchableOpacity>

      <Text style={profileStyles.headerTitle}>
        {username}
      </Text>

      <TouchableOpacity>
        <Ionicons
          name="ellipsis-vertical"
          size={24}
          color="white"
        />
      </TouchableOpacity>

    </View>
  );
};

export default ProfileHeader;