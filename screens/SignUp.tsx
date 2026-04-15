import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, ImageBackground, 
  KeyboardAvoidingView, Platform, ScrollView, StatusBar, Alert
} from 'react-native';
import { authStyles } from '../styles/authStyles';
import { router } from 'expo-router';

const BackgroundPhoto = require('../assets/images/background.jpg');

// ⚠️ IMPORTANTE: cambia esta URL según tu caso
const API_URL = "http://192.168.0.16:8000";
const SignUpScreen = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await fetch(`${API_URL}/users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          email,
          password
        })
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Éxito", "Usuario creado correctamente");
        router.push('/');
      } else {
        Alert.alert("Error", data.detail || "No se pudo registrar");
      }

    } catch (error) {
      console.log(error);
      Alert.alert("Error", "No conecta con el servidor");
    }
  };

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
                value={username}
                onChangeText={setUsername}
              />

              <TextInput 
                placeholder="Email" 
                style={authStyles.input}
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
              />

              <TextInput 
                placeholder="Password" 
                secureTextEntry
                style={authStyles.input}
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
              />

              <TouchableOpacity 
                style={authStyles.mainButton} 
                onPress={handleRegister}
              >
                <Text style={authStyles.mainButtonText}>
                  Create Account
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push('/')}>
                <Text style={authStyles.linkText}>
                  Already have an account?{" "}
                  <Text style={authStyles.linkTextBold}>Log In</Text>
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