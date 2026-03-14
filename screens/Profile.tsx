import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { profileStyles } from '../styles/profileStyles';

const USER_POSTS = [
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
    username: '@john_capture',
    content: 'Feeling great today.',
    timestamp: 'AHORA',
    category: 'EMOTIONAL', 
    likes: 8,
  },
  {
    id: '3',
    username: '@john_capture',
    content: 'Loving new music lately.',
    timestamp: 'AHORA',
    category: 'MUSIC', 
    likes: 8,
  },
];



const ProfileScreen = () => {
  const router = useRouter();
  return (
    <View style={profileStyles.mainContainer}>
      <View style={profileStyles.contentWrapper}>
        
        {/* Header Superior */}
        <View style={profileStyles.header}>
          <TouchableOpacity onPress={() => router.push('/feed')}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={profileStyles.headerTitle}>john_capture</Text>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          
          <View style={profileStyles.profileHeaderContainer}>
            
            {/* Foto de perfil */}
            <View style={profileStyles.photoSection}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1616088886430-ccd86fef0713?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} 
                style={profileStyles.profileImage} 
              />
            </View>

            {/* Nombre y Bio */}
            <View style={profileStyles.centerInfoSection}>
              <Text style={profileStyles.name}>John Muñoz</Text>
              <Text style={profileStyles.bio}>Just for fun 📸</Text>
            </View>

            {/* Stats */}
            <View style={profileStyles.rightStatsSection}>
              <Text style={profileStyles.statNumber}>7</Text>
              <Text style={profileStyles.statLabel}>Posts</Text>
            </View>

            <View style={profileStyles.rightStatsSection}>
              <Text style={profileStyles.statNumber}>70</Text>
              <Text style={profileStyles.statLabel}>Followers</Text>
            </View>

            <View style={profileStyles.rightStatsSection}>
              <Text style={profileStyles.statNumber}>120</Text>
              <Text style={profileStyles.statLabel}>Following</Text>
            </View>

          </View>

          {/* Botón Edit Profile */}
          <TouchableOpacity style={profileStyles.editButton}>
            <Text style={{ color: 'white', fontWeight: '600' }}>Edit Profile</Text>
          </TouchableOpacity>
          
          {USER_POSTS.map((post) => (
            <View style={profileStyles.postContainer}>
            {/* Línea de esencia: Conector vertical (Timeline) */}
            <View style={profileStyles.timelineTrack}>
            <View style={profileStyles.timelineDot} />
            <View style={profileStyles.timelineLine} />
          </View>

          <View style={profileStyles.postContentContainer}>
            {/* Cabecera: Nombre y Categoría */}
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Text style={profileStyles.userName}>{post.username}</Text>
          <Text style={profileStyles.categoryTag}>{post.category}</Text>
          </View>

          {/* Cuerpo del Pensamiento */}
          <Text style={profileStyles.mainText}>{post.content}</Text>
      
          {/* Meta info: Tiempo transcurrido */}
          <Text style={profileStyles.timestamp}>{post.timestamp}</Text>

          {/* Acciones Minimalistas */}
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