import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import feedStyles from "../../styles/feedStyles";

const PostActions = () => {
  return (
    <View style={feedStyles.minimalActions}>

      <TouchableOpacity>
        <Ionicons
          name="flash-outline"
          size={18}
          color="#555"
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons
          name="chatbubble-outline"
          size={18}
          color="#555"
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons
          name="heart-outline"
          size={18}
          color="#555"
        />
      </TouchableOpacity>

    </View>
  );
};

export default PostActions;