import React from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet,
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
    Input,
    Thumbnail,
    Body,
    Left,
    CardItem,
    Card,
    Icon,
    Button,
    Right,
    Text,
    Container,
} from 'native-base';

this.navigationOptions = {
  title: 'pub',
}

const pub = ({ navigation }) => (
    <>
    <SafeAreaView>
        <ScrollView>
            <View style={{justifyContent: 'center', left: '15%'}}>
                <Text style={{marginBottom: 20}}>Pelo que você procura?</Text>
                <Input placeholder="ex.: papelão grosso" style={{marginBottom: 20}}></Input>
                <Text>Imagem (opcional)</Text>
                <Button success style={{justifyContent: 'center', textAlign: 'center', width: '70%', marginBottom: 10, marginTop: 100}}>
                    <Text>Carregar Arquivo de Imagem</Text>
                </Button>
                <Button style={{justifyContent: 'center', textAlign: 'center', width: '70%'}}>
                    <Text>Postar</Text>
                </Button>
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

export default pub