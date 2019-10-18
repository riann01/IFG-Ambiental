import 'React' from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
} from 'react-native'

import { Container, Input } from 'native-base'

MainScreen.navigationOptions = {
  title: 'MainScreen',
}

const MainScreen = ({ navigation }) => (
    <>
    <SafeAreaView>
        <ScrollView>
            <Input placeholder='Nome de usuário'/>
            <Button success>
                <Text>Enviar</Text>
            </Button>
            <Button danger onPress={() => navigation.navigate('App')}>
                <Text>Retornar</Text>
            <Button/>
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