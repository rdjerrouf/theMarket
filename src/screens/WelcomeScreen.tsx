import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const WelcomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Dlala</Text>
      <Text style={styles.subtitle}>Explore your neighborhood</Text>

      <TouchableOpacity style={styles.button} onPress={() => {/* Handle Apple Sign-In */}}>
        <Image source={require('../assets/apple-logo.png')} style={styles.logo} />
        <Text style={styles.buttonText}>Continue with Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {/* Handle Google Sign-In */}}>
        <Image source={require('../assets/google-logo.png')} style={styles.logo} />
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {/* Handle Email Sign-In */}}>
        <Image source={require('../assets/email-logo.png')} style={styles.logo} />
        <Text style={styles.buttonText}>Continue with Email</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {/* Handle Facebook Sign-In */}}>
        <Image source={require('../assets/facebook-logo.png')} style={styles.logo} />
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 15,
    width: '80%',
    borderRadius: 5,
    elevation: 3,
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default WelcomeScreen;