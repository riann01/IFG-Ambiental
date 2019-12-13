import React from 'react';
import { StyleSheet, ImageBackground, Image } from 'react-native';
import { mapping, light as darkTheme } from '@eva-design/eva';
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
  Input,
  IconRegistry,
  Icon,
  TopNavigation,
  TopNavigationAction,
  ListItem
} from 'react-native-ui-kitten';
import { connect } from 'react-redux'
//const Client = require('../etc/ConnectDB');

//client = new Client();

import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { fetchPosts } from '../store/actions/topico';

const BackIcon = (style) => (
  <Icon {...style} name='arrow-ios-back-outline' />
)

const Gift = (style) => (
  <Icon {...style} name='gift' />
)

const Award = (style) => (
  <Icon {...style} name='award' />
)

const Earth = (style) => (
  <Icon {...style} name='globe-2' />
)

const Message = (style) => (
  <Icon {...style} name='message-circle' />
)

class Threads extends React.Component {
  
  backAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => this.props.navigation.navigate('Home')}
    />
  )

  selecionaTopico = (topicoKey) => {
    this.props.onFetchTopico(topicoKey)
    this.props.navigation.navigate('Postagens')
  }

  render() {

    return (
      <React.Fragment>
        <ApplicationProvider
          mapping={mapping}
          theme={darkTheme}>
          <IconRegistry icons={EvaIconsPack} />
          <TopNavigation
            leftControl={this.backAction()}
            title='Retornar' />
          <Layout style={styles.container}>
            <Text style={styles.text} category='h4'>Tópicos</Text>
            <ListItem
              title='Arrecadações'
              description='Espaço destinado a postagens de arrecadação de material.'
              icon={Gift}
              onPress={() => {this.props.navigation.navigate('Postagens'), {title: 'title'}}}
            />
            <ListItem
              title='Olha Só!'
              description='Espaço destinado a postagens de boas ações ambientais.'
              icon={Award}
            />
            <ListItem
              title='Discussões diversas sobre o Meio Ambiente'
              description='Espaço destinado a postagens sobre assuntos diversos relacionados ao Meio Ambiente.'
              icon={Earth}
            />
            <ListItem
              title='Off-Topic'
              description='Espaço destinado a postagens sobre assuntos não listados aqui.'
              icon={Message}
            />
          </Layout>
        </ApplicationProvider>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title: {
    marginVertical: '10%',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  component: {
    width: '90%',
    marginVertical: '3%',
  }
})

const mapStateToProps = ({ forum }) => {
  return {    
    topicos: forum.topicos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchTopico: (topicoKey) => dispatch(fetchPosts(topicoKey))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Threads)
