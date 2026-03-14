import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const MAX_WIDTH = 600;
const ACTUAL_WIDTH = width > MAX_WIDTH ? MAX_WIDTH : width;

export const feedStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000', // Fondo negro profundo
    alignItems: 'center',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: MAX_WIDTH,
    flex: 1,
  },
  // --- Header de la App ---
  appHeader: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderColor: '#222', // Línea muy sutil
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  profileIcon: {
    width: 28,
    height: 28,
    borderRadius: 4, // Cuadrado con puntas apenas redondeadas para esa esencia industrial
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
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

  // Columna del Contenido
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
  },

  appName: {
    fontSize: 32,
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: 4, 
    textTransform: 'uppercase',
  },


});