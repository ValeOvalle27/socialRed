import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, ImageBackground, 
  KeyboardAvoidingView, Platform, ScrollView, StatusBar, Alert
} from 'react-native';
import { authStyles } from '../styles/authStyles';
import { router } from 'expo-router';
import CustomInput from '../components/input/CustomInput';
import CustomButton from '../components/Button/CustomButton';

const BackgroundPhoto = require('../assets/images/background.jpg');

// ⚠️ IMPORTANTE: cambia esta URL según tu caso
const API_URL = "https://backend-hibridas.vercel.app";
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

              <CustomInput 
                placeholder="Username" 
                value={username}
                onChangeText={setUsername}
              />

              <CustomInput 
                placeholder="Email" 
                value={email}
                onChangeText={setEmail}
              />

              <CustomInput 
                placeholder="Password" 
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />

              <CustomButton 
                title= 'Create Account'
                onPress={handleRegister}
              />

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