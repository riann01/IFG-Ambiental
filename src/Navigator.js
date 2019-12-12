//Padrão
import React, { Component } from 'react'
import { createDrawerNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome5'
//Screens
import HomeScreen from './screens/HomeScreen'
import MainScreen from './screens/MainScreen'
import Menu from './components/Menu';
import ContatosUteis from './screens/ContatosUteis'
import Texts from './screens/Texts'
import Profile from './screens/Profile'

// Class Hidden

class Hidden extends Component {
    render() {
        return null;
    }
}

//Config Menu

const MenuRoutes = {
    Home:{
        name:'Home',
        screen: MainScreen,
        navigationOptions: {
            title: 'Início',
            drawerIcon: () => (
                <Icon name="home" size={20} color={'#003266'} />
            )          
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Home',
    contentComponent: Menu
}

const MenuNavigator = createDrawerNavigator(MenuRoutes, MenuConfig)

const authSwitch = createSwitchNavigator({    
    Main: MenuNavigator,
    Auth: HomeScreen,
    Profile: Profile,
    TelUteis: ContatosUteis,
    Texts: Texts,
}, {
    initialRouteName: 'Auth'
})

const AppContainer = createAppContainer(authSwitch)

export default AppContainer