//Padrão
import React from 'react'
//import { Provider } from 'react-redux'
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
//Internos
import App from './src/App'
//import storeConfig from './src/store/storeConfig'

/*const store = storeConfig()

const Redux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)*/

AppRegistry.registerComponent(appName, () => App);