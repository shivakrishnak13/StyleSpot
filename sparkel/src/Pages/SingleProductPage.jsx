import React from 'react'
import "../CSS/singleProd.css"

import { TfiHeart} from "react-icons/tfi";

import Slider1 from '../Components/Slider1';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Addtocart_action } from '../Redux/Cart/action';
import {Wrap,WrapItem,Button,useToast }from "@chakra-ui/react";



function SingleProductPage() {
 
  const toast = useToast()
  const dispatch = useDispatch();

const {id} = useParams();
  const [data,setProduct]= useState([])
  console.log(data)
  useEffect(()=>{
    const fetchproduct = ()=>{
      axios.get(`https://dapper-precious-sedum.glitch.me/products/${id}`).then((res)=>{
        setProduct(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    }

    fetchproduct()
  },[])



  const addtocart= ()=>{
     dispatch(Addtocart_action(data,1));
    
  }




  console.log(data)
  return (
  <div>
    <div className='main'>
    
      
    <div className='picture'>
<img style={{marginTop:"40px",objectFit:"container"}} src={data.image} alt="" />
  <div style={{marginBottom:"300px"}}><Slider1 image1={data.image1} image2={data.image2}/></div>
    </div>
<div style={{marginTop:"30px",marginRight:"200px"}} className='details'>
<h1>{data.title}</h1>
<h2>MRP ₹{data.price}</h2>
<p>Price inclusive of all taxes</p>

<h3>CHOOSE SIZE</h3>
<div className='button-group'>
  <button>XS</button>
  <button>S</button>
  <button>XL</button>
  <button>M</button>
 
  <button>Size Guide</button>
  
</div>
<div className='check'>
  <div>checkout</div>
  <div>Check delivery</div>
</div>
<div className='addtocart'>
{/* <button onClick={addtocart}>By this Product</button> */}

  <Wrap>
      
        <WrapItem className='addtocart' >
          <Button 
            onClick={() => {
              addtocart();
              toast({
                title: `Product Added`,
                status: "success",
                isClosable: true,
              })
            }}
          >
           Add to Cart
          </Button>
        </WrapItem>
      
    </Wrap>

<TfiHeart />
</div>

<p>{data.description}</p>
</div>


    </div>
  <div className='om1'>Recently Added</div>
   
  <div className='om' >
  
    
  <div>
    <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/536004/66/mod01/fnd/AUS/fmt/png/PUMA-x-PERKS-AND-MINI-Long-Sleeve-Knitted-Men's-Polo-Shirt" alt="" />
    <h3 className='om2'>Beach outfit</h3>
    <p>$300</p>

  </div>
  <div>
    <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/536004/66/mod01/fnd/AUS/fmt/png/PUMA-x-PERKS-AND-MINI-Long-Sleeve-Knitted-Men's-Polo-Shirt" alt="" />
    <h3 className='om2'>Beach Shirt</h3>
    <p>$400</p>

  </div>
  <div>
    <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/536004/66/mod01/fnd/AUS/fmt/png/PUMA-x-PERKS-AND-MINI-Long-Sleeve-Knitted-Men's-Polo-Shirt" alt="" />
    <h3 className='om2'>Beach Dress</h3>
    <p>$500</p>
    

  </div>
  </div>


 


    </div>
   
    
  )
}

export default SingleProductPage