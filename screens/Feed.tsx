import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StatusBar } from 'react-native';
import feedStyles from "../styles/feedStyles"
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; 

const POSTS = [
  {
    id: '1',
    username: '@john_capture',
    content: 'La arquitectura de esta app está empezando a cobrar vida propia. Menos es definitivamente más.',
    timestamp: 'AHORA',
    category: 'DESIGN', 
    likes: 8,
  },
   {
    id: '2',
    username: '@val27',
    content: 'Feeling great today.',
    timestamp: 'AHORA',
    category: 'EMOTIONAL', 
    likes: 8,
  },
];

const FeedScreen = () => {
  const router = useRouter();

  const renderItem = ({ item} : { item: typeof POSTS[0] }) => (
  <View style={feedStyles.postContainer}>
    {/* Línea de esencia: Conector vertical */}
    <View style={feedStyles.timelineTrack}>
      <View style={feedStyles.timelineDot} />
      <View style={feedStyles.timelineLine} />
    </View>

    <View style={feedStyles.postContentContainer}>
     <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Text style={feedStyles.userName}>{item.username}</Text>
        </View>
      <Text style={feedStyles.categoryTag}>{item.category}</Text>
      <Text style={feedStyles.mainText}>{item.content}</Text>
      <Text style={feedStyles.timestamp}>{item.timestamp}</Text>

     
      <View style={feedStyles.minimalActions}>
        <TouchableOpacity><Ionicons name="flash-outline" size={18} color="#555" /></TouchableOpacity>
        <TouchableOpacity><Ionicons name="chatbubble-outline" size={18} color="#555" /></TouchableOpacity>
        <TouchableOpacity><Ionicons name="heart-outline" size={18} color="#555" /></TouchableOpacity>
      </View>
    </View>
  </View>
);

  return (
    <View style={feedStyles.mainContainer}>
      <StatusBar barStyle="light-content" />
      
      <View style={feedStyles.contentWrapper}>
        
        {/* Header de la App */}
        <View style={feedStyles.appHeader}>
          <Text style={[feedStyles.appName, { fontSize: 24, marginBottom: 0 }]}>FOCALIZE.</Text>

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
          data={POSTS}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </View>
    </View>
  );
}

export default FeedScreen;