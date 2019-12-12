import firebase from 'react-native-firebase';
import { LOADING_TOPICOS, TOPICOS_LOADED, SET_TOPICOS } from './actionTypes';

export const loadingTopicos = () => {
    return{
        type: LOADING_TOPICOS
    }
}

export const topicosLoaded = () => {
    return{
        type: TOPICOS_LOADED
    }
}

export const setTopicos = (topicos) => {
    return {
        type: SET_TOPICOS,
        payload: topicos
    }
}

export const fetchTopicos = () => {
    return dispatch => {
        dispatch(loadingTopicos())
        firebase.database().ref().on('value', (snapshot) => {

            setTimeout(() => {

                let topicos = []
                
                snapshot.forEach((doc) => {
                    let topico = doc.val().titulo
                    topicos.push(topico)
                })
                
                dispatch(setTopicos(topicos))
                dispatch(topicosLoaded())

            }, 0)

        })
    }
}

export const addTopico = () => {
    return dispatch => {
        firebase.database().ref().push({titulo: 'Arrecadações', posts: []})
    }
}