 const Addtocart_action=(state,qty)=>(dispatch)=>{
    dispatch({
        type:"ADD_TO_CART",
        payload:{
            ...state,qty
        },
    })
}

const IncreasequantityAction = (payload) =>{
    console.log(payload)
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