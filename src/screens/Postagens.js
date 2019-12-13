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
import {
    Container,
    Content,
    Card,
    CardItem,
    Body
} from 'native-base';

const BackIcon = (style) => (
    <Icon {...style} name='arrow-ios-back-outline' />
)

const Post = (conteudo, usuario, qtdComentarios) => {
    return (
        <Content padder>
            <Card>
                <CardItem header bordered>
                    <Text>{usuario}</Text>
                </CardItem>
                <CardItem bordered>
                    <Body>
                        <Text>
                            {conteudo}
                        </Text>
                    </Body>
                </CardItem>
                <CardItem footer bordered>
                    <Text>{qtdComentarios}</Text>
                </CardItem>
            </Card>
        </Content>
    )
}

class Postagens extends React.Component {


    backAction = () => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={() => this.props.navigation.goBack()}
        />
    )

    loadingOuNao = () => {
        if (this.props.isLoadingPosts || this.props.isLoadingTopico) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Spinner />
                </View>
            )
        } else {
            return (
                <Content padder>
                    <Card>
                        <CardItem header bordered>
                            <Text>Teste - Nome do Bendito</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Conteúdo do dito cujo
                                 </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered>
                            <Text>Número de comentarios</Text>
                        </CardItem>
                        <CardItem footer bordered>
                            <Text>Comentar</Text>
                        </CardItem>
                    </Card>
                </Content>
            )
        }
    }

    render() {
        const { navigation } = this.props;
        const title = navigation.getParam('title', 'null');
        return (
            <React.Fragment>
                <IconRegistry icons={EvaIconsPack} />
                <ApplicationProvider
                    mapping={mapping}
                    theme={darkTheme}>
                    <TopNavigation
                        leftControl={this.backAction()}
                        title='Retornar' />
                    <Text style={styles.text} category='h4'>{this.props.titulo}</Text>
                    <Container>
                        {this.loadingOuNao()}
                    </Container>
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

const mapStateToProps = ({ topico }) => {
    return {
        titulo: topico.titulo,
        description: topico.description,
        topicoKey: topico.key,
        posts: topico.posts,
        isLoadingPosts: topico, isLoadingPosts,
        isLoadingTopico: topico.isLoadingTopico
    }
}

export default connect(mapStateToProps)(Postagens)