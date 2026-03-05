import { StyleSheet, ViewStyle, TextStyle, ImageStyle, Platform } from 'react-native';

export const authStyles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
  },
  headerSection: {
    height: 320, 
    width: '100%',
    backgroundColor: 'transparent', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)', 
  },
  headerTextContainer: {
    alignItems: 'center',
    zIndex: 10,
  },
  appName: {
    fontSize: 38,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  welcomeText: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 5,
    opacity: 0.9,
    fontWeight: '500',
  },
  formSection: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: -40, 
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  formTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 30,
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
  forgotPasswordText: {
    color: '#757575',
    textAlign: 'right',
    fontSize: 14,
    marginBottom: 25,
  },
  mainButton: {
    backgroundColor: '#000000',
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  linkText: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 30,
    color: '#757575',
  },
  linkTextBold: {
    color: '#000000',
    fontWeight: '800',
  }
});