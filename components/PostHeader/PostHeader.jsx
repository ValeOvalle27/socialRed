import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { useRouter } from "expo-router";

import { postStyles } from "../../styles/postStyles";

const CreatePostHeader = ({
  postText,
  handlePublish,
}) => {

  const router = useRouter();

  return (
    <View style={postStyles.appHeader}>

      <TouchableOpacity onPress={() => router.back()}>

        <Ionicons
          name="close"
          size={24}
          color="#FFF"
        />

      </TouchableOpacity>

      <Text style={postStyles.headerTitle}>
        New post
      </Text>

      <TouchableOpacity
        style={[
          postStyles.publishBtn,
          !postText.trim() &&
          postStyles.publishBtnDisabled
        ]}
        onPress={handlePublish}
        disabled={!postText.trim()}
      >

        <Text style={postStyles.publishBtnText}>
          Post
        </Text>

      </TouchableOpacity>

    </View>
  );
};

export default CreatePostHeader;