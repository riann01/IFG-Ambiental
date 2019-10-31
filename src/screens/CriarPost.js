import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Layout,
  Text,
  Button,
  Input,
  Icon,
  TopNavigation,
  TopNavigationAction,
} from 'react-native-ui-kitten';


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

class CriarPost extends React.Component {
  
    render(){
      return(
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
      )
    }
      
    
}


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
})

export default CriarPost