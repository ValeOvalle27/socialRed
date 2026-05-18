import React from "react";
import { View, Text, Image } from "react-native";

import { profileStyles } from "../../styles/profileStyles";

const ProfileInfo = ({ user, posts }) => {

  return (
    <View style={profileStyles.profileHeaderContainer}>

      <View style={profileStyles.photoSection}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150" }}
          style={profileStyles.profileImage}
        />
      </View>

      <View style={profileStyles.centerInfoSection}>

        <Text style={profileStyles.name}>
          {user?.username}
        </Text>

        <Text style={profileStyles.bio}>
          Solo es diversión... 📸
        </Text>

      </View>

      <View style={profileStyles.rightStatsSection}>

        <Text style={profileStyles.statNumber}>
          {posts.length}
        </Text>

        <Text style={profileStyles.statLabel}>
          Posts
        </Text>

      </View>

    </View>
  );
};

export default ProfileInfo;