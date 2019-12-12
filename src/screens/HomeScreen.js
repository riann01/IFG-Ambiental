
import React from 'react';
import { StyleSheet, ImageBackground, Image, View, TouchableOpacity } from 'react-native';
import { mapping, light as darkTheme } from '@eva-design/eva';
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
  IconRegistry,
  Icon,
  Input,
  Datepicker,
  TopNavigation,
  Select,
  TopNavigationAction
} from 'react-native-ui-kitten';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Dialog from "react-native-dialog"
import { connect } from 'react-redux'
import { Content, Container } from 'native-base';
import { login, registrar, dismissErrorLogin, forgotPassword, deslogar } from '../store/actions/user';

const FaceIcon = () => (
  <Icon name='facebook' fill='white' />
)
const GoogleIcon = (style) => (
  <Icon {...style} name='google' />
)
const EmailIcon = (style) => (
  <Icon {...style} name='email' />
)

const BackIcon = (style) => (
  <Icon {...style} name='arrow-ios-back-outline' />
)


class HomeScreen extends React.Component {

  state = {
    mode: 'inicial',
    secureTextEntry: true,
    loginEmail: {
      senha: '',
      email: ''
    },
    novaConta: {
      email: '',
      senha: '',
      rptSenha: '',
      nome: '',
      titulo: '',
      telefone: '',
      instituicao: '',
      dataNascimento: ''
    },
    dialogErroRegistro: false,
    mensagemErroRegistro: '',
    tituloErroRegistro: '',
    visibleModal: null,
    emailRelembrar: ''
  }

  backAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => this.setState({ mode: 'inicial' })}
    />
  )

  componentDidUpdate = prevProps => {
    if (prevProps.isAuthenticating && !this.props.isAuthenticating) {
      if (!prevProps.isAuthenticated && this.props.isAuthenticated) {
        this.props.navigation.navigate('Main')
      }
    }
  }

  loginEmail = () => {
    if (this.state.loginEmail.email.trim().length > 0 && this.state.loginEmail.senha.trim().length > 0) {
      this.props.onLogin({ ...this.state.loginEmail })
    }
  }

  registrar = () => {

    if (this.state.novaConta.senha.trim().length > 0 && this.state.novaConta.email.trim().length > 0) {

      if (this.state.novaConta.senha === this.state.novaConta.rptSenha) {
        if (this.state.novaConta.telefone.trim().length >= 9) {

          if (this.state.novaConta.instituicao.trim().length >= 1) {

            if (this.state.novaConta.titulo.trim().length >= 0) {
              if (this.state.novaConta.dataNascimento.trim().length >= 0) {
                if (this.state.novaConta.nome.trim().length >= 6) {
                  this.props.onRegistrar({ ...this.state.novaConta })
                } else {
                  this.setState({ dialogErroRegistro: true, mensagemErroRegistro: 'Atenção!', tituloErroRegistro: 'É necessário digitar seu nome.' })
                }
              } else {
                this.setState({ dialogErroRegistro: true, mensagemErroRegistro: 'Atenção!', tituloErroRegistro: 'É necessário selecionar sua data de nascimento.' })
              }
            } else {
              this.setState({ dialogErroRegistro: true, mensagemErroRegistro: 'Atenção!', tituloErroRegistro: 'É necessário selecionar um título.' })
            }
          } else {
            this.setState({ dialogErroRegistro: true, mensagemErroRegistro: 'Atenção!', tituloErroRegistro: 'É necessário preencher o campo Instituição. Caso não possua, coloque "Nenhuma". ' })
          }
        } else {
          this.setState({ dialogErroRegistro: true, mensagemErroRegistro: 'Atenção!', tituloErroRegistro: 'É necessário preencher o campo Telefone. Coloque seu DDD, juntamente com os 9 digitos.' })
        }
      } else {
        this.setState({ dialogErroRegistro: true, mensagemErroRegistro: 'Atenção!', tituloErroRegistro: 'Os campos de senha e repetir senha devem ser idênticos!' })
      }

    }
  }

  relembraSenha = () => {
    if (this.state.emailRelembrar.trim().length > 5) {
      this.props.onEsqueciSenha(this.state.emailRelembrar)
      this.setState({ visibleModal: null })
    }
  }

  renderIcon = (style) => {
    const iconName = this.state.secureTextEntry ? 'eye-off' : 'eye';
    return (
      <Icon {...style} name={iconName} />
    )
  }

  onIconPress = () => {
    const secureTextEntry = !this.state.secureTextEntry;
    this.setState({ secureTextEntry })
  }

  componentDidMount = () => {
    this.props.onDeslogar()
  }

  renderMode = () => {
    switch (this.state.mode) {
      case 'inicial': {
        return (
          <View>
            <ImageBackground
              source={require('../../img/IF-background.png')}
              style={styles.imageBackground}>
              <Layout style={styles.containerInicial} level='1'>
                <Image source={require('../../img/logo-ifg.png')}
                  style={{
                    width: '80%',
                    height: '20%',
                    marginTop: 0,
                  }}
                  resizeMode="contain" />
                <Text style={styles.text} category='h4'>Bem-vindo ao IFG Ambiental</Text>
                <Button
                  style={{
                    marginTop: '10%',
                    width: '70%',
                  }}
                  icon={FaceIcon}>
                  Entrar com Facebook
              </Button>
                <Button
                  style={{
                    marginTop: '5%',
                    width: '70%'
                  }}
                  icon={GoogleIcon}
                  onPress={() => { }}
                  status='danger'>
                  Entrar com Google
              </Button>
                <Button
                  style={{
                    marginTop: '5%',
                    width: '70%'
                  }}
                  icon={EmailIcon}
                  status='success'
                  onPress={() => { this.setState({ mode: 'loginEmail' }) }}>
                  Entrar com email
              </Button>
                <Layout style={styles.faixa}>
                  <Text style={{ textAlign: 'center', marginLeft: '14%' }}>Feito com </Text>
                  <Icon name='heart' fill='red' height={20} width={20} style={{}} />
                  <Text style={{ textAlign: 'center' }}> em Formosa</Text>
                </Layout>
              </Layout>
            </ImageBackground>
          </View>
        )
      }
      case 'loginEmail': {
        return (
          <View>
            <TopNavigation
              leftControl={this.backAction()}
              title='Retornar para o início' />

            <Layout style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.text} category='h4'>Entrar com Email</Text>
              <Input
                placeholder='Email'
                value={this.state.loginEmail.email}
                style={{ width: '80%' }}
                onChangeText={(text) => this.setState({ loginEmail: { ...this.state.loginEmail, email: text } })} />
              <Input
                value={this.state.loginEmail.senha}
                placeholder='Senha'
                icon={this.renderIcon}
                secureTextEntry={this.state.secureTextEntry}
                onIconPress={this.onIconPress}
                onChangeText={(text) => this.setState({ loginEmail: { ...this.state.loginEmail, senha: text } })}
                style={{ width: '80%' }}
              />
              <TouchableOpacity onPress={() => this.setState({ mode: 'esqueciSenha' })}>
                <Text style={{ marginHorizontal: '1%' }}>Esqueci minha senha</Text>
              </TouchableOpacity>
              <Button size='large' status='success' onPress={() => this.loginEmail()} style={{ marginTop: '5%', width: '90%', }}>Entrar</Button>
              <Text style={{ marginHorizontal: '1%' }}>Ainda não possui uma conta?</Text>
              <Button size='large' status='basic' style={{ marginTop: '5%', width: '90%', }}
                onPress={() => this.setState({ mode: 'registrar' })}>Criar uma Conta</Button>
            </Layout>
          </View>
        )
      }
      case 'loginFacebook': {
        return (
          <View>

          </View>
        )
      }
      case 'registrar': {
        const CalendarIcon = (style) => (
          <Icon {...style} name='calendar' />
        );
        const PLACEMENTS = [
          { text: 'Aluno' },
          { text: 'Professor' },
          { text: 'Mestre' },
          { text: 'Doutor' },
          { text: 'Sem Título' },
        ];
        return (
          <View>
            <TopNavigation
              leftControl={this.backAction()}
              title='Retornar para o início' />

            <Layout style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
              <Input placeholder='Email' style={styles.component}
                onChangeText={(text) => this.setState({ novaConta: { ...this.state.novaConta, email: text } })}
                value={this.state.novaConta.email}
                style={{width: '80%'}} />
              <Input placeholder='Senha' style={styles.component}
                onChangeText={(text) => this.setState({ novaConta: { ...this.state.novaConta, senha: text } })}
                secureTextEntry={true}
                value={this.state.novaConta.senha}
                style={{width: '80%'}} />
              <Input placeholder='Repita a senha' style={styles.component}
                onChangeText={(text) => this.setState({ novaConta: { ...this.state.novaConta, rptSenha: text } })}
                secureTextEntry={true}
                value={this.state.novaConta.rptSenha} 
                style={{width: '80%'}}/>
              <Input placeholder='Nome' style={styles.component}
                onChangeText={(text) => this.setState({ novaConta: { ...this.state.novaConta, nome: text } })}
                value={this.state.novaConta.nome} 
                style={{width: '80%'}}/>
              <Input placeholder='Data de Nascimento' size='large' icon={CalendarIcon} style={styles.component}
                onChangeText={(text) => this.setState({ novaConta: { ...this.state.novaConta, dataNascimento: text } })}
                value={this.state.novaConta.dataNascimento}
                style={{width: '80%'}}/>
              <Input placeholder='Instituição' style={styles.component}
                onChangeText={(text) => this.setState({ novaConta: { ...this.state.novaConta, instituicao: text } })}
                value={this.state.novaConta.instituicao}
                style={{width: '80%'}}/>
              <Input placeholder='Título Ex.: Aluno'
                selectedOption={this.state.novaConta.titulo}
                onChangeText={(text) => this.setState({ novaConta: { ...this.state.novaConta, titulo: text } })}
                value={this.state.novaConta.titulo}
                style={{width: '80%'}}/>
              <Input placeholder='Telefone' style={styles.component}
                onChangeText={(text) => this.setState({ novaConta: { ...this.state.novaConta, telefone: text } })}
                value={this.state.novaConta.telefone}
                style={{width: '80%'}}/>
              <Button size='large' status='success' style={{ marginTop: '5%', width: '90%', }} onPress={() => { this.registrar() }}>Criar Conta</Button>

            </Layout>
          </View>
        )
      }
      case 'esqueciSenha': {
        return (
          <View>
            <TopNavigation
              leftControl={this.backAction()}
              title='Retornar para o início' />

            <Layout style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.text} category='h4'>Relembrar minha senha</Text>
              <Input
                placeholder='Email'
                value={this.state.emailRelembrar}
                style={{width: '80%'}}
                onChangeText={(text) => this.setState({ emailRelembrar: text })} />

              <Button size='large' status='success' onPress={() => this.relembraSenha()} style={{ marginTop: '5%', width: '90%', }}>Enviar</Button>

            </Layout>
          </View>
        )
      }
      default: {
        return (
          <View>

          </View>
        )
      }

    }
  }

  render() {
    return (
      <React.Fragment>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider
          mapping={mapping}
          theme={darkTheme}>
          <Dialog.Container
            headerStyle={{ backgroundColor: 'ghostwhite' }}
            contentStyle={{ backgroundColor: 'ghostwhite' }}
            footerStyle={{ backgroundColor: 'ghostwhite' }}
            visible={this.props.erroLogin}>
            <Dialog.Title style={{ ...styles.informacoesText, fontSize: 20, textAlign: 'center' }}>{this.props.tituloErroLogin}</Dialog.Title>
            <Dialog.Description style={{ ...styles.informacoesText, fontSize: 18, textAlign: 'justify' }}>
              {this.props.mensagemErroLogin}
            </Dialog.Description>
            <Dialog.Button color={'green'} bold={true} label="OK" onPress={() => { this.props.onDismissError(); this.setState({ user: { ...this.state.user, email: '', senha: '' } }) }} />
          </Dialog.Container>
          <Dialog.Container
            headerStyle={{ backgroundColor: 'ghostwhite' }}
            contentStyle={{ backgroundColor: 'ghostwhite' }}
            footerStyle={{ backgroundColor: 'ghostwhite' }}
            visible={this.state.dialogErroRegistro}>
            <Dialog.Title style={{ fontSize: 20, textAlign: 'center' }}>{this.state.tituloErroRegistro}</Dialog.Title>
            <Dialog.Description style={{ fontSize: 18, textAlign: 'justify' }}>
              {this.state.mensagemErroRegistro}
            </Dialog.Description>
            <Dialog.Button color={'green'} bold={true} label="OK" onPress={() => { this.setState({ dialogErroRegistro: false }) }} />
          </Dialog.Container>
          <Container>
            {this.renderMode()}
          </Container>
        </ApplicationProvider>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({

  containerInicial: {
    alignItems: 'center',
    textAlign: 'center',
    height: '65%',
    width: '80%',
    top: '18%',
    textAlign: 'center',
    borderRadius: 10
  },
  text: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  imageBackground: {
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%',
  },
  faixa: {
    height: '5%',
    width: '80%',
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'center',
    marginBottom: '4%'
  }
})

const mapStateToProps = ({ user }) => {
  return {
    isAuthenticated: user.isAuthenticated,
    isAuthenticating: user.isAuthenticating,
    erroLogin: user.erroLogin,
    mensagemErroLogin: user.mensagemErroLogin,
    tituloErroLogin: user.tituloErroLogin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (user) => dispatch(login(user)),
    onRegistrar: (novoUser) => dispatch(registrar(novoUser)),
    onDismissError: () => dispatch(dismissErrorLogin()),
    onEsqueciSenha: (email) => dispatch(forgotPassword(email)),
    onDeslogar: () => dispatch(deslogar())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)