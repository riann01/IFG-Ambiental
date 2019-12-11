
import React from 'react';
import { StyleSheet, ImageBackground, Image, View } from 'react-native';
import { mapping, light as darkTheme } from '@eva-design/eva';
import { ApplicationProvider, 
  Layout, 
  Text, 
  Button, 
  IconRegistry, 
  Icon,
  Input,
  TopNavigation,
  TopNavigationAction } from 'react-native-ui-kitten';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const FaceIcon = () => (
  <Icon name='facebook' fill='white'/>
)
const GoogleIcon = (style) => (
  <Icon {...style} name='google'/>
)
const EmailIcon = (style) => (
  <Icon {...style} name='email'/>
)

const BackIcon = (style) => (
  <Icon {...style} name='arrow-ios-back-outline'/>
)

const BackAction = () => (
  <TopNavigationAction icon={BackIcon}/>
)

class HomeScreen extends React.Component {

  state = {
    mode: 'inicial',
    secureTextEntry: true,
    loginEmail:{
      senha: '',
      email: ''
    },
    novaConta: {
      email: '',
      senha: '',
      rptSenha: ''
    }
  }

  renderIcon = (style) => {
    const iconName = this.state.secureTextEntry ? 'eye-off' : 'eye';
    return (
      <Icon {...style} name={iconName}/>
    );
  }

  onIconPress = () => {
    const secureTextEntry = !this.state.secureTextEntry;
    this.setState({ secureTextEntry })
  }

  renderMode = () => {
    switch(this.state.mode){
      case 'inicial': {
        return(
          <View>
            <ImageBackground
            source={require('../../img/IF-background.png')}
            style={styles.imageBackground}>
            <Layout style={styles.container} level='1'>
              <Image source={require('../../img/logo-ifg.png')}
              style={{
                width: '80%',
                height: '20%',
                marginTop: 0,
              }}
              resizeMode="contain"/>
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
                onPress={() => { this.setState({mode: 'loginEmail'}) }}>
                Entrar com email
              </Button>
              <Layout style={styles.faixa}>
                <Text style={{textAlign: 'center', marginLeft: '14%'}}>Feito com </Text>
                <Icon name='heart' fill='red' height={20} width={20} style={{}}/>
                <Text style={{textAlign: 'center'}}> em Formosa</Text>
              </Layout>
            </Layout>
            </ImageBackground>
          </View>
        )
      }
      case 'loginEmail': {
        return(
          <View>
            <TopNavigation
              leftControl={BackAction()}
              title='Retornar para o início'/>

            <Layout style={styles.container}>
            <Text style={styles.text} category='h4' style={styles.title}>Entrar com Email</Text>
            <Input 
                placeholder='Email'
                value={this.state.loginEmail.email} 
                style={styles.component}
                onChangeText={(text) => this.setState({loginEmail: {...this.state.loginEmail, email: text}})}/>
            <Input
                value={this.state.loginEmail.senha}
                placeholder='Senha'
                icon={this.renderIcon}
                secureTextEntry={this.state.secureTextEntry}
                onIconPress={this.onIconPress}
                onChangeText={(text) => this.setState({ loginEmail: {...this.state.loginEmail, senha: text}})}
                style={styles.component}
              />
              <Button size='large' status='success' style={{marginTop: '5%', width: '90%',}}>Entrar</Button>
              <Text style={{marginHorizontal: '1%'}}>Ainda não possui uma conta?</Text>
              <Button size='large' status='basic' style={{marginTop: '5%', width: '90%',}}
              onPress={() => this.setState({mode: 'registrar'})}>Criar uma Conta</Button>
            </Layout>
          </View>
        )
      }
      case 'loginFacebook': {
        return(
          <View>

          </View>
        )
      }
      case 'registrar':{
        return(
          <View>
            <IconRegistry icons={EvaIconsPack}/>
            <TopNavigation
            leftControl={BackAction()}
            title='Retornar para o início'/>
            <Layout style={styles.container}>
              <Input placeholder='Email' style={styles.component}
              onChangeText={(text) => this.setState({ novaConta: { ...this.state.novaConta, email: text}})}
              defaultValue={this.state.novaConta.email}/>
              <Input placeholder='Senha' style={styles.component}
              onChangeText={(text) => this.setState({ novaConta: { ...this.state.novaConta, senha: text}})}
              defaultValue={this.state.novaConta.senha}/>
               <Input placeholder='Repita a senha' style={styles.component}
              onChangeText={(text) => this.setState({ novaConta: { ...this.state.novaConta, rptSenha: text}})}
              defaultValue={this.state.novaConta.rptSenha}/>
              <Button size='large' status='success' style={{marginTop: '5%', width: '90%',}} onPress={() => { alert("considere a conta como criada bjs")}}>Criar Conta</Button>
            </Layout>
          </View>
        )
      }
      default: {
        return(
          <View>

          </View>
        )
      }

    }
  }



  render() {
    return(
      <React.Fragment>
        <IconRegistry icons={EvaIconsPack}/>
        <ApplicationProvider
        mapping={mapping}
        theme={darkTheme}>
          {this.renderMode()}
        </ApplicationProvider>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign:'center',
    height: '65%',
    width: '80%',
    top: '18%',
    textAlign: 'center',
    borderRadius: 10,
  },
  text: {
    marginTop: 10,
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
});

HomeScreen.navigationOptions = {
  header: null,
  title: 'Home'
}

export default HomeScreen