import React, { useEffect, useState } from "react";

import {
  View,
  ScrollView,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { profileStyles } from "../styles/profileStyles";

import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import ProfileInfo from "../components/ProfileInfo/ProfileInfo";
import EditProfileButton from "../components/EditProfileButton/EditProfileButton";

import EditProfileModal from "../components/EditProfileModal/EditProfileModal";

import PostCard from "../components/PostCard/PostCard";

const API_URL = "https://backend-hibridas.vercel.app";

const ProfileScreen = () => {

  const [user, setUser] = useState(null);

  const [posts, setPosts] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  // 🔥 CARGAR USUARIO + POSTS
  useEffect(() => {

    const loadData = async () => {

      try {
        const storedUser =
          await AsyncStorage.getItem("user");
        if (storedUser) {
          const parsedUser =
            JSON.parse(storedUser);
          setUser(parsedUser);
          const response = await fetch(
            `${API_URL}/posts/user/${parsedUser.id}`
          );
          const data = await response.json();

          console.log("USER POSTS:", data);

          setPosts(data);

        }

      } catch (error) {

        console.log(
          "ERROR PROFILE:",
          error
        );

      }
    };

    loadData();

  }, []);

  return (
    <View style={profileStyles.mainContainer}>

      <View style={profileStyles.contentWrapper}>

        <ProfileHeader
          username={user?.username}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
        >

          <ProfileInfo
            user={user}
            posts={posts}
          />

          <EditProfileButton
            onPress={() =>
              setModalVisible(true)
            }
          />

          <EditProfileModal
            visible={modalVisible}
            onClose={() =>
              setModalVisible(false)
            }
            user={user}
            setUser={setUser}
          />

          {/* 🔥 POSTS */}
          {posts.map((post) => (
            <PostCard
              key={post.id}
              item={post}
            />
          ))}

        </ScrollView>

      </View>

    </View>
  );
};

export default ProfileScreen;