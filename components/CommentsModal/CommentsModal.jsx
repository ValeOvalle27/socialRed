import React, { useEffect, useState } from "react";

import {
  Modal,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";

import feedStyles from "../../styles/feedStyles";

const API_URL = "https://backend-hibridas.vercel.app";

const CommentsModal = ({ visible, onClose, postId }) => {
  const [comments, setComments] = useState([]);

  const [text, setText] = useState("");

  const fetchComments = async () => {
    try {
      const response = await fetch(`${API_URL}/comments/post/${postId}`);

      const data = await response.json();

      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (visible) {
      fetchComments();
    }
  }, [visible]);

  const handleComment = async () => {
    if (!text.trim()) return;

    try {
      const storedUser = await AsyncStorage.getItem("user");

      const user = JSON.parse(storedUser);

      await fetch(`${API_URL}/comments/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: text,
          id_post: postId,
          id_user: user.id,
        }),
      });

      setText("");

      fetchComments();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 30}
        style={{ flex: 1 }}
      >
        <View style={feedStyles.commentsOverlay}>
          <View style={feedStyles.commentsContainer}>
            <View style={feedStyles.commentsHandle} />

            <View style={feedStyles.commentsHeader}>
              <Text style={feedStyles.commentsTitle}>Comentarios</Text>

              <TouchableOpacity onPress={onClose}>
                <Ionicons name="close" size={26} color="white" />
              </TouchableOpacity>
            </View>

            <FlatList
              data={comments}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={feedStyles.commentsList}
              renderItem={({ item }) => (
                <View style={feedStyles.commentItem}>
                  <View style={feedStyles.commentAvatar}>
                    <Ionicons name="person" size={20} color="#AAA" />
                  </View>

                  <View style={feedStyles.commentContent}>
                    <View style={feedStyles.commentBubble}>
                      <Text style={feedStyles.commentUsername}>
                        @{item.username}
                      </Text>

                      <Text style={feedStyles.commentText}>{item.content}</Text>
                    </View>
                  </View>
                </View>
              )}
            />

            <View style={feedStyles.commentInputContainer}>
              <TextInput
                placeholder="Escribe un comentario..."
                placeholderTextColor="#666"
                value={text}
                onChangeText={setText}
                style={feedStyles.commentInput}
              />

              <TouchableOpacity
                onPress={handleComment}
                style={feedStyles.sendButton}
              >
                <Ionicons name="send" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default CommentsModal;
