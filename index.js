import App from './App';
import MainScreen from './src/screens/MainScreen';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    App: App,
    MainScreen: MainScreen,
  })
);

export default Routes;
