
import axios from "axios";
import CheckOut from "../Components/Cart/CheckOut";
import style from "../CSS/cart.module.css"
import { useEffect, useState } from "react";
import Cartitem from "./Cartitem";


export default function Cart(){
    // const[cart,setCart]=useState([])
    // const getdata=()=>{
    //     axios.get("https://mock-api-x1tu.onrender.com/cart").then((res)=>{
    //         console.log(res.data)
    //         setCart(res.data)
    //     }).catch((res)=>{
    //         console.log(res)
    //     })
    // }
    // useEffect(()=>{
    //     getdata()
    // },[])
    // console.log(cart)
    return (
        <div>
        {/* <h1 style={{textAlign:"center"}} className={style.ordersummery}>Your Shopping Cart</h1>
            {
               cart?.map((el)=>{
               return <Cartitem key={el.id} {...el} getdata={getdata}/>
               })
            } */}

            <CheckOut/>
        </div>
    )
}