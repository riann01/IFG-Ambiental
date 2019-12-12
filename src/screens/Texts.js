import React from 'react';
import { StyleSheet, Spinner, View } from 'react-native';
import { mapping, light as darkTheme } from '@eva-design/eva';
import {
  ApplicationProvider,
  Layout,
  Text,
  IconRegistry,
  Icon, TopNavigationAction, TopNavigation, ListItem, List
} from 'react-native-ui-kitten';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { connect } from 'react-redux'
import { Container } from 'native-base';

const BackIcon = (style) => (
  <Icon {...style} name='arrow-ios-back-outline' />
)



class Texts extends React.Component {

  loadingOuRender = () => {
    /////////////////////// AQUI COLOCA O SPINNER
    //////////////////////////////////////////
    if (this.props.isLoadingTextos) {
      return (
        <View>
          <Spinner />
        </View>
      )

    } else {
      //////////////////////////
      ////////////////////////////// AQUI DENTRO DO RETURN VC COLOCA O CÓDIGO DA PÁGINA
      return (

        <Layout>
          <Text style={styles.text} category='h4'>Textos</Text>
          array.forEach(element => {
            
          });
          <Text>{this.props.texto}</Text>
        </Layout>
      )
    }
  }
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
          <TopNavigation
            leftControl={this.backAction()}
            title='Retornar' />
          <Container>
            {this.loadingOuRender()}
          </Container>
        </ApplicationProvider>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({

  text: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  }
})

const mapStateToProps = ({ textos }) => {
  return {
    textos: textos.textos,
    isLoadingTextos: textos.isLoadingTextos
  }
}

export default connect(mapStateToProps)(Texts)