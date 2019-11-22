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
  TopNavigationAction
} from 'react-native-ui-kitten';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const BackIcon = (style) => (
  <Icon {...style} name='arrow-ios-back-outline'/>
);

const BackAction = () => (
  <TopNavigationAction icon={BackIcon}/>
);

const ApplicationContent = ({ navigation, state }) => (

  renderIcon = (style) => {
    const iconName = state.secureTextEntry ? 'eye-off' : 'eye';
    return (
      <Icon {...style} name={iconName}/>
    );
  },
  onChangeText = (value) => {
    state.value = value ;
  },
  
  onIconPress = () => {
    const secureTextEntry = !state.secureTextEntry;
    state.secureTextEntry = secureTextEntry ;
  },
  <React.Fragment>
    <Layout style={styles.container}>
    <Text style={styles.text} category='h4' style={styles.title}>Entrar com Email</Text>
    <Input placeholder='Email' style={styles.component}/>
    <Input
        value={state.value}
        placeholder='Senha'
        icon={renderIcon}
        secureTextEntry={state.secureTextEntry}
        onIconPress={onIconPress}
        onChangeText={onChangeText}
        style={styles.component}
      />
      <Button size='large' status='success' style={{marginTop: '5%', width: '90%',}}>Entrar</Button>
      <Text style={{marginHorizontal: '1%'}}>Ainda não possui uma conta?</Text>
      <Button size='large' status='basic' style={{marginTop: '5%', width: '90%',}}
      onPress={() => navigation.navigate('CreateAccount')}>Criar uma Conta</Button>
    </Layout>
  </React.Fragment>
); 

class LoginWithEmail extends React.Component {
  render() {
    state = {
      value: '',
      secureTextEntry: true,
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
        
          <ApplicationContent navigation={this.props.navigation} state={state}/>
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
