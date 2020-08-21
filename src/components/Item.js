import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../reduxStore/action';
import ChangeQty from './ChangeQty';


export class Item extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    addToCart=(id)=>{
      this.props.addToCart(id)
    }
    
    render() {
        const {item, cart} = this.props;
        const isAdded = this.props.cart.find(product => product.productId === item.productId)
        console.log(isAdded)
        return (
           <div>
                <li><p>{item.productName}</p></li>
                <li><img src={item.url} alt="album1" /></li>
                <li className="price">
                    <span>{`$${item.price}`}</span>
                    {!isAdded? <button type="button" onClick={()=>{this.addToCart(item.productId)}} className="addToCart buyTicket">ADD TO CART</button> :
                    <ChangeQty item={item} cart={cart}/> }
                </li>
                
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        cart: state.cart
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Item)
