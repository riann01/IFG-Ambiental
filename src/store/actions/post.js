import firebase from 'react-native-firebase';
import { LOADING_POSTAGEM, POSTAGEM_LOADED, SET_POSTAGEM } from './actionTypes';


export const loadingPostagem = () => {
    return{
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


export const fetchPostagem = (topicoKey, postagemKey) => {

    return dispatch => {
        
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

            }, 0)

        })

    }
}

export const addPostTopico = (novoPost, topicoKey) => {
    return dispatch => (
        firebase.database().ref(`/${topicoKey}/posts`).push(novoPost).
        then(() => {

        })
        .catch((err) => {
            alert(err)
        })
    )
}