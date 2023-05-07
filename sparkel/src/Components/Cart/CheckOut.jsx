import react, { useEffect, useState } from "react";
import { DecreasequantityAction,IncreasequantityAction,DeleteitemAction } from "../../Redux/Cart/action";
import { useDispatch, useSelector } from "react-redux";
import TotalPrice from "./TotalPrice";

export default function CheckOut(){
  const data = useSelector((state) => state.Products);
   console.log(data)
  const dispatch = useDispatch()
  const [total,setTotal]=useState(0)
  useEffect(()=>{
    const totalprice=data.reduce((acc,ele)=>{
      return acc+ele.cost*ele.qty
    },0);
    setTotal(totalprice)

  },[data])

  // const actprice=data.reduce((acc,ele)=>{
  //      return acc+ele.cost*ele.qty
  // },0)


  const send = (id) => {
    dispatch(IncreasequantityAction(id));
    

  };

  //remove one
  const remove = (id) => {
    dispatch(DecreasequantityAction(id));
  };

  //delete element
  const dlt = (id) => {
    dispatch(DeleteitemAction(id));
   // history("/checkout");

    // console.log(id);
  };
  


  
  
    return (
      
      <div style={{display:"flex" ,border:"solid  grey 1 px",gap:"20px"}} >
        <div className="cart-main" style={{border:"solid  grey 1 px",width:"70%"}} >
          
            <div className="titles">
            <h3 className="product-image">Product</h3>
                <h3 className="product-title">Product</h3>
                <h3 className="price">Price</h3>
                <h3 className="quantity">Quantity</h3>
                <h3 className="total">Total</h3>

            </div>
            
              
            <div cart-items>
            {data.map((el,id)=>(
              <div className="cart-item">
          <div className="cart-image" >
              <img src={el.image_url} alt="el.name" style={{width:"70px",height:"70px",borderRadius:"12px"}} />
          </div>
          <div className="cart-productname">
            {/* name here */}<h3>{el.name}</h3>
          </div>
          <div className="cart-price">
            {/* price here */}<h3>{el.cost}</h3>
          </div>
          <div className="cart-quantity">
             <span className="dec-button" onClick={()=>remove(id)}>-</span>
             <span>
              {el.qty}
             </span>
             <span className="inc-button" onClick={()=>send(id)}>+</span>

          </div>
          <div className="cart-total">
            {/* Total here */}<h3>{total}</h3>
          </div>
          </div>
            
        ) )}

        </div>
        
        </div>
        <TotalPrice total={total}/>
        </div>
            
            
             
     );
    };

