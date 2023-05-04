import { useEffect, useState } from "react"


export default function ProducList(){
//store all the products here
let [Prods,setProd]=useState([]);

useEffect(()=>{
//getting all the products from the api on mount phase
},[])


   return ( <div>
             {/* Map through all the products and send the details through props to ProductCard */}


   </div> ) 
}