import styled from "styled-components";
import Navbar from "../Components/Navbar";
import ProducList from "../Components/ProductList";
import { useEffect, useState} from "react";



export default function Product(){
let [image,setImage]=useState('https://assets.ajio.com/cms/AJIO/WEB/07052023-UHP-D-Top-P1-BullmerGulmoharJaipur-Min65Extraupto30dd.jpg');

const slider=['https://assets.ajio.com/cms/AJIO/WEB/07052023-UHP-D-Top-P1-BullmerGulmoharJaipur-Min65Extraupto30dd.jpg',
'https://assets.ajio.com/cms/AJIO/WEB/07052023-UHP-D-Top-P7-Lifestyle-Upto60.jpg',
'https://assets.ajio.com/cms/AJIO/WEB/07052023-UHP-D-Top-P4-LevisPepejeans-3050.jpg'];
let a=1
useEffect(()=>{
    setInterval(()=>{
        if(a===3){
         a=0;   
        }    
      setImage(slider[a]);    
        a++;
        },2000)
},[])


    return (
        <DIV>
        <Navbar/>
        <div className="Add">
           <img src={image} alt="" />
        </div>

        <div className="Filter">
            <select>
                <option value="">All</option>
                <option value="Male">Men</option>
                <option value="women">Women</option>
            </select>
        </div>
    <ProducList/>
    <div className="Page"><button>Previous</button>
    <button disabled>1</button>
     <button>Next</button>
     </div>
        </DIV>
    )
}


const DIV=styled.div`
.Page{
margin: auto;
margin-top:5px;
width: 9%;
}
.Page button{
        background-color: grey;   
        margin-left: 2%;
        border-radius: 5px;
        border: 1px solid black;
 }
.Add{
width: 90%;
margin: auto;
}
`