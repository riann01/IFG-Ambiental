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
} from 'react-native-ui-kitten';

import { EvaIconsPack } from '@ui-kitten/eva-icons';

const BackIcon = (style) => (
  <Icon {...style} name='arrow-ios-back-outline' />
);

const BackAction = () => (
  <TopNavigationAction icon={BackIcon} />
);

const ApplicationContent = ({ navigation }) => (
  state = {
    value: '',
    secureTextEntry: true,
  },

  renderIcon = (style) => {
    const iconName = this.state.secureTextEntry ? 'eye-off' : 'eye';
    return (
      <Icon {...style} name={iconName} />
    );
  },
  <React.Fragment>
    <Layout style={styles.container}>
      <Text style={styles.text} category='h4' style={styles.title}>Entrar com Email</Text>
      <Input placeholder='Email' style={styles.component} />
      <Input
        value={this.state.value}
        placeholder='Senha'
        icon={this.renderIcon}
        secureTextEntry={this.state.secureTextEntry}
        onIconPress={this.onIconPress}
        onChangeText={this.onChangeText}
        style={styles.component}
      />
      <Button size='large' status='success' style={{ marginTop: '5%', width: '90%', }}>Entrar</Button>
    </Layout>
  </React.Fragment>
);

class LoginWithEmail extends React.Component {
  onChangeText = (value) => {
    this.setState({ value });
  };

  onIconPress = () => {
    const secureTextEntry = !this.state.secureTextEntry;
    this.setState({ secureTextEntry });
  };
  render() {
    return (
      <React.Fragment>

        <ApplicationProvider
          mapping={mapping}
          theme={darkTheme}>
          <IconRegistry icons={EvaIconsPack} />
          <TopNavigation
            leftControl={BackAction()}
            title='Retornar para o início' />

          <ApplicationContent />
        </ApplicationProvider>
      </React.Fragment>
    );
  }
}

class MainScreen extends React.Component {
  userName = "User"
  hora = new Date().getHours()
  minutos = new Date().getMinutes()
  render() {
    let cityName = "";
    let temperature = "";
    let windSpeed = "";
    let tratamento = "";
    async function requestLocation() {
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
          getLocation();
          setTimeout(function () {
            let data = new getData()
            cityName = data.city;
            temperature = data.tempC;
            windSpeed = data.windKph;
          }, 2000);
        } else {
          cityName = 'Permissão de acesso à localização negada.'
        }
      } catch (err) {
        console.warn(err);
      }
    }

    requestLocation()
    if ((this.hora >= 6 || (this.hora <= 11 && this.minutos <= 59))) {
      this.tratamento = "Bom dia, "
    }
    if ((this.hora >= 12 || (this.hora <= 17 && this.minutos <= 59))) {
      this.tratamento = "Boa tarde, "
    }
    if ((this.hora >= 18 || (this.hora <= 5 && this.minutos <= 59))) {
      this.tratamento = "Boa noite, "
    }
    const data = [
      { text: 'Option 1' },
      { text: 'Option 2' },
      { text: 'Option 3' },
    ];

    return (
      <React.Fragment>
        <ApplicationProvider
          mapping={mapping}
          theme={darkTheme}>
          <IconRegistry icons={EvaIconsPack} />
          <Container style={{ flex: 1 }}>
            <Text style={styles.text} category='h4' style={styles.title}>{this.tratamento}{this.userName}!</Text>
            <Layout style={{ alignItems: 'center', marginTop: '5%', height: '60%' }}>
              <Layout style={{ width: '90%', elevation: 7, borderRadius: 20, height: '50%' }}>
                <Layout style={{
                  height: '35%',
                  width: '100%',
                  backgroundColor: '#0686DF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  textAlign: 'center',
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  elevation: 7
                }}>
                  <Layout style={styles.icon}>
                    <Icon name='file-add' width={25} height={25} fill='#FFF' />
                  </Layout>
                  <Text category='h6' style={{ color: '#FFFFFF' }}>Postagem Curta</Text>
                </Layout>
                <Layout style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  height: '80%'
                }}>
                  <Input placeholder='Conteúdo do Post'
                    style={styles.inputPostBody}
                    multiline={true}
                    maxLength={140}
                    height={70}
                  />
                  <Layout style={{ flexDirection: 'row' }}>
                    <Picker
                      selectedValue={state.language}
                      style={{ height: 50, width: 100 }}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({ language: itemValue })
                      }>
                      <Picker.Item label="Java" value="java" />
                      <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                    <Button
                      icon={PostIcon}
                      size='medium'
                      style={styles.button}>
                    </Button>
                  </Layout>
                </Layout>
              </Layout>
            </Layout>
            <Card
              title="Clima"
              iconName="ios-sunny"
              iconType="Ionicons"
              onPress={() => { }}
              topRightText={temperature}
              bottomRightText={windSpeed}
              content={cityName}
              iconBackgroundColor="#F2B441"
            />
            <Card
              title="Educação Ambiental"
              iconName="book-open-page-variant"
              iconType="MaterialCommunityIcons"
              onPress={() => { }}
              content="Veja conteúdo informativo sobre educação ambiental :)"
              iconBackgroundColor="#1FAFBF"
            />
            <Card
              title="Contatos Úteis"
              iconName="perm-contact-calendar"
              iconType="MaterialIcons"
              onPress={() => { }}
              content="Veja nesta seção contatos úteis"
              iconBackgroundColor="#05D580"
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

LoginWithEmail.navigationOptions = ({ /*navigation*/ }) => {
  return {
    header: null
  }
}


export default LoginWithEmail;
