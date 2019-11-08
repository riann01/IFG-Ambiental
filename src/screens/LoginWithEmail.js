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
//const Client = require('../etc/ConnectDB');

//client = new Client();

import { EvaIconsPack } from '@ui-kitten/eva-icons';

const BackIcon = (style) => (
  <Icon {...style} name='arrow-ios-back-outline'/>
);

const BackAction = () => (
  <TopNavigationAction icon={BackIcon}/>
);

const ApplicationContent = ({ navigation }) => (
  state = {
    value: '',
    secureTextEntry: true,
  },
  

  
  renderIcon = (style) => {
    const iconName = this.state.secureTextEntry ? 'eye-off' : 'eye';
    return (
      <Icon {...style} name={iconName}/>
    );
  },
  <React.Fragment>
    <Layout style={styles.container}>
    <Text style={styles.text} category='h4' style={styles.title}>Entrar com Email</Text>
    <Input placeholder='Email' style={styles.component}/>
    <Input
        value={this.state.value}
        placeholder='Senha'
        icon={this.renderIcon}
        secureTextEntry={this.state.secureTextEntry}
        onIconPress={this.onIconPress}
        onChangeText={this.onChangeText}
        style={styles.component}
      />
      <Button size='large' status='success' style={{marginTop: '5%', width: '90%',}}>Entrar</Button>
    </Layout>
  </React.Fragment>
); 

class LoginWithEmail extends React.Component {
  onChangeText = (value) => {
    this.setState({ value });
  };
  
  onIconPress = () => {
    const secureTextEntry = !this.state.secureTextEntry;
    this.setState({ secureTextEntry });
  };
  render() {
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
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title: {
    marginVertical: '10%',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  component: {
    width: '90%',
    marginVertical: '3%',
  }
});

LoginWithEmail.navigationOptions = ({ /*navigation*/ }) => {
  return {
      header: null
  }
}


export default LoginWithEmail;
