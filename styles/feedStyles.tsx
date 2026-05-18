import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');
const MAX_WIDTH = 600;

const feedStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000', // Negro absoluto
    alignItems: 'center',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: MAX_WIDTH,
    flex: 1,
  },
  // --- Header ---
  appHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 60 : 20,
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderColor: '#222',
  },
  appName: {
    fontSize: 24,
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: 4,
    textTransform: 'uppercase',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  profileIcon: {
    width: 28,
    height: 28,
    borderRadius: 4,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // --- Estructura del Post ---
  postContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 20,
    width: '100%',
  },
  timelineTrack: {
    alignItems: 'center',
    width: 40,
  },
  timelineDot: {
    width: 10,
    height: 10,
    backgroundColor: '#FFF',
    borderRadius: 2,
    zIndex: 2,
  },
  timelineLine: {
    position: 'absolute',
    top: 10,
    bottom: -20, // Se extiende para conectar
    width: 1,
    backgroundColor: '#222',
    zIndex: 1,
  },
  postContentContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  userName: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  categoryTag: {
    color: '#555',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginTop: 4,
    marginBottom: 8,
  },
  mainText: {
    color: '#EEE',
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '400',
    marginBottom: 10,
  },
  timestamp: {
    color: '#444',
    fontSize: 11,
    marginBottom: 15,
  },
  minimalActions: {
    flexDirection: 'row',
    gap: 25,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  likesText: {
    color: '#777',
    fontSize: 13,
  },
  commentsOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.55)',
  justifyContent: 'flex-end',
},

commentsContainer: {
  backgroundColor: '#111',
  height: '80%',
  borderTopLeftRadius: 28,
  borderTopRightRadius: 28,
  paddingTop: 18,
},

commentsHandle: {
  width: 45,
  height: 5,
  backgroundColor: '#444',
  borderRadius: 20,
  alignSelf: 'center',
  marginBottom: 18,
},

commentsHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 20,
  marginBottom: 20,
},

commentsTitle: {
  color: 'white',
  fontSize: 24,
  fontWeight: '700',
},

commentsList: {
  paddingHorizontal: 20,
  paddingBottom: 120,
},

commentItem: {
  flexDirection: 'row',
  marginBottom: 22,
},

commentAvatar: {
  width: 42,
  height: 42,
  borderRadius: 50,
  backgroundColor: '#222',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 12,
},

commentContent: {
  flex: 1,
},

commentBubble: {
  backgroundColor: '#1C1C1C',
  borderRadius: 18,
  padding: 14,
},

commentUsername: {
  color: 'white',
  fontWeight: '700',
  marginBottom: 5,
},

commentText: {
  color: '#DDD',
  lineHeight: 20,
},

commentInputContainer: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#111',
  paddingHorizontal: 16,
  paddingVertical: 14,
  borderTopWidth: 1,
  borderTopColor: '#222',
},

commentInput: {
  flex: 1,
  backgroundColor: '#1F1F1F',
  borderRadius: 30,
  paddingHorizontal: 18,
  paddingVertical: 13,
  color: 'white',
  marginRight: 12,
  fontSize: 15,
},

sendButton: {
  width: 50,
  height: 50,
  borderRadius: 50,
  backgroundColor: 'white',
  justifyContent: 'center',
  alignItems: 'center',
},
});

export default feedStyles;