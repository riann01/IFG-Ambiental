import firebase from 'react-native-firebase';
import { LOADING_TEXTOS, TEXTOS_LOADED, SET_TEXTOS } from './actionTypes';

export const loadingTextos = () => {
    return{
        type: LOADING_TEXTOS
    }
}

export const textosLoaded = () => {
    return {
        type: TEXTOS_LOADED
    }
}

export const setTextos = (textos) => {
    return {
        type: SET_TEXTOS,
        payload: textos
    }
}


export const fetchTextos = () => {
    return dispatch => {
        dispatch(loadingTextos())
        let textos = []
        firebase.firestore().collection('textos').get()
        .then((res) => {
            if(!res.empty){
                res.forEach((doc) => {
                    let texto = {
                        key: doc.id,
                        ...doc.data()
                    }
                    textos.push(texto)
                })
            }
            dispatch(setTextos(textos))
            dispatch(textosLoaded())
            
        })
        .catch((err) => {
            alert("Erro ao sincronizar os textos - "+err)
        })
    }
}