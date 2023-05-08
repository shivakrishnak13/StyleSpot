import react, { useEffect, useState } from "react";
import { DecreasequantityAction,IncreasequantityAction,DeleteitemAction } from "../../Redux/Cart/action";
import { useDispatch, useSelector } from "react-redux";
import TotalPrice from "./TotalPrice";
import style from "../../CSS/cart.module.css"


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
      
      <div style={{display:"flex" ,border:"solid  grey 1 px",gap:"20px",padding:"20px"}} >
        {/* <div className={style.cart_main} style={{border:"solid  grey 1 px",width:"70%"}} >
          
            <div className={style.titles}>
            <h3 className="product-image"></h3>
                <h3 className="product-title">Product</h3>
                <h3 className="price">Price</h3>
                <h3 className="quantity">Quantity</h3>
                <h3 className="total">Total</h3>

            </div> */}
            
              
            {/* <div className={style.cart_items}>
            {data.map((el,id)=>(
              <div className="cart-item">
          <div className="cart-image" >
              <img src={el.image_url} alt="el.name" style={{width:"70px",height:"70px",borderRadius:"12px"}} />
          </div>
          <div className={style.cart_productname}>
            <h3 >{el.name}</h3>
          </div>
          <div className={style.cart_price}>
            <h3>{el.cost}</h3>
          </div>
          <div className={style.cart_quantity}>
             <span className={style.decspan}  onClick={()=>remove(id)}>-</span>
             <span className={style.quantitydisplay}>
              {el.qty}
             </span>
             <span className={style.incspan}  onClick={()=>send(id)}>+</span>

          </div>
          <div className="cart-total">
            <h3>{el.qty*el.cost}</h3>
          </div>
          </div>
            
        ) )}

        </div> */}

        
        {/* </div> */}
        <div style={{width:"70%"}}>
        <table style={{width:"100%"}} >
          
          <tr  className={style.tr1} >
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {data.map((el,id)=>(
          <tr className={style.tr2}  >
            
            <td><img src={el.image_url} alt="el.name" style={{width:"70px",height:"70px",borderRadius:"12px"}} /></td>
            <td><h3 >{el.name}</h3>
              <button className={style.rmvbtn} onClick={()=>dlt(id)} >remove</button>
            </td>
            <td><h3>{el.cost}</h3></td>
            <td className={style.qunt} > <span className={style.decspan}  onClick={()=>remove(id)}>-</span>
             <span className={style.quantitydisplay}>
              {el.qty}
             </span>
             <span className={style.incspan}  onClick={()=>send(id)}>+</span></td>
             <td><h3>{el.qty*el.cost}</h3></td>
          </tr>

          ))}
        </table>
        
        </div>

        <TotalPrice total={total}/>
        </div>
            
            
             
     );
    };

