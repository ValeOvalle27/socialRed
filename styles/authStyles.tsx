import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');
const isWeb = Platform.OS === 'web';

export const authStyles = StyleSheet.create({
  // Capa principal que contendrá la imagen de fondo
  pageContainer: {
    flex: 1,
    backgroundColor: '#000000', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Imagen de fondo que recubre todo
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  // Overlay para que la imagen no distraiga del formulario
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(49, 49, 49, 0.65)', 
  },

  formCard: {
    width: isWeb ? 420 : '90%', // En web se queda fijo, en móvil ocupa casi todo el ancho
    backgroundColor: '#ffffff', 
    paddingHorizontal: 40,
    paddingVertical: 50,
    borderWidth: 1,
    borderColor: '#cdcdcd', 
    borderRadius: 5, 
    zIndex: 10,
    ...Platform.select({
      web: {
        boxShadow: '0px 20px 40px rgba(67, 67, 67, 0.8)', // Sombra profunda para Web
      },
    }),
  },
  headerTextContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  appName: {
    fontSize: 32,
    fontWeight: '900',
    color: '#000000',
    letterSpacing: 4, 
    textTransform: 'uppercase',
  },
  welcomeText: {
    fontSize: 11,
    color: '#323232',
    marginTop: 8,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    fontWeight: '700',
  },
 
  input: {
    height: 55,
    backgroundColor: '#F8F9FA',
    borderRadius: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginBottom: 15,
  },
   mainButton: {
    backgroundColor: '#000000',
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  mainButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  forgotPasswordText: {
    color: '#555555',
    textAlign: 'right',
    fontSize: 12,
    marginBottom: 20,
  },
  linkText: {
    textAlign: 'center',
    marginTop: 30,
    color: '#555555',
    fontSize: 13,
  },
  linkTextBold: {
    color: '#000000',
    fontWeight: '700',
  }
});