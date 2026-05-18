import React, { useState, useCallback } from "react";

import {
  View,
  FlatList,
  StatusBar,
  RefreshControl,
} from "react-native";

import { useFocusEffect } from "expo-router";

import feedStyles from "../styles/feedStyles";

import HeaderFeed from "../components/Header/HeaderFeed";
import PostCard from "../components/PostCard/PostCard";

const API_URL = "https://backend-hibridas.vercel.app";

const FeedScreen = () => {

  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchPosts = async () => {
    try {

      const response = await fetch(`${API_URL}/posts/`);
      const data = await response.json();

      console.log("POSTS:", data);

      setPosts(data);

    } catch (error) {

      console.log("ERROR POSTS:", error);

    }
  };

  // 🔥 CARGA POSTS AL ABRIR PANTALLA
  useFocusEffect(
    useCallback(() => {
      fetchPosts();
    }, [])
  );

  // 🔄 PULL TO REFRESH
  const onRefresh = async () => {

    setRefreshing(true);

    await fetchPosts();

    setRefreshing(false);

  };

  const renderItem = ({ item }) => (
    <PostCard item={item} />
  );

  return (
    <View style={feedStyles.mainContainer}>

      <StatusBar barStyle="light-content" />

      <View style={feedStyles.contentWrapper}>

        <HeaderFeed />

        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        />

      </View>
    </View>
  );
};

export default FeedScreen;