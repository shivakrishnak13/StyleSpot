import React, { useState } from 'react'


import Slider from 'react-slick';
// import Midsection from './Midsection';

 






function Slider1() {
  
  
  const data=[
    {
      image:"https://diesel.gumlet.io/product/410291797001/665/410291797005_2.jpg?compress=true&q=70",
      

    },
    {
      image:"https://diesel.gumlet.io/product/410291797001/665/410291797005_4.jpg?compress=true&q=70",
     
    },
    {
        image:"https://diesel.gumlet.io/product/410291797001/665/410291797005_4.jpg?compress=true&q=70",
       
      },
    
   
     
      
   
   
   
   
   
  ]

  
     
  
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive:[
      {
        
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <div className='slider'>
     
    <Slider {...settings}>
   
   {
    data.map((e,index)=>(
      <div style={{paddingBottom:"500px"}} key={index}>
<img width="60%" src={e.image}alt="" />
     </div>
    

     
    
    
     
     
    ))
    
   } 
   </Slider>
 
  

   

 


   
 
    </div>
  )
}





export default Slider1
