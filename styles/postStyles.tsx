import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');
const MAX_WIDTH = 600;

// Eliminamos el "default" y exportamos la constante directamente
export const postStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: MAX_WIDTH,
    flex: 1,
  },
  appHeader: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderColor: '#222', 
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: 2, 
    textTransform: 'uppercase',
  },
  publishBtn: {
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
  },
  publishBtnDisabled: {
    backgroundColor: '#222',
  },
  publishBtnText: {
    color: '#000',
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 20,
    width: '100%',
    flex: 1,
  },
  timelineTrack: {
    alignItems: 'center',
    width: 40,
    zIndex: -1,
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
    bottom: 0, 
    width: 1,
    backgroundColor: '#222',
    zIndex: 1,
  },
  inputWrapper: {
    flex: 1,
    paddingLeft: 10,
    zIndex: 10,
  },
  userName: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  textInput: {
    color: '#EEE',
    fontSize: 16,
    lineHeight: 24,
    textAlignVertical: 'top', 
    flex: 1, 
    width: '100%',
    minHeight: 500, // Área de toque masiva
    paddingTop: 0,
    // Limpieza total de bordes
    borderWidth: 0,
    backgroundColor: 'transparent',
    ...Platform.select({
      web: {
        outlineStyle: 'none',
        // @ts-ignore
        boxShadow: 'none',
  }
}),
},
})