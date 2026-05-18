import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { profileStyles } from "../../styles/profileStyles";

const EditProfileButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={profileStyles.editButton} onPress={onPress}>
      <Text
        style={{
          color: "white",
          fontWeight: "600",
        }}
      >
        Editar Perfil
      </Text>
    </TouchableOpacity>
  );
};

export default EditProfileButton;
