import style from "../../CSS/cart.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
export default function TotalPrice({total}){
    const [amount,setAmount]=useState(0);
    const [coupoun,setCoupoun]=useState("")
    const navigate=useNavigate()

    const applyCoupoun=()=>{
        if(coupoun==="masai30"){
        //    event.preventDefault()
           const coupounprice=total*30/100;
           setAmount(coupounprice);
        }
       // setCoupoun("");
    }

    const handleChange = (e) =>{
        setCoupoun(e.target.value);
    }
    const handleClick=()=>{
      
        navigate("/payment")
      
    }

    return (
        
        <div className="checkout-main" style={{border:"1px solid grey ",width:"30%",borderRadius:"9px",padding:"0.5rem",height:"350px"}}>
            <h3 className={style.ordertag} >Order Summery</h3>
            <div className={style.coupon} style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} >
            <input className={style.coupoun_text} type="text" style={{width:"330px",borderRadius:"6px",border:"1px solid grey"}}  onChange={handleChange}  />
            <button className={style.coupounbtn} onClick={applyCoupoun}>Apply</button>
            </div>
            <div className={style.subtotal} style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <p className="subtotal-text" style={{color:"grey"}} >Sub Total</p>
                <h4 className="subtotal-value">${total}</h4>
            </div>
            <div className={style.discount} style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <p className="discount-text" style={{color:"grey"}}>discount(50%)</p>
                <h4 className="discount-value">${amount}</h4>
            </div>
            <div className={style.delivery} style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <p className="delivery-text" style={{color:"grey"}}>Delivery Fee</p>
                <h4 className="delivery-price">$199</h4>
            </div>
            <div className={style.total} style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <p className="total-text">Total</p>
                <h2 className="total-price">${amount?amount+199:0}</h2>
            </div>
            <div className={style.button}  >
                <button className={style.button_text} onClick={handleClick} >Buy This Product</button>
            </div>
            
        </div>
    )
}