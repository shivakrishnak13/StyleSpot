import axios from 'axios'
import { useState } from 'react';

export default function Post(){
   let [post,setPost]=useState({
    title: "",
    category: "",
    price: 0,
    brand: "",
    image: "",
    rating: "",
    image1: "",
    image2: "",
    gender: "",
    discount: 0,
    offer_price: 0,
   })

let Change=(e)=>{
let ri=e.target.name;
setPost({...post,[ri]:e.target.value});


}
console.log(post);
function request(){
    axios.post('https://dapper-precious-sedum.glitch.me/products',post).then((res)=>{
console.log(res);
    }).catch((err)=>{console.log(err)});
    setPost({
        title: "",
        category: "",
        price: 0,
        brand: "",
        image: "",
        rating: "",
        image1: "",
        image2: "",
        gender: "",
        discount: 0,
        offer_price: 0,
       })
}

function del(){
axios.delete('https://dapper-precious-sedum.glitch.me/products/5');
console.log('done');
}

   return <div>
<h1>Post Data</h1>

        <input name="title"
        value={post.title}
        onChange={Change}
        placeholder="title"
         type="text" />
        <input name="category"
        value={post.category}
        onChange={Change}
        placeholder="category"
         type="text" />
        <input name="price"
        value={post.price}
        onChange={Change}
        placeholder="price"
          type="number" />
        <input name="brand"
        value={post.brand}
        onChange={Change}
        placeholder="brand"
          type="text" />
        <input  name="image"
        value={post.image}
        onChange={Change}
        placeholder="image"
         type="text" />
        <input  name="rating"
        value={post.rating}
        onChange={Change}
        placeholder="rating"
         type="text" />
        <input name="image1"
        value={post.image1}
        onChange={Change}
        placeholder="image1"
          type="text" />
        <input name="image2"
        value={post.image2}
        onChange={Change}
        placeholder="image2"
          type="text" />
        <input name="gender"
        value={post.gender}
        onChange={Change}
        placeholder="gender"
          type="text" />
        <input name="discount"
        value={post.discount}
        onChange={Change}
        placeholder="discount"
          type="number" />
        <input name="offer_price"
        value={post.offer_price}
        onChange={Change}
        placeholder="Offer"
          type="number" />
          <button onClick={request}>Post</button><br />
          <button onClick={del}>delete</button>
    </div>
} 