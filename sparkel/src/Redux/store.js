import Addtocart_reducer from "./Cart/reducer"
import { loginReducer } from "./AuthReducer/reducer";
import { legacy_createStore } from "redux"



const store=legacy_createStore(loginReducer)

export default store;