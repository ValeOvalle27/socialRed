import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StatusBar, RefreshControl } from 'react-native';
import feedStyles from "../styles/feedStyles";
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useFocusEffect } from 'expo-router';

const API_URL = "http://192.168.0.16:8000";

const FeedScreen = () => {
  const router = useRouter();
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

  // 🔥 SE EJECUTA CADA VEZ QUE LA PANTALLA SE ABRE
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
    <View style={feedStyles.postContainer}>
      
      <View style={feedStyles.timelineTrack}>
        <View style={feedStyles.timelineDot} />
        <View style={feedStyles.timelineLine} />
      </View>

      <View style={feedStyles.postContentContainer}>
        
        <Text style={feedStyles.userName}>
          @{item.username}
        </Text>

        <Text style={feedStyles.categoryTag}>
          {item.category}
        </Text>

        <Text style={feedStyles.mainText}>
          {item.content}
        </Text>

        <Text style={feedStyles.timestamp}>
          AHORA
        </Text>

        <View style={feedStyles.minimalActions}>
          <TouchableOpacity>
            <Ionicons name="flash-outline" size={18} color="#555" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="chatbubble-outline" size={18} color="#555" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="heart-outline" size={18} color="#555" />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );

  return (
    <View style={feedStyles.mainContainer}>
      <StatusBar barStyle="light-content" />
      
      <View style={feedStyles.contentWrapper}>
        
        <View style={feedStyles.appHeader}>
          <Text style={[feedStyles.appName, { fontSize: 24 }]}>
            FOCALIZE.
          </Text>

          <View style={feedStyles.headerIcons}>
            <TouchableOpacity onPress={() => router.push('/post')}>
              <Ionicons name="add-circle-outline" size={28} color="white" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => router.push('/profile')}>
              <View style={feedStyles.profileIcon}>
                <Ionicons name="person" size={18} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          
          // 🔥 REFRESH MANUAL
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