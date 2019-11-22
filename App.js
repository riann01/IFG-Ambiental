import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen'
import CriarPost from './src/screens/CriarPost'
import LoginWithEmail from './src/screens/LoginWithEmail'
import CreateAccount from './src/screens/CreateAccount'


const RootStack = createStackNavigator({ 
  Home: HomeScreen,
  LoginEmail: LoginWithEmail,
  CreateAccount: CreateAccount,
  Post: CriarPost,
 });
const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export default AppContainer;