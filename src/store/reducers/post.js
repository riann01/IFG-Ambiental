import { 
    LOADING_POSTAGEM, 
    POSTAGEM_LOADED, 
    SET_POSTAGEM,
    SET_DADOS_POST
} from '../actions/actionTypes'

const initialState = {
   postagens: [],
   titulo: '',
   autor: '',
   autorKey: null,
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
       case SET_DADOS_POST: {
           return{
               ...state,
               postKey: action.payload.key,
               topicoKey: action.payload.topicoKey,
               titulo: action.payload.titulo,
               autor: action.payload.autor,
               autorKey: action.payload.autorKey
           }
       }
       default: {            
           return state 
       }  
         
   }
   
}

export default reducer