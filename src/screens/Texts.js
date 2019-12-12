import React from 'react';
import { StyleSheet, ImageBackground, Image, View } from 'react-native';
import { mapping, light as darkTheme } from '@eva-design/eva';
import {
  ApplicationProvider,
  Layout,
  Text,
  IconRegistry
} from 'react-native-ui-kitten';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { connect } from 'react-redux'
import { Container } from 'native-base';

class Texts extends React.Component {


  loadingOuRender = () => {
    /////////////////////// AQUI COLOCA O SPINNER
    //////////////////////////////////////////
    if(this.props.isLoadingTextos){
      return(
        <View>

        </View>
      )

    }else{
      //////////////////////////
      ////////////////////////////// AQUI DENTRO DO RETURN VC COLOCA O CÓDIGO DA PÁGINA
      return(
        <Layout>
            <Text style={styles.text}>Textos</Text>
        </Layout>
      )
    }
  }

  render() {
    return (
      <React.Fragment>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider
          mapping={mapping}
          theme={darkTheme}>          
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