import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const signInWithGoogle = async () => {
  try {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    await auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.error(error);
  }
};

const WelcomeScreen = () => {
  return (
    <View>
      <TouchableOpacity onPress={signInWithGoogle}>
        <Text>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;