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
const firebaseConfig = require('../etc/ConnectDB')

const BackIcon = (style) => (
  <Icon {...style} name='arrow-ios-back-outline'/>
);

const BackAction = () => (
  <TopNavigationAction icon={BackIcon}/>
);


const ApplicationContent = ({ navigation }) => (
  <React.Fragment>
    
  </React.Fragment>
); 

class CreateAccount extends React.Component {

  render() {
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
          <Layout style={styles.container}>
            <Input placeholder='Email' style={styles.component} onChangeText={handleEmail}/>
            <Input placeholder='Senha' style={styles.component} onChangeText={handlePassword}/>
            <Button size='large' status='success' style={{marginTop: '5%', width: '90%',}} onPress={() => createUser()}>Criar Conta</Button>
          </Layout>
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
