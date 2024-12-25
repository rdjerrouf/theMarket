import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler'; // Ensure this line is at the top
import { enableScreens } from 'react-native-screens';

enableScreens(); // Call this function to optimize navigation performance

AppRegistry.registerComponent(appName, () => App);