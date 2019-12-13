import React from 'react';
import { StyleSheet, FlatList, Picker, PermissionsAndroid } from 'react-native';
import { mapping, light as darkTheme } from '@eva-design/eva';
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
  Input,
  IconRegistry,
  Icon
} from 'react-native-ui-kitten';
import { getLocation, getData } from 'react-native-weather-api';
import { Card } from "@paraboly/react-native-card"
import { connect } from 'react-redux'
import { Container } from 'native-base';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { addPostTopico } from '../store/actions/topico';


class MainScreen extends React.Component {


  state = {
    hora: new Date().getHours(),
    minutos: new Date().getMinutes(),
    tratamento: '',
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
      } else {
        this.setState({ cityName: 'Serviço indisponível no momento.' })
      }
    } catch (err) {
      console.warn(err);
    }
  }

  componentDidMount = () => {
    this.requestLocation()
    if ((this.state.hora >= 6 || (this.state.hora <= 11 && this.state.minutos <= 59))) {
      this.setState({ tratamento: "Bom dia, " + this.props.nome })
    }
    if ((this.state.hora >= 12 || (this.state.hora <= 17 && this.state.minutos <= 59))) {
      this.setState({ tratamento: "Boa tarde, " + this.props.nome })
    }
    if ((this.state.hora >= 18 || (this.state.hora <= 5 && this.state.minutos <= 59))) {
      this.setState({ tratamento: "Boa noite, " + this.props.nome })
    }
  }

  render() {
    /*this.requestLocation()
    if ((this.state.hora >= 6 || (this.hora <= 11 && this.minutos <= 59))) {
      this.setState({ tratamento: "Bom dia, " + this.props.nome })
    }
    if ((this.hora >= 12 || (this.hora <= 17 && this.minutos <= 59))) {
      this.setState({ tratamento: "Boa tarde, " + this.props.nome })
    }
    if ((this.hora >= 18 || (this.hora <= 5 && this.minutos <= 59))) {
      this.setState({ tratamento: "Boa noite, " + this.props.nome })
    }*/

    return (
      <React.Fragment>
        <ApplicationProvider
          mapping={mapping}
          theme={darkTheme}>
          <IconRegistry icons={EvaIconsPack} />
          <Container style={{ flex: 1 }}>
            <Text style={styles.text} category='h4' style={styles.title}>{this.state.tratamento}!</Text>
            <Card
              title="Clima"
              iconName="ios-sunny"
              iconType="Ionicons"
              onPress={() => { }}
              topRightText={this.state.temperature}
              bottomRightText={this.state.windSpeed}
              content={this.state.cityName}
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
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title: {
    marginVertical: '5%',
    fontWeight: 'bold',
    textAlign: 'center',
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
