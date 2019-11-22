import React from 'react';
import { StyleSheet, ImageBackground, Image } from 'react-native';
import { mapping, light as darkTheme } from '@eva-design/eva';
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
  Input,
  IconRegistry,
  Icon,
  TopNavigation,
  TopNavigationAction, } from 'react-native-ui-kitten';


import { EvaIconsPack } from '@ui-kitten/eva-icons';
import firebase from 'firebase';
import { StackRouter } from 'react-navigation';

const BackIcon = (style) => (
  <Icon {...style} name='arrow-ios-back-outline'/>
);

const BackAction = () => (
  <TopNavigationAction icon={BackIcon}/>
);

state = {
   email: '',
   password: ''
}
handleEmail = (text) => {
   this.setState({ email: text })
}
handlePassword = (text) => {
   this.setState({ password: text })
}

createUser = () => {
    alert.alert(state.email + " // " + state.password)
}

const ApplicationContent = ({ navigation }) => (
  <React.Fragment>
    <Layout style={styles.container}>
    <Input placeholder='Email' style={styles.component} onChangeText={handleEmail}/>
    <Input placeholder='Senha' style={styles.component} onChangeText={handlePassword}/>
    <Button size='large' status='success' style={{marginTop: '5%', width: '90%',}} onPress={() => createUser()}>Criar Conta</Button>
    </Layout>
  </React.Fragment>
); 

class CreateAccount extends React.Component {

  render() {
    var firebaseConfig = {
        apiKey: "AIzaSyAfcElLpUI6C1BWJU3Dv7JJj6jO-ksKW-g",
        authDomain: "ifg-ambiental-2da0d.firebaseapp.com",
        databaseURL: "https://ifg-ambiental-2da0d.firebaseio.com",
        projectId: "ifg-ambiental-2da0d",
        storageBucket: "ifg-ambiental-2da0d.appspot.com",
        messagingSenderId: "542075619056",
        appId: "1:542075619056:web:4cb45c71b551e1aafb2435",
        measurementId: "G-BW8RF4X8S1"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    return(
      <React.Fragment>

        <ApplicationProvider
        mapping={mapping}
        theme={darkTheme}>
          <IconRegistry icons={EvaIconsPack}/>
          <TopNavigation
          leftControl={BackAction()}
          title='Retornar para o início'/>
        
          <ApplicationContent/>
        </ApplicationProvider>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign:'center',
  }
});

CreateAccount.navigationOptions = ({ /*navigation*/ }) => {
  return {
    header: null
  }
}


export default CreateAccount;
