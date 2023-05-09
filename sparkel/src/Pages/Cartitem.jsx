import React, { useState } from 'react'
import "../CSS/singleProd.css"
import logo from "../images/StyleSpot editted.png";
import axios from 'axios';

function Cartitem({id,image,title,price,rating,getdata}) {
   const[count,setCount]=useState(1)
   const handledelte=()=>{
axios.delete(`https://mock-api-x1tu.onrender.com/cart/${id}`).then((res)=>{
    getdata()
})
alert("Added product has been deleted")
   }
  return (
    <div  style={{width:"50%"}} className='Mainproductbox'>
            {/* product image and price  */}
            <div className='productdetailbox'>
                {/* <div className='productimagebox'> */}
                    <img  className='image' src={image}
                        alt=''
                    />
                {/* </div> */}
                <div className='productpricebox'>
                    <h1 className='honeproduct'>{title}</h1>
                    <p>Price:{price}</p>
                    <p>{rating}</p>
                    <div className='producttnbox'>
                        <button style={{height:"60px",width:"50px"}} disabled={count==1}  onClick={()=>{
                          setCount((prev)=>prev-1)
                        }} className='prductbtn'>-</button>
                        
                        <p className='ansqty'>Qty:{count}</p>
                       
                       
                        <button style={{height:"60px",width:"50px"}}  onClick={()=>{
                          setCount((prev)=>prev+1)
                        }} className='prductbtn'>+</button>
                    </div>
                </div>

                <div className='productdeletebox'>
                    <p>{title}</p>
                    <p>Subtotal:{count*price}</p>
                    <div className='deletproducbox'>
                        <button onClick={handledelte}  className='deletebtn'>Delete</button>
                    </div>

                </div>

            </div>

            {/* product  card summary */}
            <div className='paymentproductbox'>
                <img className='paymebtimageamazon' src={logo}
                    />
                {/* <h1>AmaZonn</h1> */}
                <p className='pcardproduct'>Card Summary</p>
                 
                   <h3 className='om5'>Your total Bill is {Math.floor((price*count)+(price*count)*5/100+(price*count)*2/100)}</h3>
               
                <p className='pbox'>Merchandise Subtotal: {price*count} </p>
                <br/>
                <p className='pbox'>Shipping: {Math.floor((price*count)*5/100)}</p>
                <br/>
                <p className='pbox'>Estimated Tax :  {Math.floor((price*count)*2/100)}</p>
                <br/>
              <p className='ptotal'>Total Amount: {Math.floor((price*count)+(price*count)*5/100+(price*count)*2/100)}</p>
                <button  className='checkoutbtn'>CheckOut</button>
            </div>
        </div>
    )
}


export default Cartitem


