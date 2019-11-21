import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen'
import CriarPost from './src/screens/CriarPost'
import LoginWithEmail from './src/screens/MainScreen'



const RootStack = createStackNavigator({ 
  Home: HomeScreen,
  LoginEmail: LoginWithEmail,
  Post: CriarPost,
 });
const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export default AppContainer;