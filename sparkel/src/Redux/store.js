import Addtocart_reducer from "./Cart/reducer"
import {reducer as productReducer} from './ProductReducer/reducer'
import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import thunk from 'redux-thunk'

let rootReducer=combineReducers({Addtocart_reducer,productReducer});

const store=legacy_createStore(rootReducer,applyMiddleware(thunk));

export default store;