import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StatusBar } from 'react-native';
import { authStyles } from '../styles/authStyles';
import { router } from 'expo-router';
const BackgroundPhoto = require('../assets/images/background.jpg');

const LoginScreen = () => {
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
              <Text style={authStyles.welcomeText}>Captura tu mundo</Text>
            </View>
          </ImageBackground>

          <View style={authStyles.formSection} >
            <Text style={authStyles.formTitle}>Login</Text>
            
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

            <TouchableOpacity>
              <Text style={authStyles.forgotPasswordText}>Forgot your password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={authStyles.mainButton} activeOpacity={0.8} onPress={() => router.push('/feed')}>
              <Text style={authStyles.mainButtonText}>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => router.push('/signup')}>
              <Text style={authStyles.linkText}>
                Don't have an account? <Text style={authStyles.linkTextBold}>Sign up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;