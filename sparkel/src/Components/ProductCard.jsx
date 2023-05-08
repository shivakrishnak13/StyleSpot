import styled from "styled-components"


export default function ProductCard({image,title,price}){







    //returning product cards for product list
return (
    <DIV>
<img src={image} alt="failed" />
<h2>{title}</h2>
<h3>₹{price}</h3>
<button>ADD TO CART</button>
    </DIV>
)

};


const DIV=styled.div`

img{
   width :100% ;
   margin: auto;
   border-radius: 20px;
}
h3{
  color: orange;
}
/* h2{
    text-align: center;
} */
button{
    color: white;
    background-color: black;
    display: block;
}
`