import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import userReducer from './reducers/user'
import forumReducer from './reducers/forum'
import topicoReducer from './reducers/topico'
import postReducer from './reducers/post'
import textosReducer from './reducers/textos'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    user: userReducer,
    forum: forumReducer,
    topico: topicoReducer,
    post: postReducer,
    textos: textosReducer
})

const storeConfig = () => {
    return createStore(rootReducer, compose(applyMiddleware(thunk)))
}

export default storeConfig