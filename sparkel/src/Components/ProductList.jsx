import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/ProductReducer/reducerActions";
import { genderFilter } from "../Redux/ProductReducer/reducerActions";

export default function ProducList({page,gen}){
//store all the products here

const store = useSelector((store) => store.productReducer.allData);
let dispatch=useDispatch();

function allData(){

     
        
    
}
useEffect(()=>{
//getting all the products from the api on mount phase
if(gen===''){
   dispatch(getData(page))
 }
 else{
    let val=gen;
   dispatch(genderFilter(val,page));
 }
   allData();
},[page,gen])
// console.log(products)



   return ( <DIV>
             {/* Map through all the products and send the details through props to ProductCard */}
            {store.map((ele)=>(
               <ProductCard key={ele.id} image={ele.image} title={ele.title} price={ele.price} id={ele.id} />
            ))}

   </DIV> ) 
}

const DIV=styled.div`
width: 80%;
margin: auto;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
display: grid;
grid-template-columns: repeat(3,1fr);
padding: 5%;
gap: 5%;
`