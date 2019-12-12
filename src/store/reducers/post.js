import { 
    LOADING_POSTAGEM, 
    POSTAGEM_LOADED, 
    SET_POSTAGEM, 
    SET_KEY_POSTAGEM
} from '../actions/actionTypes'

const initialState = {
   postagens: [],
   titulo: '',
   postKey: null,
   topicoKey: null,
   isLoadingPost: false
}

const reducer = (state=initialState, action) => {

   switch(action.type){
       case LOADING_POSTAGEM: {
            return{
                ...state,
                isLoadingPost: true
            }
       }
       case POSTAGEM_LOADED: {
           return{
               ...state,
               isLoadingPost: false
           }
       }
       case SET_POSTAGEM: {
           return{
               ...state,
               postagens: action.payload
           }
       }
       case SET_KEY_POSTAGEM: {
           return {
               ...state,
               postKey: action.payload
           }
       }
       default: {            
           return state 
       }  
         
   }
   
}

export default reducer