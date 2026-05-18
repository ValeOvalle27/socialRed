import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { profileStyles } from "../../styles/profileStyles";

const EditProfileButton = () => {
  return (
    <TouchableOpacity style={profileStyles.editButton}>

      <Text style={{
        color: "white",
        fontWeight: "600"
      }}>
        Edit Profile
      </Text>

    </TouchableOpacity>
  );
};

export default EditProfileButton;