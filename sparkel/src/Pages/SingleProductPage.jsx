import React from 'react'
import "../CSS/singleProd.css"

import { TfiHeart} from "react-icons/tfi";

import Slider1 from '../Components/Slider1';
function SingleProductPage() {

  let data=
  {
    
    "title": "1956-SP STRAIGHT FIT WOMAN BLUE MEDIUM WASHED JEANS",
    "image": ["https://diesel.gumlet.io/product/410291797001/665/410291797005_1.jpg?compress=true&q=70",
    "https://diesel.gumlet.io/product/410291797001/665/410291797005_2.jpg?compress=true&q=70",
  "https://diesel.gumlet.io/product/410291797001/665/410291797005_4.jpg?compress=true&q=70"],
    "description": "Regular style with a high waist and straight leg. Channeling a rock-n-roll vibe, its authentic influences include a straight-cut leg and button fly. It's crafted from inside-out fabric and features side bands along the length of the leg.",
    "color": "blue",
    "price": 22399,
    "category": "jeans",
    "gender":"woman",
    "id": "1"
   
   }


  return (
  <div>
    <div className='main'>
    
      
    <div className='picture'>
<img  src={data.image} alt="" />
  <div style={{marginBottom:"300px"}}><Slider1/></div>
    </div>
<div className='details'>
<h1>{data.title}</h1>
<h2>MRP ₹{data.price}</h2>
<p>Price inclusive of all taxes</p>
<h3>COLOR: {data.color.toUpperCase()}</h3>
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
  <button>By this Product</button>
<TfiHeart />
</div>
<h3>DESCRIPTION</h3>
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