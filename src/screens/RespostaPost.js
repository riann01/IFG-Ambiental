import React from 'react';
import { StyleSheet } from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
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
import { connect } from 'react-redux'

import { EvaIconsPack } from '@ui-kitten/eva-icons';

const PostIcon = (style) => (
  <Icon {...style} name='checkmark-circle-2' />
);

const BackIcon = (style) => (
  <Icon {...style} name='arrow-ios-back-outline' />
);

const ImageIcon = (style) => (
  <Icon {...style} name='image-2' />
);

class RespostaPost extends React.Component {

  changeTextCorpo = (text) => {
    this.setState({ corpo: text })
  }

  backAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => this.props.navigation.goBack()}

    />
  )

  render() {
    return (
      <React.Fragment>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider
          mapping={mapping}
          theme={lightTheme}>
          <TopNavigation
            leftControl={this.backAction()}
            title='Retornar' />
          <Layout style={styles.container}>
            <Text style={styles.text} category='h4'>Responder</Text>
            <Text style={{marginBottom: '3%'}} category='h6'>Respondendo para "{}"</Text>
            <Input placeholder='Conteúdo do Post'
              style={styles.inputPostBody}
              multiline={true}
              maxLength={2000}
              height={300}
              onChangeText={(text) => { this.changeTextCorpo(text) }}
            />
            <Layout style={styles.buttonContainer}>
              <Button
                status='success'
                icon={PostIcon}
                size='large'
                style={styles.button}
                onPress={() => { }}>
                Postar</Button>
            </Layout>
          </Layout>
        </ApplicationProvider>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    marginBottom: '3%',
    fontWeight: 'bold'
  },
  inputTitle: {
    width: '90%',
    marginBottom: 20,
  },
  inputPostBody: {
    width: '90%',
    marginBottom: 20,
  },
  button: {
    margin: 10,
    width: '90%'
  },
  buttonContainer: {
    flexDirection: 'row',
  }
});

export default RespostaPost