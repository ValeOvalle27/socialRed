import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StatusBar } from 'react-native';
import { authStyles } from '../styles/authStyles'; 
import { feedStyles } from '../styles/feedStyles'; 
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; 

const POSTS = [
  {
    id: '1',
    username: 'john_capture',
    location: 'New york',
    image: 'https://images.unsplash.com/photo-1504595403659-9088ce801e29?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Dudes #lovedogs',
    likes: 124,
  },
  {
    id: '2',
    username: 'marta_lens',
    location: 'Mallorca, Spain',
    image: 'https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Atardeceres que inspiran.',
    likes: 89,
  },
   {
    id: '3',
    username: 'vale27',
    location: 'London, United Kingdon',
    image: 'https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Alive.',
    likes: 81,
  },
];

const FeedScreen = () => {
  const router = useRouter();

  const renderItem = ({ item }: { item: typeof POSTS[0] }) => (
    <View style={feedStyles.postContainer}>
      {/* Header del Post */}
      <View style={feedStyles.postHeader}>
        <View style={feedStyles.userAvatar} />
        <View>
          <Text style={feedStyles.username}>{item.username}</Text>
          <Text style={feedStyles.location}>{item.location}</Text>
        </View>
      </View>

      {/* Imagen */}
      <Image 
        source={{ uri: item.image }} 
        style={feedStyles.postImage} 
        resizeMode="cover"
      />

      {/* Acciones */}
      <View style={feedStyles.actionButtons}>
        <TouchableOpacity><Ionicons name="heart-outline" size={24} color="white" /></TouchableOpacity>
        <TouchableOpacity><Ionicons name="chatbubble-outline" size={22} color="white" /></TouchableOpacity>
      </View>

      {/* Caption y Likes */}
      <View style={feedStyles.interactionInfo}>
        <Text style={feedStyles.likesText}>{item.likes} likes</Text>
        <Text style={feedStyles.captionText}>
          <Text style={{ fontWeight: 'bold' }}>{item.username} </Text>
          {item.caption}
        </Text>
      </View>
      
      <View style={feedStyles.divider} />
    </View>
  );

  return (
    <View style={feedStyles.mainContainer}>
      <StatusBar barStyle="light-content" />
      
      <View style={feedStyles.contentWrapper}>
        
        {/* Header de la App */}
        <View style={feedStyles.appHeader}>
          <Text style={[authStyles.appName, { fontSize: 24, marginBottom: 0 }]}>FOCALIZE.</Text>

          <View style={feedStyles.headerIcons}>
            <TouchableOpacity onPress={() => console.log("Subir post")}>
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