import React from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, ImageBackground, 
  KeyboardAvoidingView, Platform, ScrollView, StatusBar 
} from 'react-native';
import { authStyles } from '../styles/authStyles';
import { router } from 'expo-router';

const BackgroundPhoto = require('../assets/images/background.jpg');

const SignUpScreen = () => {
  

  return (
    <View style={authStyles.pageContainer}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView 
          contentContainerStyle={{ flexGrow: 1 }}
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          <ImageBackground 
            source={BackgroundPhoto} 
            style={authStyles.headerSection}
            resizeMode="cover"
          >
            <View style={authStyles.headerOverlay} />
            <View style={authStyles.headerTextContainer}>
              <Text style={authStyles.appName}>FOCALIZE.</Text>
              <Text style={authStyles.welcomeText}>Crea tu cuenta</Text>
            </View>
          </ImageBackground>

          <View style={authStyles.formSection}>
            <Text style={authStyles.formTitle}>Register</Text>
            
            <TextInput 
              placeholder="Username" 
              placeholderTextColor="#999"
              style={authStyles.input}
              autoCapitalize="none"
            />

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

            <TouchableOpacity style={authStyles.mainButton} activeOpacity={0.8} >
              <Text style={authStyles.mainButtonText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/')}
              style={{ marginTop: 20 }}
              >
              <Text style={authStyles.linkText}>
                Already have an account? <Text style={authStyles.linkTextBold}>Log In</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUpScreen;