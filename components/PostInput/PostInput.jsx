import React from "react";

import {
  View,
  Text,
  TextInput,
} from "react-native";

import { postStyles } from "../../styles/postStyles";

const CreatePostInput = ({
  postText,
  setPostText,
  username,
}) => {

  return (
    <View style={postStyles.inputContainer}>

      <View style={postStyles.timelineTrack}>
        <View style={postStyles.timelineDot} />
        <View style={postStyles.timelineLine} />
      </View>

      <View style={postStyles.inputWrapper}>

        <Text style={postStyles.userName}>
          @{username}
        </Text>

        <TextInput
          placeholder="Capture your idea..."
          placeholderTextColor="#444"
          multiline={true}
          style={postStyles.textInput}
          value={postText}
          onChangeText={setPostText}
          autoFocus={true}
          selectionColor="#FFF"
        />

      </View>

    </View>
  );
};

export default CreatePostInput;