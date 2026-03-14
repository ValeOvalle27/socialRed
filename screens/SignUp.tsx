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
      
      
      <ImageBackground 
        source={BackgroundPhoto} 
        style={authStyles.backgroundImage} 
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
                <Text style={authStyles.welcomeText}>New Account</Text>
              </View>

              <TextInput 
                placeholder="Username" 
                style={authStyles.input}
                placeholderTextColor="#999" 
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

              <TouchableOpacity 
                style={authStyles.mainButton} 
                activeOpacity={0.9} 
                onPress={() => router.push('/feed')} // Navegación de prueba
              >
                <Text style={authStyles.mainButtonText}>Create Account</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => router.push('/')}
                style={{ marginTop: 10 }}
              >
                <Text style={authStyles.linkText}>
                  Already have an account? <Text style={authStyles.linkTextBold}>Log In</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default SignUpScreen;

