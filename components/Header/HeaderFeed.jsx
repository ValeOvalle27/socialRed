import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import feedStyles from "../../styles/feedStyles";

const HeaderFeed = () => {

  const router = useRouter();

  return (
    <View style={feedStyles.appHeader}>
      
      <Text style={[feedStyles.appName, { fontSize: 24 }]}>
        FOCALIZE.
      </Text>

      <View style={feedStyles.headerIcons}>

        <TouchableOpacity onPress={() => router.push("/post")}>
          <Ionicons
            name="add-circle-outline"
            size={28}
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/profile")}>
          <View style={feedStyles.profileIcon}>
            <Ionicons
              name="person"
              size={18}
              color="white"
            />
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default HeaderFeed;