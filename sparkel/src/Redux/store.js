import Addtocart_reducer from "./Cart/reducer"
import { loginReducer } from "./AuthReducer/reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import {reducer as ProductReducer} from "./ProductReducer/reducer"
import thunk from "redux-thunk";

const rootReducer = combineReducers({loginReducer,ProductReducer,Addtocart_reducer})

const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

export default store;