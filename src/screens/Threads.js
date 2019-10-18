import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
    Container,
    Input,
    Button,
    Card,
    CardItem,
    Icon,
    Right,
} from 'native-base';

this.navigationOptions = {
  title: 'Threads',
}

func = () => {
    Alert.alert('Você foi devidamente autenticado.')
}

const Threads = ({ navigation }) => (
    <>
    <SafeAreaView>
        <ScrollView>
            <Card>
                <CardItem>
                    <Icon active name="folder" onPress={() => navigation.navigate('Posts')}/>
                    <Text onPress={() => navigation.navigate('Posts')}>Arrecadações</Text>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </CardItem>
                <CardItem>
                    <Icon active name="folder" />
                    <Text>Denúncias</Text>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </CardItem>
                <CardItem>
                    <Icon active name="folder" />
                    <Text>Olha só!</Text>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </CardItem>
                <CardItem>
                    <Icon active name="folder" />
                    <Text>Discussões Diversas sobre o Meio Ambiente</Text>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </CardItem>
                <CardItem>
                    <Icon active name="folder" />
                    <Text>Off-topic</Text>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </CardItem>
            </Card>
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
});

export default Threads