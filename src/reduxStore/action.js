const APPLY_DISCOUNT = 'APPLY_DISCOUNT';
const CALC_EST_TOTAL = 'CALC_EST_TOTAL';
const ADD_TO_CART = 'ADD_TO_CART';
const UPDATE_CART = 'UPDATE_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CALC_SUB_TOTAL = 'CALC_SUB_TOTAL';



export const calcSubTotal=()=>{
    return{
        type: CALC_SUB_TOTAL,
    }
}

export const applyDiscount=(value)=>{
    return{
        type: APPLY_DISCOUNT,
        payload: value
    }
}

export const calcEstTotal=()=>{
    return{
        type: CALC_EST_TOTAL,
        
    }
}
export const addToCart=(productId)=>{
    return{
        type: ADD_TO_CART,
        payload: productId
    }
}

export const removeFromCart=(productId)=>{
    return{
        type: REMOVE_FROM_CART,
        payload: productId
    }
}

export const updateCart=(productId, qty)=>{
    return{
        type: UPDATE_CART,
        payload: {productId, qty}
    }
}

