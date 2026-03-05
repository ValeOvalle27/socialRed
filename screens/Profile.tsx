import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { profileStyles } from '../styles/profileStyles';

const USER_PHOTOS = [
  { id: '1', url: 'https://images.unsplash.com/photo-1504595403659-9088ce801e29?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '2', url: 'https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '3', url: 'https://images.unsplash.com/photo-1735607232550-a51daa17ab5c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '4', url: 'https://images.unsplash.com/photo-1507812984078-917a274065be?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '5', url: 'https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '6', url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '7', url: 'https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
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

          {/* Cuadrícula de Fotos */}
          <View style={profileStyles.gridContainer}>
            {USER_PHOTOS.map((photo) => (
              <TouchableOpacity key={photo.id} style={profileStyles.gridItem}>
                <Image 
                  source={{ uri: photo.url }} 
                  style={{ flex: 1, backgroundColor: '#222' }} 
                />
              </TouchableOpacity>
            ))}
          </View>

        </ScrollView>
      </View>
    </View>
  );
};

export default ProfileScreen;