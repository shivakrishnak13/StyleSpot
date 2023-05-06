import axios from "axios";
import { ERROR, REQUEST, SUCCESS } from "./reducerTypes"


export const getData=()=>(dispatch)=>{
dispatch({type:REQUEST});

axios.get('https://dapper-precious-sedum.glitch.me/products').then((res)=>{
    dispatch({type:SUCCESS,payload:res.data});
}).catch((err)=>{
   dispatch({type:ERROR}); 
})

}