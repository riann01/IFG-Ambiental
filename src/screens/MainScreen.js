import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    StyleSheet,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Container, Input, Button } from 'native-base';
this.navigationOptions = {
  title: 'MainScreen',
}

const MainScreen = ({ navigation }) => (
    <>
    <SafeAreaView>
        <ScrollView>
            <Input placeholder='Nome de usuário'/>
            <Button success style={styles.button} onPress={() => navigation.navigate('Threads')}>
                <Text style={styles.textoCor}>Enviar</Text>
            </Button>
            <Button danger style={styles.button} onPress={() => navigation.navigate('App')}>
                <Text style={styles.textoCor}>Retornar</Text>
            </Button>
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
    button: {
        width: '50%',
        marginTop: 10,
        marginBottom: 10,
        left: 90,
        justifyContent: 'center',
    },
    textoCor: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    }
});

export default MainScreen