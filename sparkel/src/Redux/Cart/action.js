let Addtocart_action=(state,price,qty,dispatch)=>{
    dispatch({
        type:"ADD_TO_CART",
        payload:{
            state,
            Actual_price:price,
            qty
        },
    })
}

const IncreasequantityAction = (payload) =>{
    
    return{
        type:"INCREASE_QUANTITY", //then we call these fun in reducers
        payload
    }
}

const DecreasequantityAction = (payload) =>{
    
    return{
        type:"DECREASE_QUANTITY", //then we call these fun in reducers
        payload
    }
}

const DeleteitemAction = (payload) =>{
    return{
        type:"RMV_CART", //then we call these fun in reducers
        payload
    }
}
export { IncreasequantityAction,DecreasequantityAction, Addtocart_action , DeleteitemAction };