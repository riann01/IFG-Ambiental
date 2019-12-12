import firebase from 'react-native-firebase';
import { LOADING_POSTAGEM, POSTAGEM_LOADED, SET_POSTAGEM, SET_DADOS_POST } from './actionTypes';


export const loadingPostagem = () => {
    return {
        type: LOADING_POSTAGEM
    }
}

export const postagemLoaded = () => {
    return {
        type: POSTAGEM_LOADED
    }
}

export const setPostagem = (postagem) => {
    return {
        type: SET_POSTAGEM,
        payload: postagem
    }
}

export const setDadosPost = (post) => {
    return {
        type: SET_DADOS_POST,
        payload: post
    }
}


export const fetchPostagem = (topicoKey, postagemKey) => {

    return dispatch => {

        dispatch(loadingPostagem())
        firebase.database().ref(`${topicoKey}/posts/${postagemKey}/postagens`)
            .on('value', (snapshot) => {

                setTimeout(() => {

                    let postagens = []

                    snapshot.forEach((doc) => {
                        let postagem = {
                            key: doc.key,
                            ...doc.val()
                        }
                        postagens.push(postagem)
                    })

                    dispatch(setPostagem(postagem))
                    dispatch(postagemLoaded())
                }, 0)

            })

    }
}


export const fetchDadosPost = (topicoKey, postagemKey) => {

    return dispatch => {

        firebase.database().ref(`${topicoKey}/posts/${postagemKey}`)
            .once('value', (snapshot) => {

                let postagem = {
                    key: postagemKey,
                    topicoKey: topicoKey,
                    ...snapshot.val()
                }

                dispatch(setDadosPost(postagem))

            })

    }
}
