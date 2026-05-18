import React from "react";
import { View, Text } from "react-native";

import feedStyles from "../../styles/feedStyles";
import PostActions from "../PostActions/PostActions";

const PostCard = ({ item }) => {
    console.log("Item: "+item)

  return (
    <View style={feedStyles.postContainer}>
      <View style={feedStyles.timelineTrack}>
        <View style={feedStyles.timelineDot} />
        <View style={feedStyles.timelineLine} />
      </View>

      <View style={feedStyles.postContentContainer}>
        <Text style={feedStyles.userName}>@{item.username}</Text>

        <Text style={feedStyles.categoryTag}>{item.category}</Text>

        <Text style={feedStyles.mainText}>{item.content}</Text>

        <Text style={feedStyles.timestamp}>AHORA</Text>

        <PostActions likes={item.likes} postId={item.id} />
      </View>
    </View>
  );
};

export default PostCard;
