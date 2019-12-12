import { 
    SET_POSTS, 
    POSTS_LOADED, 
    LOADING_POSTS, 
    LOADING_TOPICO,
    TOPICO_LOADED,
    SET_TOPICO} from '../actions/actionTypes'

const initialState = {
    titulo: '',
    description: '',
    key: '',
    posts: [],
    isLoadingPosts: false,
    isLoadingTopico: false
}

const reducer = (state=initialState, action) => {


        switch(action.type){
            case LOADING_POSTS: {
                return{
                    ...state,
                    isLoadingPosts: true
                }
            }
            case POSTS_LOADED: {
                return{
                    ...state,
                    isLoadingPosts: false
                }
            }
            case SET_POSTS: {
                return{
                    ...state,
                    posts: action.payload
                }
            }
            case LOADING_TOPICO: {
                return {
                    ...state,
                    isLoadingTopico: true
                }
            }
            case TOPICO_LOADED: {
                return {
                    ...state,
                    isLoadingTopico: false
                }
            }
            case SET_TOPICO: {
                return {
                    ...state,
                    titulo: action.payload.titulo,
                    description: action.payload.description,
                    key: action.payload.key
                }
            }

            default: {            
                return state 
            }  
            
        } 
         
}

export default reducer