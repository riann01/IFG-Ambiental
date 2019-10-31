//Padrão
import React from 'react'
import { createDrawerNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
//Screens
//import LoginWithEmail from './screens/LoginWithEmail'
import Threads from './screens/Threads'
import Posts from './screens/Posts'
//Child Screens
import CriarPost from './screens/CriarPost'
//Components
import Menu from './components/Menu'
import HomeScreen from './screens/HomeScreen'


// Stacks Acompanhamento / Corrida

const postsStack = createStackNavigator({
    //Threads: Threads,
    Posts: Posts,
    CriarPost: CriarPost
}, {
    initialRouteName: 'Posts',
    headerMode: 'none'
})

// Drawer Menu 

const MenuRoutes = {
    Home: {
        name: 'Home',
        screen: HomeScreen,
        navigationOptions: {
            title: 'Início',
            /*drawerIcon: () => (
                <Icon name="home" size={18} color={'#54514C'} />
            ),*/
        }
    },
    Posts: {
        name: 'Posts',
        screen: postsStack,
        navigationOptions: {
            title: 'Threads',
            /*drawerIcon: () => (
                <Icon name="dumbbell" size={18} color={'#54514C'} />
            )*/
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Home',
    contentComponent: Menu,
    contentOptions: {
        labelStyle: {
            fontSize: 21,
            fontFamily: 'PT Sans Caption',
            fontWeight: 'normal',
            color: '#54514C'
        },
        activeLabelStyle: {
            color: '#54514C',
            fontSize: 22
        }
    }
}

const MenuNavigator = createDrawerNavigator(MenuRoutes, MenuConfig)

// Switch Navigator Autenticação

const loginOrHome = createSwitchNavigator({
    Acesso: MenuNavigator,
    //Auth: LoginWithEmail
}, {
    initialRouteName: 'MenuNavigator'
})

const AppContainer = createAppContainer(loginOrHome)

export default AppContainer