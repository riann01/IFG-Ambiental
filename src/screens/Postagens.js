import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
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
    Body,
    Spinner
} from 'native-base';

const BackIcon = (style) => (
    <Icon {...style} name='arrow-ios-back-outline' />
)

const EditIcon = (style) => (
    <Icon {...style} name='edit'/>
);

const EditAction = (props) => (
    <TopNavigationAction {...props} icon={EditIcon}/>
);

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
                <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Spinner />
                </Layout>
            )
        } else {
            if (this.props.posts.length > 0) {
                const renderItem = ({ item, index }) => (
                    <ListItem>
                        <Content padder>
                            <Card>
                                <CardItem header bordered>
                                    <Text>{item.user.nome}</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                        <Text>
                                            {item.corpo}
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
                    </ListItem>
                )
                const data = this.props.posts
                console.log(data)
                return (
                    <List
                        data={data}
                        renderItem={renderItem}
                    />
                )
            }
            else {
                return (
                    <Layout style={{ alignItems: 'center' }}>
                        <Text style={{ textAlign: 'center', width: '80%' }}>Hmm... Parece meio vazio por aqui, que tal postar algo?</Text>
                    </Layout>
                )
            }

        }
    }

    render() {
        const renderRightControls = () => [
            <EditAction onPress={() => {this.props.navigation.navigate('CriarPost')}}/>,
          ];
        return (
            <React.Fragment>
                <IconRegistry icons={EvaIconsPack} />
                <ApplicationProvider
                    mapping={mapping}
                    theme={darkTheme}>
                    <TopNavigation
                        leftControl={this.backAction()}
                        rightControls={renderRightControls()}
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
        isLoadingPosts: topico.isLoadingPosts,
        isLoadingTopico: topico.isLoadingTopico
    }
}

export default connect(mapStateToProps)(Postagens)