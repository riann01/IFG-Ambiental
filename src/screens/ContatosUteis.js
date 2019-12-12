import React from 'react';
import { StyleSheet, Spinner, View } from 'react-native';
import { mapping, light as darkTheme } from '@eva-design/eva';
import {
    ApplicationProvider,
    Layout,
    Text,
    IconRegistry,
    TopNavigation,
    TopNavigationAction,
    Icon
} from 'react-native-ui-kitten';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { connect } from 'react-redux'
import { Container } from 'native-base';

const BackIcon = (style) => (
    <Icon {...style} name='arrow-ios-back-outline' />
)

class ContatosUteis extends React.Component {
    backAction = () => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={() => this.props.navigation.navigate('Home')}
        />
    )
    render() {
        return (
            <React.Fragment>
                <IconRegistry icons={EvaIconsPack} />
                <ApplicationProvider
                    mapping={mapping}
                    theme={darkTheme}>
                    <Container>
                        <TopNavigation
                            leftControl={this.backAction()}
                            title='Retornar' />
                        <Text style={{ fontWeight: 'bold', marginTop: '5%', marginBottom: '5%', textAlign: 'center' }} category='h4'>Telefones Úteis</Text>
                        <View style={{ alignItems: 'center', alignContent: 'center', height: '100%' }}>
                            <Container>
                                <View style={styles.container}>
                                    <Text style={{ textAlign: 'center' }}>Em casos de incêndios ou queimadas florestais:</Text>
                                    <Text style={{ textAlign: 'center' }}>Corpo de Bombeiros Militar</Text>
                                    <Text style={{ textAlign: 'center' }}>Contato: 193</Text>
                                </View>
                                <View style={styles.container}>
                                    <Text style={{ textAlign: 'center' }}>Contato IBAMA – Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis</Text>
                                    <Text style={{ textAlign: 'center' }}>Contato: (61) 3316-1611 ou então acesse pelo link:</Text>
                                    <Text style={{ textAlign: 'center' }}>https://www.ibama.gov.br/fale-com-o-ibama</Text>
                                </View>
                                <View style={styles.container}>
                                    <Text style={{ textAlign: 'center' }}>Secretaria de Meio Ambiente e Turismo – Prefeitura Municipal de Formosa – GO</Text>
                                    <Text style={{ textAlign: 'center' }}>Contato: (61) 3981-1071</Text>
                                </View>
                                <View style={styles.container}>
                                    <Text style={{ textAlign: 'center' }}>Secretaria de Estado do Meio Ambiente do Distrito Federal</Text>
                                    <Text style={{ textAlign: 'center' }}>Contato: 162 ou então acesse o link: http://www.sema.df.gov.br/category/ouvidoria/</Text>
                                </View>
                                <View style={styles.container}>
                                    <Text style={{ textAlign: 'center' }}>Secretaria de Estado de Meio Ambiente e Desenvolvimento Sustentável</Text>
                                    <Text style={{ textAlign: 'center' }}>Contato: (62) 3201-5261</Text>
                                    <Text style={{ textAlign: 'center' }}>http://www.meioambiente.go.gov.br/fale-conosco.html</Text>
                                    <Text style={{ textAlign: 'center' }}>E-mail: ouvidoria.meioambiente@goias.gov.br</Text>
                                </View>
                            </Container>
                        </View>
                    </Container>
                </ApplicationProvider>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({

    text: {
        marginTop: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    container: {
        borderRadius: 7,
        borderWidth: 1,
        width: '80%',
        height: '20%',
        flexDirection: 'column',
        marginBottom: '5%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    }
})

export default ContatosUteis