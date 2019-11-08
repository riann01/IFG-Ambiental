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
  ListItem,
  Avatar
} from 'react-native-ui-kitten';
//const Client = require('../etc/ConnectDB');

//client = new Client();

import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { prependToMemberExpression } from '@babel/types';

const BackIcon = (style) => (
    <Icon {...style} name='arrow-ios-back-outline'/>
);
const Pencil = (style) => (
    <Icon {...style} name='edit'/>
);

const BackAction = () => (
  <TopNavigationAction icon={BackIcon}/>
);

const ApplicationContent = ({ navigation }) => (
  <React.Fragment>
    <Layout style={styles.container}>
        <Text style={styles.text} category='h4' style={styles.title}>Perfil</Text>
        <Avatar
            style={styles.item}
            size='giant'
            source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' }}
        />
        <Text style={styles.text} category='h5' style={styles.title}>Ana Clara</Text>
        <Text style={styles.title}>Formosa - Goiás</Text>
        <Button icon={Pencil}>Editar Informações</Button>
    </Layout>
  </React.Fragment>
); 

class Profile extends React.Component {
  render() {
    return(
      <React.Fragment>
        <ApplicationProvider
        mapping={mapping}
        theme={darkTheme}>
          <IconRegistry icons={EvaIconsPack}/>
          <TopNavigation
            leftControl={BackAction()}/>
          <ApplicationContent/>
        </ApplicationProvider>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign:'center',
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title: {
    marginVertical: '10%',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  component: {
    width: '90%',
    marginVertical: '3%',
  },
  item: {

  },
});

Profile.navigationOptions = ({ /*navigation*/ }) => {
  return {
      header: null
  }
}


export default Profile;
