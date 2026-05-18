import React, { useEffect, useState } from "react";

import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { profileStyles } from "../../styles/profileStyles";

const API_URL = "https://backend-hibridas.vercel.app";

const EditProfileModal = ({
  visible,
  onClose,
  user,
  setUser,
}) => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {

    if (user) {

      setUsername(user.username || "");
      setEmail(user.email || "");

    }

  }, [user]);

  const handleUpdate = async () => {

    try {

      const response = await fetch(
        `${API_URL}/users/${user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {

        await AsyncStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        setUser(data.user);

        Alert.alert(
          "Éxito",
          "Perfil actualizado"
        );

        onClose();

      } else {

        Alert.alert(
          "Error",
          data.detail || "Error al actualizar"
        );

      }

    } catch (error) {

      console.log(error);

      Alert.alert(
        "Error",
        "No se pudo actualizar"
      );

    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
    >

      <View style={profileStyles.modalOverlay}>

        <View style={profileStyles.modalContainer}>

          <Text style={profileStyles.modalTitle}>
            Editar Perfil
          </Text>

          <TextInput
            placeholder="Username"
            placeholderTextColor="#777"
            value={username}
            onChangeText={setUsername}
            style={profileStyles.modalInput}
          />

          <TextInput
            placeholder="Email"
            placeholderTextColor="#777"
            value={email}
            onChangeText={setEmail}
            style={profileStyles.modalInput}
          />

          <View style={profileStyles.modalActions}>

            <TouchableOpacity
              style={profileStyles.cancelButton}
              onPress={onClose}
            >

              <Text style={profileStyles.cancelButtonText}>
                Cancelar
              </Text>

            </TouchableOpacity>

            <TouchableOpacity
              style={profileStyles.saveButton}
              onPress={handleUpdate}
            >

              <Text style={profileStyles.saveButtonText}>
                Confirmar
              </Text>

            </TouchableOpacity>

          </View>

        </View>

      </View>

    </Modal>
  );
};

export default EditProfileModal;