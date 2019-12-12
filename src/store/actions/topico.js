import firebase from 'react-native-firebase';
import { LOADING_POSTS, POSTS_LOADED, SET_POSTS, LOADING_TOPICO, TOPICO_LOADED, SET_TOPICO } from './actionTypes';


export const loadingPosts = () => {
    return {
        type: LOADING_POSTS
    }
}

export const postsLoaded = () => {
    return {
        type: POSTS_LOADED
    }
}

export const setPosts = (posts) => {
    return {
        type: SET_POSTS,
        payload: posts
    }
}

export const loadingTopico = () => {
    return {
        type: LOADING_TOPICO
    }
}

export const topicoLoaded = () => {
    return {
        type: TOPICO_LOADED
    }
}

export const setTopico = (topico) => {
    return {
        type: SET_TOPICO,
        payload: topico
    }
}

export const fetchPosts = (topicoKey) => {

    return dispatch => {
        dispatch(loadingPosts())
        firebase.database().ref(`${topicoKey}/posts/`)
        .on('value', (snapshot) => {

            setTimeout(() => {
                
                let posts = []

                snapshot.forEach((doc) => {
                    let post = {
                        key: doc.key,
                        ...doc.val()
                    }
                    posts.push(post)
                })

                dispatch(setPosts(posts))
                dispatch(postsLoaded())
            }, 0)

        })

    }
}

export const fetchTopico = (topicoKey) => {

    return dispatch => {
        dispatch(loadingTopico())
        firebase.database().ref(`${topicoKey}`)
        .once('value', (snapshot) => {
            
            if(snapshot.exists){
                let topico = {
                    key: topicoKey,
                    ...snapshot.val()
                }

                dispatch(setTopico(topico))
            }
            dispatch(topicoLoaded())

        })

    }
}


export const addPostTopico = (novoPost, topicoKey, autor, autorKey) => {
    return dispatch => {

        let novoPost2 = {
            ...novoPost,
            autor: autor,
            autorKey: autorKey
        }

        firebase.database().ref(`${topicoKey}/posts`).push(novoPost2).
            then(() => {
                
            })
            .catch((err) => {
                alert(err)
            })
    }
}