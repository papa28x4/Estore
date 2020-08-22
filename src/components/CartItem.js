import React, { Component } from 'react';
import { FaTrashAlt } from 'react-icons/fa'; 
import {connect} from 'react-redux';
import { removeFromCart, updateCart } from '../reduxStore/action';

class CartItem extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    
    changeHandler=(event)=>{
        const {updateCart, item} = this.props
        updateCart(item.productId, +event.target.value)
    }


    deleteHandler=(productId)=>{
        this.props.removeFromCart(productId)
    }
    
    render() {
        
        const {item, store} = this.props;
        const product = store.find(product => product.productId === item.productId)
        
        return (
             <div className="cart-item item">
                <li><p><img src={product.url} alt="thumbnail"/><span className="product-name">{product.productName}</span></p></li>
                <li><p className="amount">$<span>{product.price}</span></p></li>
                <li><p className="qty"><input id="qty" type="number" min="1" value={item.qty} onChange={this.changeHandler}/><button className="removebtn buyTicket" onClick={()=>this.deleteHandler(product.productId)}><FaTrashAlt size={20} /></button></p></li>
             </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        removeFromCart: productId=>dispatch(removeFromCart(productId)),
        updateCart: (productId, qty) => dispatch(updateCart(productId, qty))
        
    }
}

export default connect(null, mapDispatchToProps)(CartItem)
