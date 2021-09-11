import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import usersReducers from '../reducers/usersReducers'
import customersReducers from '../reducers/customersReducers'
import productsReducers from '../reducers/productReducer'

const configureStore = () => {

    const store=createStore(
        combineReducers({
            users:usersReducers,
            customers:customersReducers,
            products:productsReducers
        }),applyMiddleware(thunk))    
    return store
}


export default configureStore