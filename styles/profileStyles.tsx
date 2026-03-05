import { StyleSheet, Dimensions } from 'react-native';

const { width: windowWidth } = Dimensions.get('window');
const MAX_WIDTH = 600;
const AVAILABLE_WIDTH = windowWidth > MAX_WIDTH ? MAX_WIDTH : windowWidth;
const COLUMN_WIDTH = (AVAILABLE_WIDTH - 2) / 3;

export const profileStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: MAX_WIDTH,
    flex: 1,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: '#333',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  
  profileHeaderContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center', // Alinea todo al centro vertical de la foto
    width: '100%',
  },
 
  photoSection: {
    marginRight: 15,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#333',
  },
  
  centerInfoSection: {
    flex: 1, // Toma el espacio del medio y empuja los stats a la derecha
    justifyContent: 'center',
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bio: {
    color: '#ccc',
    fontSize: 13,
    marginTop: 2,
  },
  // manda los stats a la derecha
  rightStatsSection: {
    alignItems: 'center',
    marginLeft: 10,
    minWidth: 50,
  },
  statNumber: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  statLabel: {
    color: '#999',
    fontSize: 12,
  },
  editButton: {
    backgroundColor: '#333',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginTop: 20,
  },
  gridItem: {
    width: COLUMN_WIDTH,
    height: COLUMN_WIDTH,
    padding: 1,
  }
});