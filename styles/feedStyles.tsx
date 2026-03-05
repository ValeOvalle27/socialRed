import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const MAX_WIDTH = 600;

export const feedStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: MAX_WIDTH,
    flex: 1,
    backgroundColor: '#000',
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: '#333',
  },
  
  appHeader: {
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  profileIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#333',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Estilos del Post Individual
  postContainer: {
    marginBottom: 20,
    backgroundColor: '#000',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  userAvatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#333',
    marginRight: 10,
  },
  username: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  location: {
    color: '#999',
    fontSize: 11,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
  actionButtons: {
    flexDirection: 'row',
    padding: 12,
    gap: 15,
  },
  interactionInfo: {
    paddingHorizontal: 12,
    paddingBottom: 15,
  },
  likesText: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  captionText: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 18,
  },
  divider: {
    height: 0.5,
    backgroundColor: '#333',
    marginHorizontal: 10,
  }
});