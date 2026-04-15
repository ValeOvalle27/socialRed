import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { profileStyles } from '../styles/profileStyles';

const API_URL = "http://192.168.0.16:8000";

const ProfileScreen = () => {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  // 🔥 cargar usuario + posts
  useEffect(() => {
    const loadData = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");

        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);

          // 🔥 traer posts del usuario
          const response = await fetch(`${API_URL}/posts/user/${parsedUser.id}`);
          const data = await response.json();

          console.log("USER POSTS:", data);
          setPosts(data);
        }

      } catch (error) {
        console.log("ERROR PROFILE:", error);
      }
    };

    loadData();
  }, []);

  return (
    <View style={profileStyles.mainContainer}>
      <View style={profileStyles.contentWrapper}>
        
        {/* HEADER */}
        <View style={profileStyles.header}>
          <TouchableOpacity onPress={() => router.push('/feed')}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>

          <Text style={profileStyles.headerTitle}>
            {user?.username}
          </Text>

          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          
          <View style={profileStyles.profileHeaderContainer}>
            
            <View style={profileStyles.photoSection}>
              <Image 
                source={{ uri: 'https://i.pravatar.cc/150' }} 
                style={profileStyles.profileImage} 
              />
            </View>

            <View style={profileStyles.centerInfoSection}>
              <Text style={profileStyles.name}>
                {user?.username}
              </Text>
              <Text style={profileStyles.bio}>Just for fun 📸</Text>
            </View>

            <View style={profileStyles.rightStatsSection}>
              <Text style={profileStyles.statNumber}>
                {posts.length}
              </Text>
              <Text style={profileStyles.statLabel}>Posts</Text>
            </View>

          </View>

          <TouchableOpacity style={profileStyles.editButton}>
            <Text style={{ color: 'white', fontWeight: '600' }}>
              Edit Profile
            </Text>
          </TouchableOpacity>

          {/* 🔥 POSTS DINÁMICOS */}
          {posts.map((post) => (
            <View key={post.id} style={profileStyles.postContainer}>
              
              <View style={profileStyles.timelineTrack}>
                <View style={profileStyles.timelineDot} />
                <View style={profileStyles.timelineLine} />
              </View>

              <View style={profileStyles.postContentContainer}>
                
                <View style={{ flexDirection: 'row', gap: 8 }}>
                  <Text style={profileStyles.userName}>
                    @{post.username}
                  </Text>
                  <Text style={profileStyles.categoryTag}>
                    {post.category}
                  </Text>
                </View>

                <Text style={profileStyles.mainText}>
                  {post.content}
                </Text>

                <Text style={profileStyles.timestamp}>
                  AHORA
                </Text>

                <View style={profileStyles.minimalActions}>
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
          ))}

        </ScrollView>
      </View>
    </View>
  );
};

export default ProfileScreen;