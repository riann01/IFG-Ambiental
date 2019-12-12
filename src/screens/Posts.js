import React from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { connect } from 'react-redux'

import {
    Container,
    Input,
    Thumbnail,
    Body,
    Left,
    CardItem,
    Card,
    Icon,
    Button,
    Right,
    Text,
} from 'native-base';

this.navigationOptions = {
  title: 'Posts',
}

const Posts = ({ navigation }) => (
    <>
    <SafeAreaView>
      <Button success onPress={() => navigation.navigate('pub')}>
        <Icon active name="add"/>
        <Text>Criar Publicação neste Tópico</Text>
      </Button>
        <ScrollView>
            <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../img/mulher.jpg')} />
                <Body>
                  <Text>Hellen de Souza</Text>
                  <Text note>em Formosa - GO procura Tampinhas de Garrafa</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../../img/bottle-caps.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>1 hora atras</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../img/homem.jpg')} />
                <Body>
                  <Text>Andrey Soares da Costa Mota</Text>
                  <Text note>em Formosa - GO procura Latas de Alumínio</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../../img/lata-aluminio-reciclagem.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>1 hora atras</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../img/homem2.jpg')} />
                <Body>
                  <Text>Carlos Miranda de Araújo</Text>
                  <Text note>em Formosa - GO procura Garrafas Pet</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../../img/size_960_16_9_garrafas-plasticas.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>1 hora atras</Text>
              </Right>
            </CardItem>
          </Card>
        </ScrollView>
    </SafeAreaView>
    </>
);

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: '#000000',
    },
    button: {
        width: '50%',
        marginTop: 10,
        marginBottom: 10,
        left: 90,
        justifyContent: 'center',
    },
    textoCor: {
        color: '#FFFFFF',
        fontWeight: 'bold',
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

export default connect(mapStateToProps, mapDispatchToProps)(Posts)