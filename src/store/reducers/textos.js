import { LOADING_TEXTOS, TEXTOS_LOADED, SET_TEXTOS } from '../actions/actionTypes'

const initialState = {
   textos: [],
   isLoadingTextos: false
}

const reducer = (state=initialState, action) => {

   switch(action.type){

        case LOADING_TEXTOS: {
            return {
                ...state,
                isLoadingTextos: true
            }
        }
        case TEXTOS_LOADED: {
            return {
                ...state,
                isLoadingTextos: false
            }
        }
        case SET_TEXTOS: {
            return{
                ...state,
                textos: action.payload
            }
        }
        default: {            
            return state 
        }  
         
   }
   
}

export default reducer