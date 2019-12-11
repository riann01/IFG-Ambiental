import { 
    LOADING_TOPICOS, 
    TOPICOS_LOADED, 
    SET_TOPICOS } from '../actions/actionTypes'

const initialState = {
   topicos = [],
   isLoadingForum: false
}

const reducer = (state=initialState, action) => {

   switch(action.type){

        case LOADING_TOPICOS: {
            return {
                ...state,
                isLoadingForum: true
            }
        }
        case TOPICOS_LOADED: {
            return {
                ...state,
                isLoadingForum: false
            }
        }
        case SET_TOPICOS: {
            return{
                ...state,
                topicos: action.payload
            }
        }
        default: {            
            return state 
        }  
         
   }
   
}

export default reducer