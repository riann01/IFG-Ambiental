/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
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
} from 'native-base';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.header}>
            <Image source={require('./img/logo-preta-01.png')} resizeMode="contain" style={{width: 300, height: 100, marginLeft: 50}}/>
            <Text style={styles.sectionTitle}>Bem vindo ao IFG Ambiental</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.textoCorpo}>
                Fazer Login
              </Text>
              <Container style={{justifyContent: 'center'}}>
                <Button success style={{width: 100, height: 50, left: 50, borderRadius: 5}}>
                  <Text style={{textAlign: 'center', color: Colors.white, fontSize: 25}}>Botão</Text>
                </Button>
              </Container>              
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
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#FFFFFF',
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
    fontSize: 16,
  }
});

export default App;
