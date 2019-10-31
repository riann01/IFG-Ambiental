import React from 'react';
import { StyleSheet, ImageBackground, Image } from 'react-native';
import { mapping, light as darkTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button, IconRegistry, Icon } from 'react-native-ui-kitten';
const Client = require('../etc/ConnectDB');

//client = new Client();

import { EvaIconsPack } from '@ui-kitten/eva-icons';

const ApplicationContent = ({ navigation }) => (
  <React.Fragment>
    <ImageBackground
    source={require('../../img/IF-background.png')}
    style={styles.imageBackground}>
    <Layout style={styles.container} level='1'>
      <Image source={require('../../img/logo-ifg.png')}
      style={{
        width: '80%',
        height: '20%',
        marginTop: 0,
      }}
      resizeMode="contain"/>
      <Text style={styles.text} category='h4'>Bem Vindo ao IFG Ambiental</Text>
      <Button
        style={{
          marginTop: '10%',
          width: '70%'
        }}
        icon={FaceIcon}>
        Entrar com Facebook
      </Button>
      <Button
        style={{
          marginTop: '5%',
          width: '70%'
        }}
        icon={GoogleIcon}
        status='danger'>
        Entrar com Google
      </Button>
      <Button
        style={{
          marginTop: '5%',
          width: '70%'
        }}
        icon={EmailIcon}
        status='success'>
        Entrar com email
      </Button>
      <Button
        style={{
          marginTop: '5%',
          marginBottom: '5%',
          width: '70%'
        }}
        icon={HostIcon}
        status='basic'>
        Entrar como convidado 
      </Button>
    </Layout>
    </ImageBackground>
  </React.Fragment>
); 

const HomeScreen = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider
    mapping={mapping}
    theme={darkTheme}>
        <ApplicationContent/>
    </ApplicationProvider>
  </React.Fragment>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign:'center',
    height: '53%',
    width: '80%',
    top: '23%',
    textAlign: 'center',
    borderRadius: 10,
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  imageBackground: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

LoginWithEmail.navigationOptions = ({ /*navigation*/ }) => {
  return {
      header: null
  }
}


export default LoginWithEmail;
