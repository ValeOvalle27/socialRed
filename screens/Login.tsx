import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StatusBar } from 'react-native';
import { authStyles } from '../styles/authStyles';
import { router } from 'expo-router';
const BackgroundPhoto = require('../assets/images/background.jpg');

const LoginScreen = () => {
  return (
    <View style={authStyles.pageContainer}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
     
      <ImageBackground 
        source={BackgroundPhoto} 
        style={authStyles.backgroundImage} // Usamos el nuevo estilo absoluto
        resizeMode="cover"
      >
       
        <View style={authStyles.headerOverlay} />

        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ScrollView 
            contentContainerStyle={{ 
              flexGrow: 1, 
              justifyContent: 'center', 
              alignItems: 'center',
              width: '100%' 
            }}
            bounces={false}
            showsVerticalScrollIndicator={false}
          >
            
            <View style={authStyles.formCard}>
              
              <View style={authStyles.headerTextContainer}>
                <Text style={authStyles.appName}>FOCALIZE.</Text>
                <Text style={authStyles.welcomeText}></Text>
              </View>

              <TextInput 
                placeholder="Email" 
                placeholderTextColor="#999"
                style={authStyles.input}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <TextInput 
                placeholder="Password" 
                placeholderTextColor="#999"
                secureTextEntry
                style={authStyles.input}
              />

              <TouchableOpacity 
                style={authStyles.mainButton} 
                activeOpacity={0.9} 
                onPress={() => router.push('/feed')} 
              >
                <Text style={authStyles.mainButtonText}>Sign in</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => router.push('/signup')}
                style={{ marginTop: 10 }}
              >
                <Text style={authStyles.linkText}>
                  Dont have an account? <Text style={authStyles.linkTextBold}>Sign Up</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;