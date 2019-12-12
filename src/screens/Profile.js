import React from 'react';
import { StyleSheet, ImageBackground, Image, View } from 'react-native';
import { connect } from 'react-redux'
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
  ListItem,
  Avatar
} from 'react-native-ui-kitten';
//const Client = require('../etc/ConnectDB');

//client = new Client();

import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { prependToMemberExpression } from '@babel/types';
import { Container } from 'native-base';

const BackIcon = (style) => (
  <Icon {...style} name='arrow-ios-back-outline' />
);
const Pencil = (style) => (
  <Icon {...style} name='edit' />
);

class Profile extends React.Component {

  state = {
    mode: 'inicial'
  }

  backAction = () => (
    <TopNavigationAction icon={BackIcon} 
    onPress={() => this.setState('inicial')}/>
  );

  renderMode = () => {
    switch (this.state.mode) {
      case 'inicial': {
        return (
          <View>
            <TopNavigation
            leftControl={this.backAction()} />
            <Layout style={styles.container}>
              <Text style={styles.text} category='h4' style={styles.title}>Perfil</Text>
              <Text style={styles.text} category='h5' style={styles.title}>Ana Clara</Text>
              <Button icon={Pencil} onPress={() => this.setState({mode: 'alteraDados'})}>Editar Informações</Button>
              <Button icon={Pencil} onPress={() => this.setState({mode: 'alteraSenha'})}>Alterar Senha</Button>
              <Button icon={Pencil} onPress={() => this.setState({mode: 'alteraEmail'})}>Alterar Email</Button>
            </Layout>
          </View>
        )
      }
      case 'alteraSenha': {
        return (
          <View>
            <TopNavigation
            leftControl={this.backAction()} />
            <Text>Altera senha</Text>
          </View>
        )
      }
      case 'alteraDados': {
        return(
          <View>
            <TopNavigation
            leftControl={this.backAction()} />
            <Text>Altera dados</Text>
          </View>
        )
      }
      case 'alteraEmail': {
        return(
          <View>
            <TopNavigation
            leftControl={this.backAction()} />
            <Text>Altera email</Text>
          </View>
        )
      }
    }
  }


  render() {

    return (
      <React.Fragment>
        <ApplicationProvider
          mapping={mapping}
          theme={darkTheme}>
          <IconRegistry icons={EvaIconsPack} />
          <Container>

          </Container>
          {this.renderMode()}
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
    marginTop: 10,
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
  },
  item: {

  },
})



const mapStateToProps = ({ user }) => {
  return {
    nome: user.nome,
    dataNascimento: user.dataNascimento,
    titulo: user.titulo,
    instituicao: user.instituicao,
    email: user.email,
    telefone: user.telefone
  }
}

export default connect(mapStateToProps)(Profile)
