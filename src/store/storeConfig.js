import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import userReducer from './reducers/user'
import forumReducer from './reducers/forum'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    user: userReducer,
    forum: forumReducer
})

const storeConfig = () => {
    return createStore(rootReducer, compose(applyMiddleware(thunk)))
}

export default storeConfig