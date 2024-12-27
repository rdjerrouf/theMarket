import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const { width, height } = Dimensions.get('window');

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const signInWithGoogle = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.welcomeTitle}>Welcome to</Text>
            <Text style={styles.marketTitle}>Dlala</Text>
            <Text style={styles.subtitle}>Your One-Stop Shopping Destination</Text>
          </View>
          
          <View style={styles.buttonsContainer}>
            <TouchableOpacity 
              style={[styles.button, styles.googleButton]} 
              onPress={signInWithGoogle}
            >
              <Image 
                source={require('../../src/assets/google-logo.png')} 
                style={styles.buttonIcon} 
                resizeMode="contain"
              />
              <Text style={styles.googleButtonText}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.button, styles.appleButton]}
            >
              <Image 
                source={require('../../src/assets/apple-logo.png')} 
                style={styles.buttonIcon} 
                resizeMode="contain"
              />
              <Text style={styles.appleButtonText}>Continue with Apple</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.button, styles.facebookButton]}
            >
              <Image 
                source={require('../../src/assets/facebook-logo.png')} 
                style={styles.buttonIcon} 
                resizeMode="contain"
              />
              <Text style={styles.facebookButtonText}>Continue with Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.button, styles.emailButton]}
              onPress={() => navigation.navigate('Login')}
            >
              <Image 
                source={require('../../src/assets/email-logo.png')} 
                style={styles.buttonIcon} 
                resizeMode="contain"
              />
              <Text style={styles.emailButtonText}>Continue with Email</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.registerButton}
              onPress={() => navigation.navigate('Registration')}
            >
              <Text style={styles.registerButtonText}>Don't have an account? Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#1a237e', // Deep blue background
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  welcomeTitle: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '300',
  },
  marketTitle: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    marginTop: 10,
  },
  buttonsContainer: {
    gap: 16,
    paddingHorizontal: 16,
  },
  button: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  googleButton: {
    backgroundColor: '#fff',
  },
  googleButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
  appleButton: {
    backgroundColor: '#000',
  },
  appleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  facebookButton: {
    backgroundColor: '#1877F2',
  },
  facebookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  emailButton: {
    backgroundColor: '#34C759',
  },
  emailButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  registerButton: {
    marginTop: 16,
    padding: 12,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});

export default WelcomeScreen;