import React from 'react';
import { StyleSheet, Spinner, View } from 'react-native';
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
import { Container } from 'native-base';
import Modal from "react-native-modal";

const BackIcon = (style) => (
  <Icon {...style} name='arrow-ios-back-outline' />
)

class Texts extends React.Component {

  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

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
      const data = this.props.textos

      const renderItem = ({ item, index }) => (
        <ListItem title={`${item.titulo}`} accessory={renderAccessory} onPress={() => { this.props.navigation.navigate('TextIn', {item: item}) }} />)

      const renderAccessory = (style, index) => (
        <Icon
          name='arrow-right' width={32} height={32} fill='#828282'
        />
      );
            
      return (

        <Layout>
          <Text style={styles.text} category='h4'>Textos Informativos</Text>
          <List
            data={data}
            renderItem={renderItem}
          />
        <View style={{ flex: 1 }}>
      </View>
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
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
})

const mapStateToProps = ({ textos }) => {
  return {
    textos: textos.textos,
    isLoadingTextos: textos.isLoadingTextos
  }
}

export default connect(mapStateToProps)(Texts)