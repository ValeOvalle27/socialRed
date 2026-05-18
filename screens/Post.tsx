import React, { useState, useEffect } from "react";

import {
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useRouter } from "expo-router";

import { postStyles } from "../styles/postStyles";

import CreatePostHeader from "../components/PostHeader/PostHeader";
import CreatePostInput from "../components/PostInput/PostInput";

const API_URL = "https://backend-hibridas.vercel.app";

export default function CreatePostScreen() {

  const router = useRouter();

  const [postText, setPostText] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {

    const loadUser = async () => {

      const storedUser =
        await AsyncStorage.getItem("user");

      if (storedUser) {

        setUser(JSON.parse(storedUser));

      }
    };

    loadUser();

  }, []);

  const handlePublish = async () => {

    if (!postText.trim()) return;

    try {

      const response = await fetch(
        `${API_URL}/posts/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: postText,
            likes_count: 0,
            id_category: 1,
            id_user: user.id,
          }),
        }
      );

      if (response.ok) {

        router.back();

      }

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <View style={postStyles.mainContainer}>

      <View style={postStyles.contentWrapper}>

        <CreatePostHeader
          postText={postText}
          handlePublish={handlePublish}
        />

        <KeyboardAvoidingView
          behavior={
            Platform.OS === "ios"
              ? "padding"
              : "height"
          }
          style={{ flex: 1 }}
        >

          <CreatePostInput
            postText={postText}
            setPostText={setPostText}
            username={user?.username || "user"}
          />

        </KeyboardAvoidingView>

      </View>
    </View>
  );
}