
export default function TotalPrice({total}){

    return (
        
        <div className="checkout-main" style={{border:"1px solid grey ",width:"30%",borderRadius:"9px",padding:"0.5rem"}}>
            <h3>Order Summery</h3>
            <div className="coupon" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} >
            <input className="coupoun-text" type="text" style={{width:"350px",borderRadius:"6px"}} />
            <button className="coupoun-button">Apply</button>
            </div>
            <div className="subtotal" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <p className="subtotal-text" >Sub Total</p>
                <h4 className="subtotal-value">${total}</h4>
            </div>
            <div className="discount" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <p className="discount-text">discount(50%)</p>
                <h4 className="discount-value">-$1999</h4>
            </div>
            <div className="delivery" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <p className="delivery-text">Delivery Fee</p>
                <h4 className="delivery-price">$1999</h4>
            </div>
            <div className="total" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <p className="total-text">Total</p>
                <h2 className="total-price">$1999</h2>
            </div>
            <div className="button"  >
                <button className="button-text" style={{backgroundColor:"black",color:"white",textAlign:"center"}}>Buy This Product</button>
            </div>
            

        </div>
    )
}