//Padrão
import React, { Component } from 'react'
import { createDrawerNavigator, createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome5'
//Screens
import HomeScreen from './screens/HomeScreen'

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
        screen: HomeScreen,
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
    contentComponent: Menu,
    contentOptions:{
        labelStyle:{
            fontSize: 21,
            fontFamily: 'Jura Bold',
            fontWeight: 'normal',
            color: '#003266'
        },
        activeLabelStyle:{
            color:'#003266',
            fontSize: 22
        },
        activeBackgroundColor: '#DFE2E5'
    }
}

const MenuNavigator = createDrawerNavigator(MenuRoutes, MenuConfig)

const authSwitch = createSwitchNavigator({    
    //Auth: Login
    Auth: MenuNavigator
}, {
    initialRouteName: 'Auth'
})

const AppContainer = createAppContainer(authSwitch)

export default AppContainer