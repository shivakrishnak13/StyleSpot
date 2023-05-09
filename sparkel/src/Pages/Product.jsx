import styled from "styled-components";
import Navbar from "../Components/Navbar";
import ProducList from "../Components/ProductList";
import { useEffect, useState} from "react";
import Footer from "../Components/Footer";
import { genderFilter } from "../Redux/ProductReducer/reducerActions";
import { useDispatch } from "react-redux";


export default function Product(){
let [image,setImage]=useState('https://assets.ajio.com/cms/AJIO/WEB/07052023-UHP-D-Top-P1-BullmerGulmoharJaipur-Min65Extraupto30dd.jpg');
let [page,setPage]=useState(1); 
let [gen,setGen]=useState('')
const slider=['https://assets.ajio.com/cms/AJIO/WEB/07052023-UHP-D-Top-P1-BullmerGulmoharJaipur-Min65Extraupto30dd.jpg',
'https://assets.ajio.com/cms/AJIO/WEB/07052023-UHP-D-Top-P7-Lifestyle-Upto60.jpg',
'https://assets.ajio.com/cms/AJIO/WEB/07052023-UHP-D-Top-P4-LevisPepejeans-3050.jpg'];
// let a=1
// useEffect(()=>{
//     setInterval(()=>{
//         if(a===3){
//          a=0;   
//         }    
//       setImage(slider[a]);    
//         a++;
//         },2000)
// },[])

function nextPaginate(){
setPage(page+1);
}

function prevPaginate(){
    setPage(page-1);
}

function Gen(e){
setGen(e.target.value);
}

    return (
        <DIV>
       
        <div className="Add">
           <img src={image} alt="" />
        </div>

        <div className="Filter">
            <select value={gen} onChange={Gen}>
                <option value="">All</option>
                <option value="Male">Men</option>
                <option value="women">Women</option>
            </select>
        </div>
    <ProducList page={page} gen={gen}/>
    <div className="Page"><button disabled={page===1?true:false} onClick={prevPaginate}>Previous</button>
    <h3>{page}</h3>
     <button onClick={nextPaginate}>Next</button>
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
        
        margin-left: 2%;
        border-radius: 5px;
        border: 1px solid black;
 }
 .Page h3{
    display: inline;
 }
.Add{
width: 90%;
margin: auto;
}
.Filter{
    width: 80%;
    margin: auto;
}
`