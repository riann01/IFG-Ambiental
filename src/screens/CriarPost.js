import React from 'react';
import { StyleSheet } from 'react-native';
import { mapping, dark as lightTheme } from '@eva-design/eva';
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
import { default as customMapping } from '../../mapping.json';

this.navigationOptions = {
  title: 'CriarPost',
}

const PostIcon = (style) => (
  <Icon {...style} name='checkmark-circle-2'/>
);

const BackIcon = (style) => (
  <Icon {...style} name='arrow-ios-back-outline' />
);

const ImageIcon = (style) => (
  <Icon {...style} name='image-2'/>
);

const BackAction = () => (
  <TopNavigationAction icon={BackIcon}/>
);

const ApplicationContent = () => (
  <Layout style={styles.container}>
    <Text style={styles.text} category='h4'>Postar</Text>
    <Input
    placeholder='Título da Postagem'
    style={styles.inputTitle}
    size='small'
    />
    <Input placeholder='Conteúdo do Post'
    style={styles.inputPostBody}
    multiline={true}
    maxLength={20000}
    height={300}
    />
    <Layout style={styles.buttonContainer}>
      <Button
      icon={ImageIcon}
      size='medium'
      style={styles.button}>
      Carregar Foto</Button>
      <Button
      status='success'
      icon={PostIcon}
      size='medium'
      style={styles.button}>
      Postar</Button>
    </Layout>
  </Layout>
); 

const CriarPost = ({ navigation }) => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider
    mapping={mapping}
    theme={lightTheme}
    customMapping={customMapping}>
      <TopNavigation
      leftControl={BackAction()}
      title='Postar no Fórum'
      onPress={() => navigation.navigate('HomeScreen')}
      />
      <ApplicationContent/>
    </ApplicationProvider>
  </React.Fragment>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    marginVertical: 16,
    fontWeight: 'bold'
  },
  inputTitle: {
    width: '80%',
    marginBottom: 20,
  },
  inputPostBody: {
    width: '80%',
    marginBottom: 20,
  },
  button: {
    margin: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
  }
});

CriarPost.navigationOptions = {
  header: null,
  title: 'CriarPost'
}

export default CriarPost;