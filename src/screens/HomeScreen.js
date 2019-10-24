import React from 'react';
import { StyleSheet, ImageBackground, Image } from 'react-native';
import { mapping, dark as darkTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button } from 'react-native-ui-kitten';

const ApplicationContent = ({ navigation }) => (
  <React.Fragment>
    <ImageBackground
    source={require('../../img/IF-background.png')}
    style={styles.imageBackground}>
    <Layout style={styles.container} level='1'>
      <Image source={require('../../img/logo-ifg-letras-brancas.png')}
      style={{
        width: '80%',
        height: '20%',
        marginTop: 0,
      }}
      resizeMode="contain"/>
      <Text style={styles.text} category='h4'>Bem Vindo ao IFG Ambiental</Text>
      <Button onPress={() => this.props.navigation.navigate('CriarPost')}
      style={{marginTop: '30%'}}>
      Quero postar logo!</Button>
    </Layout>
    </ImageBackground>
  </React.Fragment>
); 

const HomeScreen = () => (
    <ApplicationProvider
    mapping={mapping}
    theme={darkTheme}>
        <ApplicationContent/>
    </ApplicationProvider>
);


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign:'center',
    height: '60%',
    width: '80%',
    top: '25%',
    textAlign: 'center',
    borderRadius: 10,
  },
  text: { marginVertical: 0, textAlign: 'center' },
  imageBackground: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

HomeScreen.navigationOptions = ({ /*navigation*/ }) => {
  return {
      header: null
  }
}

export default HomeScreen;
