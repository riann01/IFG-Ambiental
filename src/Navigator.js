//Padrão
import React, { Component } from 'react'
import { createDrawerNavigator, createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome5'
//Screens
import HomeScreen from './screens/HomeScreen'
import MainScreen from './screens/MainScreen'
import Menu from './components/Menu';
import ContatosUteis from './screens/ContatosUteis'
import Texts from './screens/Texts'
import Profile from './screens/Profile'
import Threads from './screens/Threads'
import TextIndividual from './screens/TextIndividual'
import Posts from './screens/Posts'
import Post from './screens/Post'
import CriarPost from './screens/CriarPost'
import Calendario from './screens/Calendario'
import Postagens from './screens/Postagens'
import RespostaPost from './screens/RespostaPost'


// Class Hidden

class Hidden extends Component {
    render() {
        return null;
    }
}


const textStack = createStackNavigator({
    Textos: Texts,
    TextIn: TextIndividual
}, 
{
    initialRouteName: 'Textos',
    headerMode: 'none'
})

const forumStack = createStackNavigator({
    Threads: Threads,
    Postagens: Postagens,
    Posts: Posts,
    Post: Post,
    CriarPost: CriarPost,
    RespostaPost: RespostaPost
}, 
{
    initialRouteName: 'Threads',
    headerMode: 'none'
})

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
    },
    Forum:{
        name:'Forum',
        screen: forumStack,
        navigationOptions: {
            title: 'Fórum',
            drawerIcon: () => (
                <Icon name="home" size={20} color={'#003266'} />
            )          
        }
    },
    Perfil:{
        name:'Perfil',
        screen: Profile,
        navigationOptions: {
            title: 'Perfil',
            drawerIcon: () => (
                <Icon name="home" size={20} color={'#003266'} />
            )          
        }
    },
    Sobre:{
        name:'Sobre',
        screen: MainScreen,
        navigationOptions: {
            title: 'Sobre',
            drawerIcon: () => (
                <Icon name="home" size={20} color={'#003266'} />
            )          
        }
    },
    Sair: {
        Name: 'Sair',
        screen: HomeScreen
    },
    Textos:{
        name:'Textos',
        screen: textStack,
        navigationOptions: {
            drawerLabel: <Hidden />           
        }
    },
    Telefones:{
        name:'Telefones',
        screen: ContatosUteis,
        navigationOptions: {
            drawerLabel: <Hidden />           
        }
    },
    Calendario:{
        name:'Calendario',
        screen: Calendario,
        navigationOptions: {
            drawerLabel: <Hidden />           
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
}, {
    initialRouteName: 'Auth'
})

const AppContainer = createAppContainer(authSwitch)

export default AppContainer