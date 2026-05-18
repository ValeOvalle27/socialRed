import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ImageBackground,
  KeyboardAvoidingView, Platform, ScrollView, StatusBar, Alert
} from 'react-native';
import { authStyles } from '../styles/authStyles';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomInput from '../components/input/CustomInput';
import CustomButton from '../components/Button/CustomButton';



const BackgroundPhoto = require('../assets/images/background.jpg');

// ✅ TU IP
const API_URL = "https://backend-hibridas.vercel.app";

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

              <CustomInput
                placeholder="Correo"
                value={email}
                onChangeText={setEmail}
              />


              <CustomInput
                placeholder="Contraseña"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />

              <CustomButton
                title="Ingresar"
                onPress={handleLogin}
              />

              <TouchableOpacity
                onPress={() => router.push('/signup')}
                style={{ marginTop: 10 }}
              >
                <Text style={authStyles.linkText}>
                  ¿Aún no tienes cuenta?{" "}
                  <Text style={authStyles.linkTextBold}>Registrarme</Text>
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