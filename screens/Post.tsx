import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, 
  KeyboardAvoidingView, Platform, Alert 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { postStyles } from '../styles/postStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 🔥 CAMBIA POR TU IP
const API_URL = "http://192.168.0.16:8000";

export default function CreatePostScreen() {
  const [postText, setPostText] = useState('');
  const router = useRouter();

const handlePublish = async () => {
  if (!postText.trim()) return;

  try {
    const storedUser = await AsyncStorage.getItem("user");
    const user = JSON.parse(storedUser);

    const response = await fetch(`${API_URL}/posts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: postText,
        likes_count: 0,
        id_category: 1,
        id_user: user.id   // 🔥 AHORA ES DINÁMICO
      })
    });

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
        
        {/* HEADER */}
        <View style={postStyles.appHeader}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="close" size={24} color="#FFF" />
          </TouchableOpacity>
          
          <Text style={postStyles.headerTitle}>New post</Text>

          <TouchableOpacity 
            style={[
              postStyles.publishBtn, 
              !postText.trim() && postStyles.publishBtnDisabled
            ]} 
            onPress={handlePublish}
            disabled={!postText.trim()}
          >
            <Text style={postStyles.publishBtnText}>Post</Text>
          </TouchableOpacity>
        </View>

        {/* INPUT */}
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <View style={postStyles.inputContainer}>
            
            <View style={postStyles.timelineTrack}>
              <View style={postStyles.timelineDot} />
              <View style={postStyles.timelineLine} />
            </View>

            <View style={postStyles.inputWrapper}>
              <Text style={postStyles.userName}>@user</Text>
              
              <TextInput
                placeholder="Capture your idea..."
                placeholderTextColor="#444"
                multiline={true}
                style={postStyles.textInput}
                value={postText}
                onChangeText={setPostText}
                autoFocus={true}
                selectionColor="#FFF"
              />
            </View>

          </View>
        </KeyboardAvoidingView>

      </View>
    </View>
  );
}