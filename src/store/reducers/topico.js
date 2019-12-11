import { 
    SET_NOME_TOPICO, 
    SET_POSTS, 
    POSTS_LOADED, 
    LOADING_POSTS } from '../actions/actionTypes'

const initialState = {
    nome: '',
    posts: [],
    isLoadingTopico: false
}

const reducer = (state=initialState, action) => {


        switch(action.type){
            case LOADING_POSTS: {
                return{
                    ...state,
                    isLoadingTopico: true
                }
            }
            case POSTS_LOADED: {
                return{
                    ...state,
                    isLoadingTopico: false
                }
            }
            case SET_POSTS: {
                return{
                    ...state,
                    posts: action.payload
                }
            }
            case SET_NOME_TOPICO: {
                return {
                    ...state,
                    nome: action.payload
                }
            }
            default: {            
                return state 
            }  
            
        } 
         
}

export default reducer