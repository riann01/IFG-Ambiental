import React from 'react';
import { StyleSheet, Spinner, View } from 'react-native';
import { mapping, light as darkTheme } from '@eva-design/eva';
import {
    ApplicationProvider,
    Layout,
    Text,
    IconRegistry,
    Icon,
    TopNavigationAction,
    TopNavigation,
    ListItem,
    List,
    Button
} from 'react-native-ui-kitten';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { connect } from 'react-redux'
import { Container } from 'native-base';

const BackIcon = (style) => (
    <Icon {...style} name='arrow-ios-back-outline' />
)

class TextIndividual extends React.Component {
    reder() {
        return (
            <React.Fragment>
                <IconRegistry icons={EvaIconsPack} />
                <ApplicationProvider
                    mapping={mapping}
                    theme={darkTheme}>
                    <TopNavigation
                        leftControl={this.backAction()}
                        title='Retornar' />
                    <Container>
                        <Text style={styles.text} category='h4'>Título do Texto</Text>
                        <View>
                            <ScrollView style={{ height: '100%' }}>
                                <Layout style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text>lorem ipsum dolor teste teste teste teste teste teste teste teste teste teste</Text>
                                </Layout>
                            </ScrollView>
                        </View>
                    </Container>
                </ApplicationProvider>
            </React.Fragment>
        )
    }
}
backAction = () => (
    <TopNavigationAction
        icon={BackIcon}
        onPress={() => this.props.navigation.navigate('Texts')}
    />
)

const styles = StyleSheet.create({

    text: {
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
})

export default TextIndividual