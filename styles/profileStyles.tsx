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
 
  
  

   // --- Estructura del Post (Thread) ---
  postContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 20,
    width: '100%',
  },
  
  // Columna de la Línea de Tiempo
  timelineTrack: {
    alignItems: 'center',
    width: 40,
  },
  timelineDot: {
    width: 10,
    height: 10,
    backgroundColor: '#FFF', // Un punto blanco brillante
    borderRadius: 2, // Rombo/Cuadrado pequeño
    zIndex: 2,
  },
  timelineLine: {
    position: 'absolute',
    top: 10,
    bottom: -20, // Se extiende para conectar con el siguiente post
    width: 1,
    backgroundColor: '#333',
    zIndex: 1,
  },

  postContentContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  postMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  categoryTag: {
    color: '#555',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    textTransform: 'uppercase', // Estilo etiqueta técnica
    margin: 10,
  },
  timestamp: {
    color: '#444',
    fontSize: 11,
    fontFamily: 'System', 
    marginBottom: 10,
  },
  mainText: {
    color: '#EEE',
    fontSize: 15,
    lineHeight: 22, // Mayor espacio entre líneas para lectura cómoda
    fontWeight: '400',
    marginBottom: 15,
  },
  
  userName: {
    color: '#FFF', // Blanco para que resalte
    fontSize: 13,
    fontWeight: '700', // Un poco más de peso visual
    letterSpacing: 0.5,

  },

   minimalActions: {
    flexDirection: 'row',
    gap: 25,
    marginTop: 5,
  },

  divider: {
    height: 0.5,
    backgroundColor: '#111',
    width: '90%',
    alignSelf: 'flex-end',
  }
});