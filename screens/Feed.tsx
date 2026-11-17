import { useFocusEffect } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, RefreshControl, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HeaderFeed from "../components/Header/HeaderFeed";
import PostCard from "../components/PostCard/PostCard";
import feedStyles from "../styles/feedStyles";

import { PostAdapter } from "../services/PostAdapter"; // Patrón Estructural (Adapter)
import { postManager } from "../services/PostManager"; // Patrón Comportamiento (Observer)

const API_URL = "https://backend-hibridas.vercel.app";

const FeedScreen = () => {
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${API_URL}/posts/`);
      const data = await response.json();

      //PATRÓN ADAPTER
      const postsAdaptados = PostAdapter.adapterList(data);

      setPosts(postsAdaptados);
    } catch (error) {
      console.log("ERROR POSTS:", error);
    }
  };

  //PATRÓN OBSERVER
  useEffect(() => {
    const unsubscribe = postManager.subscribe(() => {
      fetchPosts(); // Al recibir aviso, pide los datos y los pasa por el Adapter
    });

    return () => unsubscribe();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchPosts();
    }, [])
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchPosts();
    setRefreshing(false);
  };

  const renderItem = ({ item }: { item: any }) => <PostCard item={item} />;

  return (
    <SafeAreaView style={feedStyles.mainContainer} edges={["top"]}>
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
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default FeedScreen;