import App from './App';
import MainScreen from './src/screens/MainScreen';
import Threads from './src/screens/Threads';
import Posts from './src/screens/Posts';
import pub from './src/screens/pub';
import { AppRegistry } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Routes);
const Routes = createAppContainer(
  createStackNavigator({
    App: App,
    MainScreen: MainScreen,
    Threads: Threads,
    Posts: Posts,
    pub: pub,
  })
);

export default Routes;
