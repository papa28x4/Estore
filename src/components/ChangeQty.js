import React, { Component } from 'react';
import {connect} from 'react-redux';
import { updateCart } from '../reduxStore/action';

export class ChangeQty extends Component {
    
    
    render() {

        const {item, cart} = this.props
        const cartItem = cart.find(cartItem => cartItem.productId === item.productId)
       
        const decrementCount=()=>{
            const qty = cartItem.qty - 1;
            if(qty >= 1){
                this.props.updateCart(item.productId, qty)
            }
           
        }
        const incrementCount=()=>{
            const qty = cartItem.qty + 1
            this.props.updateCart(item.productId, qty)
        }
        return (
            <div className="change-qty">
                <button onClick={decrementCount} type="button">-</button><span>{cartItem && cartItem.qty}</span><button onClick={incrementCount} type="button">+</button>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        updateCart: (productId, qty) => dispatch(updateCart(productId, qty))
    }
}

export default connect(null, mapDispatchToProps)(ChangeQty)
