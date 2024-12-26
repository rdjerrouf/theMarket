import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';

enableScreens();

// Configure Google Signin
GoogleSignin.configure({
  webClientId: 'your-web-client-id.apps.googleusercontent.com',  // Use your actual web client ID from Firebase
});

AppRegistry.registerComponent(appName, () => App);