import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, ImageBackground, 
  KeyboardAvoidingView, Platform, ScrollView, StatusBar, Alert 
} from 'react-native';
import { authStyles } from '../styles/authStyles';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';


const BackgroundPhoto = require('../assets/images/background.jpg');

// ✅ TU IP
const API_URL = "http://192.168.0.16:8000";

const LoginScreen = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      console.log("Intentando login...");

      const response = await fetch(`${API_URL}/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      console.log("Status:", response.status);

      const data = await response.json();
      console.log("Respuesta:", data);

      if (response.ok) {
        Alert.alert("Éxito", "Login correcto");
        await AsyncStorage.setItem("user", JSON.stringify(data.user));
        router.push('/feed');
      } else {
        Alert.alert("Error", data.detail || "Credenciales incorrectas");
      }

    } catch (error) {
      console.log("ERROR:", error);
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
              </View>

              <TextInput 
                placeholder="Email" 
                placeholderTextColor="#999"
                style={authStyles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />

              <TextInput 
                placeholder="Password" 
                placeholderTextColor="#999"
                secureTextEntry
                style={authStyles.input}
                value={password}
                onChangeText={setPassword}
              />

              <TouchableOpacity 
                style={authStyles.mainButton} 
                onPress={handleLogin}
              >
                <Text style={authStyles.mainButtonText}>Sign in</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => router.push('/signup')}
                style={{ marginTop: 10 }}
              >
                <Text style={authStyles.linkText}>
                  Dont have an account?{" "}
                  <Text style={authStyles.linkTextBold}>Sign Up</Text>
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