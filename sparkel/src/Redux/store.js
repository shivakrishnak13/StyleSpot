import Addtocart_reducer from "./Cart/reducer"
import {reducer as productReducer} from './ProductReducer/reducer'
import thunk from 'redux-thunk'
import { loginReducer } from "./AuthReducer/reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux"

import thunk from "redux-thunk";

const rootReducer = combineReducers({loginReducer,productReducer,Addtocart_reducer})

const store=legacy_createStore(rootReducer,applyMiddleware(thunk))


export default store;