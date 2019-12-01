import React from 'react';
import { StyleSheet, ImageBackground, Image, Alert } from 'react-native';
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
//const firebaseConfig = require('../etc/ConnectDB')

const BackIcon = (style) => (
  <Icon {...style} name='arrow-ios-back-outline'/>
);

const BackAction = () => (
  <TopNavigationAction icon={BackIcon}/>
);

class CreateAccount extends React.Component {
  state = {
      email: '',
      senha: ''
   }

  render() {
   
   createUser = () => {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          Alert.alert('A senha é muito fraca. Revise seus dados');
        } else {
          Alert.alert(errorMessage);
        }
        console.log(error);
      });
   }
   
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
            <Input placeholder='Email' style={styles.component}
            onChangeText={(text) => this.setState({email: text})}
            defaultValue={this.state.email}/>
            <Input placeholder='Senha' style={styles.component}
            onChangeText={(text) => this.setState({senha: text})}
            defaultValue={this.state.senha}/>
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
