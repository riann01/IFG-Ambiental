import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  Button,
  Container,
  Card,
} from 'native-base';

import FBSDK, { LoginButton, LoginManager } from 'react-native-fbsdk';

let userData = {
  name: '',
  photo: null,
}

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

loginFacebook = async () => {
  /*try {
    let result = await LoginManager.logInWithPermissions(['public_profile'])
    if (result.isCancelled) {
      Alert.alert('Login Cancelado.')
    }
    else {
      Alert.alert('Login permitido com as permissões:' + result.grantedPermissions.toString())
    }
  }
  catch(error) {
    Alert.alert('Erro: ' + error)
  }*/
}

GoogleSignin.configure();

loginGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    this.setState({ userInfo });
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      Alert.alert('Login Cancelado.')
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
      Alert.alert('Login em progresso...')
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      Alert.alert('Google Play Services é necessário para usar Logar com Google.')
    } else {
      // some other error happened
      Alert.alert('Erro Desconhecido')
    }
  }
};

const App = ({ navigation }) => (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.header}>
            <Image source={require('./img/logo-preta-01.png')} resizeMode="contain" style={{width: 300, height: 100, marginLeft: 50,}}/>
            <Text style={styles.sectionTitle}>Bem vindo ao IFG Ambiental</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.textoCorpo}>
                Fazer Login no App
              </Text>
              <View style={{height: 450, justifyContent: 'center'}}>
                <LoginButton style={{width: '60%', height: '10%', left: '20%', marginBottom:30, justifyContent: 'center'}}
               />
                <GoogleSigninButton
                style={{ width: '60%', height: '10%', left: '20%', marginBottom:30}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                />
                <Button danger style={{ width: '60%', height: '10%', left: '17%', justifyContent: 'center'}}onPress={() => navigation.navigate('MainScreen')}>
                  <Text style={{textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold'}}> Entrar com Login </Text>
                </Button>
              </View>              
            </View>
          </View>
          
          <View style={{flex: 1}}>
          <View style={styles.footer}>
            <Text style={styles.textoFooter}>Feito com ❤ em Formosa</Text>
          </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#000000',
  },
  sectionContainer: {
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
    backgroundColor: '#000000',
    bottom: 0,
  },
  textoFooter: {
    color: Colors.white,
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  textoCorpo: {
    textAlign: 'center',
    fontSize: 30,
    color: Colors.white,
    marginTop: 35,
  }
});

App.navigationOptions = {
  title: 'Login',
}

export default App;
