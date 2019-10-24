import App from './App';
import CriarPost from './src/screens/CriarPost';
import MainScreen from './src/screens/MainScreen';
import Threads from './src/screens/Threads';
import Posts from './src/screens/Posts';
import pub from './src/screens/pub';
import HomeScreen from './src/screens/HomeScreen';
import { AppRegistry } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Routes);
const Routes = createAppContainer(
  createStackNavigator({
    HomeScreen: HomeScreen,
    CriarPost: CriarPost,
    App: App,
    MainScreen: MainScreen,
    Threads: Threads,
    Posts: Posts,
    pub: pub,
  })
);

export default Routes;
