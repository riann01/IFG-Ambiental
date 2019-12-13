import React from 'react';
import { StyleSheet, Spinner, View, ScrollView } from 'react-native';
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
    backAction = () => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={() => this.props.navigation.goBack()}
        />
    )
    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('item', 'null');
        return (
            <React.Fragment>
                <IconRegistry icons={EvaIconsPack} />
                <ApplicationProvider
                    mapping={mapping}
                    theme={darkTheme}>
                    <TopNavigation
                        leftControl={this.backAction()}
                        title='Retornar' />
                        

                        <Text style={styles.text} category='h4'>{item.titulo}</Text>

                            <ScrollView style={{height: 1000}}>
                                <Layout style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center', flex: 1}}>
                                    <Text style={{paddingTop: 10,flex: 1, width: '90%', minHeight: '100%'}}>{item.corpo}</Text>
                                </Layout>
                            </ScrollView>

                </ApplicationProvider>
            </React.Fragment>
        )
    }
}

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