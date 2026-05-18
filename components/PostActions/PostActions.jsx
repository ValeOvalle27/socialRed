import React, { useState, useEffect } from "react";

import { View, TouchableOpacity, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import feedStyles from "../../styles/feedStyles";

import CommentsModal from "../CommentsModal/CommentsModal";

const API_URL = "https://backend-hibridas.vercel.app";

const PostActions = ({ likes = 0, postId }) => {
  const [commentsVisible, setCommentsVisible] = useState(false);

  const [liked, setLiked] = useState(false);

  const [likesCount, setLikesCount] = useState(likes || 0);

  useEffect(() => {
    setLikesCount(likes || 0);
  }, [likes]);

  const handleLike = async () => {
    if (liked) return;

    try {
      const response = await fetch(`${API_URL}/posts/like/${postId}`, {
        method: "PUT",
      });

      const data = await response.json();

      if (response.ok) {
        setLiked(true);

        setLikesCount(data.likes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={feedStyles.minimalActions}>
        <TouchableOpacity style={feedStyles.actionButton}>
          <Ionicons name="flash-outline" size={18} color="#555" />
        </TouchableOpacity>

        <TouchableOpacity
          style={feedStyles.actionButton}
          onPress={() => {
            (console.log("Preciono comentario"), setCommentsVisible(true));
          }}
        >
          <Ionicons name="chatbubble-outline" size={18} color="#555" />
        </TouchableOpacity>

        {/* LIKES */}
        <TouchableOpacity style={feedStyles.actionButton} onPress={handleLike}>
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={18}
            color={liked ? "#ff3b30" : "#555"}
          />

          <Text style={feedStyles.likesText}>{likesCount}</Text>
        </TouchableOpacity>
      </View>

      {/* MODAL */}
      <CommentsModal
        visible={commentsVisible}
        onClose={() => setCommentsVisible(false)}
        postId={postId}
      />
    </>
  );
};

export default PostActions;
