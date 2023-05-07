import Addtocart_reducer from "./Cart/reducer"
import { legacy_createStore } from "redux"



const store=legacy_createStore(Addtocart_reducer)

export default store;