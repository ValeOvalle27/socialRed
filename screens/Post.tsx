import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { postStyles } from '../styles/postStyles';

export default function CreatePostScreen() {
  const [postText, setPostText] = useState('');
  const router = useRouter();

  const handlePublish = () => {
    if (postText.trim()) {
      console.log("FOCALIZE PUBLISH:", postText);
      router.back(); 
    }
  };

  return (
    
      <View style={postStyles.mainContainer}>
        <View style={postStyles.contentWrapper}>
          
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
                    style={postStyles.textInput as any}
                    value={postText}
                    onChangeText={(newText) => setPostText(newText)} 
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