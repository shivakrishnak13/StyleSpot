
import CheckOut from "../Components/Cart/CheckOut";
import style from "../CSS/cart.module.css"


export default function Cart(){
    return (
        <div>
            <h1 className={style.ordersummery}>Your Shopping Cart</h1>
            <CheckOut/>
        </div>
    )
}