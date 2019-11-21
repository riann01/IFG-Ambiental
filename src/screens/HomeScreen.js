import React from 'react';
import { StyleSheet, ImageBackground, Image, View } from 'react-native';
import { mapping, light as darkTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button, IconRegistry, Icon } from 'react-native-ui-kitten';
import { StackActions, NavigationActions } from 'react-navigation';
//const Client = require('../etc/ConnectDB');

//client = new Client();

import { EvaIconsPack } from '@ui-kitten/eva-icons';

const FaceIcon = () => (
  <Icon name='facebook' fill='white'/>
);
const GoogleIcon = (style) => (
  <Icon {...style} name='google'/>
);
const EmailIcon = (style) => (
  <Icon {...style} name='email'/>
);
const HostIcon = (style) => (
  <Icon {...style} name='briefcase'/>
);

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
      <Text style={styles.text} category='h4'>Bem-vindo ao IFG Ambiental</Text>
      <Button
        style={{
          marginTop: '10%',
          width: '70%',
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
        status='basic'
        onPress={() => { navigation.navigate({ routeName: 'Post' })}}>
        Entrar como convidado
      </Button>
      <Layout style={styles.faixa}>
        <Text style={{textAlign: 'center', marginLeft: '14%'}}>Feito com </Text>
        <Icon name='heart' fill='red' height={20} width={20} style={{}}/>
        <Text style={{textAlign: 'center'}}> em Formosa</Text>
      </Layout>
    </Layout>
    </ImageBackground>
  </React.Fragment>
); 

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
  }

  render() {
    return(
      <React.Fragment>
        <IconRegistry icons={EvaIconsPack}/>
        <ApplicationProvider
        mapping={mapping}
        theme={darkTheme}>
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
    height: '65%',
    width: '80%',
    top: '18%',
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
    alignContent: 'center',
    width: '100%',
    height: '100%',
  },
  faixa: {
    height: '5%',
    width: '80%',
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'center',
    marginBottom: '4%'
  }
});

HomeScreen.navigationOptions = {
  header: null,
  title: 'Home'
}

export default HomeScreen