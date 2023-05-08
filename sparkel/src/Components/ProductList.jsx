import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";
import styled from 'styled-components'

export default function ProducList(){
//store all the products here
let [Prods,setProd]=useState([  {
   "title": "Ethnic Motifs Embroidered Sequined Kurta with Palazzos & Dupatta","category": "Kurtas",
   "price": 557,"brand": "Khushal K",
   "image": "https://assets.ajio.com/medias/sys_master/root/20230217/JiPq/63efa070aeb26924e37781c9/-473Wx593H-420323583-navy-MODEL4.jpg",
   "rating": "4",
   "image1": "https://assets.ajio.com/medias/sys_master/root/20230217/c4IN/63efa863aeb26924e377a830/-473Wx593H-420323583-navy-MODEL.jpg",
   "image2": "https://assets.ajio.com/medias/sys_master/root/20230217/lRdZ/63efb294f997dde6f4aeb8cb/-473Wx593H-420323583-navy-MODEL2.jpg",
   "gender": "women","discount": 30,
   "offer_price": 334,"id": 1
 },
 {
   "title": "Leaf Print Flared Kurta","category": "Kurtas",
   "price": 2299,"brand": "KIMAYRA",
   "image": "https://assets.ajio.com/medias/sys_master/root/20221212/z7gf/63976868aeb269659ce47368/-473Wx593H-465425434-pink-MODEL2.jpg",
   "rating": "3",
   "image1": "https://assets.ajio.com/medias/sys_master/root/20221212/Ygku/63976868aeb269659ce4736b/-473Wx593H-465425434-pink-MODEL4.jpg",
   "image2": "https://assets.ajio.com/medias/sys_master/root/20221212/TNVS/63976868aeb269659ce47378/-473Wx593H-465425434-pink-MODEL6.jpg",
   "gender": "women","discount": 30,
   "offer_price": 1540, "id": 2
 },
 {
   "title": "Men Embroidered Long Kurta","category": "Kurta",
   "price": "1300","brand": "MAX",
   "image": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000012398852-Black-BLACK-1000012398852_01-2100.jpg",
   "rating": "4",
   "image1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000012398852-Black-BLACK-1000012398852_02-2100.jpg",
   "image2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000012398852-Black-BLACK-1000012398852_04-2100.jpg",
   "gender": "Male","discount": "15",
   "offer_price": "1000", "id": 3
 },
 {
   "title": "Women Printed Short Sleeves Shirt","category": "Shirt",
   "price": "800", "brand": "Lifestyle",
   "image": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010715851-White-WHITE-1000010715851-5012022_01-2100.jpg",
   "rating": "3","image1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010715851-White-WHITE-1000010715851-5012022_02-2100.jpg",
   "image2": "https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010715851-White-WHITE-1000010715851-5012022_03-2100.jpg",
   "gender": "women","discount": "25",
   "offer_price": "600", "id": 4
 }, {
   "title": "Women Solid Crop Denim Shirt",
   "category": "Shirt",
   "price": "1100",
   "brand": "Levis",
   "image": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011711113-Blue-MIDBLUE-1000011711113_01-2100.jpg",
   "rating": "4",
   "image1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011711113-Blue-MIDBLUE-1000011711113_02-2100.jpg",
   "image2": "https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011711113-Blue-MIDBLUE-1000011711113_07-2100.jpg",
   "gender": "women",
   "discount": "10",
   "offer_price": "990",
   "id": 5
 },
 {
   "title": "Men Striped Slim Fit Casual Shirt",
   "category": "Shirt",
   "price": "1200",
   "brand": "Zara",
   "image": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011057969-Green-GREEN-1000011057969-07042022_01-2100.jpg",
   "rating": "4",
   "image1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011057969-Green-GREEN-1000011057969-07042022_02-2100.jpg",
   "image2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011057969-Green-GREEN-1000011057969-07042022_03-2100.jpg",
   "gender": "Male",
   "discount": "10",
   "offer_price": "1080",
   "id": 6
 }]);

useEffect(()=>{
//getting all the products from the api on mount phase
},[])


   return ( <DIV>
             {/* Map through all the products and send the details through props to ProductCard */}
            {Prods.map((ele)=>(
               <ProductCard image={ele.image} title={ele.title} price={ele.price} />
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