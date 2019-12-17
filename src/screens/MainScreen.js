import React from 'react';
import { StyleSheet, FlatList, Picker, PermissionsAndroid, Alert, StatusBar, TouchableOpacity } from 'react-native';
import { mapping, light as darkTheme } from '@eva-design/eva';
import Ripple from 'react-native-material-ripple'
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
  Input,
  IconRegistry,
  Icon,
  Avatar
} from 'react-native-ui-kitten';
import { getLocation, getData } from 'react-native-weather-api';
import { Card } from "@paraboly/react-native-card"
import { connect } from 'react-redux'
import { Container } from 'native-base';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { addPostTopico } from '../store/actions/topico';
import CardCustom from './CardCustom'
import { ThemeColors } from 'react-navigation';

let dataCityName
class MainScreen extends React.Component {


  state = {
    hora: new Date().getHours(),
    minutos: new Date().getMinutes(),
    dia: new Date().getDay(),
    mes: new Date().getMonth(),
    tratamento: '',
    tratamentoHora: '',
    windSpeed: '',
    temperature: '',
    cityName: '',
    topicoValue: null,
    topicoNome: '',
    topicos: []
  }

  componentDidMount() {
    this.setState({ topicos: Object.assign([], this.props.topicos) })
  }

  async requestLocation() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permissão Necessária',
          message:
            'Deseja conceder permissão para acessar sua ' +
            'localização ao IFG Ambiental?',
          buttonNegative: 'Negar',
          buttonPositive: 'Permitir',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getLocation()
        setTimeout(function () {
          let data = new getData()
          this.setState({ cityName: data.city, temperature: data.tempC, windSpeed: data.windKph })
        }, 2000);
        console.log('cheguei aqui.')
      } else {
        this.setState({ cityName: 'Serviço indisponível no momento.' })
      }
    } catch (err) {
      console.warn(err);
    }

  }

  componentDidMount = () => {
    this.requestLocation()
    let nomeUsr = this.props.nome
    let arr = nomeUsr.split(" ")
    let primeiroNome = arr[0]
    this.setState({ tratamento: primeiroNome })
    if ((this.state.hora >= 6 || (this.state.hora <= 11 && this.state.minutos <= 59))) {
      this.setState({ tratamentoHora: "Bom dia," })
    }
    if ((this.state.hora >= 12 || (this.state.hora <= 17 && this.state.minutos <= 59))) {
      this.setState({ tratamentoHora: "Boa tarde," })
    }
    if ((this.state.hora >= 18 || (this.state.hora <= 5 && this.state.minutos <= 59))) {
      this.setState({ tratamentoHora: "Boa noite," })
    }
  }

  render() {
    return (
      <React.Fragment>
        <ApplicationProvider
          mapping={mapping}
          theme={darkTheme}>
          <IconRegistry icons={EvaIconsPack} />
          <StatusBar
            translucent={false}
            backgroundColor="#97BF04"
            barStyle="light-content"
          />
          <Container style={{ flex: 1, backgroundColor: '#97BF04' }}>
            <Layout style={{
              backgroundColor: '#97BF04',
              height: 150,
              flexDirection: 'row'
            }}>
              <Layout style={{
                flexDirection: 'column',
                backgroundColor: '#97BF04'
              }}>
                <TouchableOpacity onPress={() => { this.props.navigation.openDrawer() }}
                  style={{
                    marginTop: 10,
                    marginLeft: 20
                  }}>
                  <Icon name='menu-outline' width={32} height={32} fill='#fff' />
                </TouchableOpacity>
                <Text category='h6' style={styles.title}>{this.state.tratamentoHora}</Text>
                <Text category='h4' style={{
                  fontWeight: 'bold',
                  textAlign: 'left',
                  color: 'white',
                  marginLeft: 23,
                  fontSize: 35,
                  marginTop: 5,
                  lineHeight: 35
                }}>{this.state.tratamento}!</Text>
              </Layout>
              <Layout style={{
                marginLeft: 180,
                marginTop: 35,
                backgroundColor: '#97BF04',
              }}>
                <Avatar size='large'
                  source={require('../assets/brand-logo.png')}
                  onPress={() => { this.props.navigation.navigate('Profile') }}
                  style={{
                    marginTop: 6
                  }} />
                <Text style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  marginTop: 6
                }}>Nível x</Text>
              </Layout>
            </Layout>
            <Layout style={{
              backgroundColor: '#fff',
              height: '100%',
              borderRadius: 20
            }}>
              <Layout style={{
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 3,
                elevation: 5,
                borderRadius: 16,
                width: '92%',
                alignSelf: 'center',
                marginTop: 20
              }}>
                <Ripple
                  onPress={() => { this.props.navigation.navigate('CriarPostHome') }}
                  rippleColor={'#505E80'}
                  rippleContainerBorderRadius={16}
                  style={{
                    width: '100%',
                    height: 94,
                  }}>
                  <Layout style={{
                    borderRadius: 16,
                    backgroundColor: '#FF455C',
                    width: '100%',
                    height: '100%',
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon name='plus-circle' width={32} height={32} fill='#fff' />
                    <Text style={{
                      color: 'white',
                      fontSize: 18
                    }}>Fazer Publicação Rápida</Text>
                  </Layout>
                </Ripple>
              </Layout>
              <Card
                title="Clima"
                iconName="ios-sunny"
                iconType="Ionicons"
                topRightText={this.state.temperature}
                bottomRightText={this.state.windSpeed}
                content={dataCityName}
                iconBackgroundColor="#F2B441"
              />
              <Card
                title="Educação Ambiental"
                iconName="book-open-page-variant"
                iconType="MaterialCommunityIcons"
                onPress={() => { this.props.navigation.navigate('Textos') }}
                content="Veja conteúdo informativo sobre educação ambiental :)"
                iconBackgroundColor="#1FAFBF"
              />
              <Card
                title="Contatos Úteis"
                iconName="perm-contact-calendar"
                iconType="MaterialIcons"
                onPress={() => { this.props.navigation.navigate('Telefones') }}
                content="Veja nesta seção contatos úteis"
                iconBackgroundColor="#05D580"
              />
              <Card
                title="Calendário"
                iconName="calendar-blank"
                iconType="MaterialCommunityIcons"
                onPress={() => { this.props.navigation.navigate('Calendario') }}
                content="Visualize o calendário ambiental."
                iconBackgroundColor="#14CC25"
              />
            </Layout>
          </Container>

        </ApplicationProvider>
      </React.Fragment >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign: 'center',
  },
  component: {
    width: '90%',
    marginVertical: '3%',
  },
  card: {
    marginTop: '5%',
    height: '35%'
  },
  text: {
    marginTop: 5,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  title: {
    marginTop: 10,
    marginLeft: 23,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white',
    fontSize: 25
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  inputPostBody: {
    width: '80%',
    marginTop: '10%'
  }
});


const mapStateToProps = ({ user, forum }) => {
  return {
    nome: user.nome,
    key: user.key,
    topicos: forum.topicos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: (post, topicoKey, autor, autorKey) => dispatch(addPostTopico(post, topicoKey, autor, autorKey))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
