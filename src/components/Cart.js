import React, { Component } from 'react';
import CartItem from './CartItem';
import {connect} from 'react-redux';
import {calcSubTotal, calcEstTotal} from '../reduxStore/action';
import {Link} from 'react-router-dom';

export class Cart extends Component {

    componentDidUpdate(prevProps, prevState){
        if(prevProps.cart !== this.props.cart){
            this.props.calcSubTotal() 
        }
    }
    
    render() {
        const {cart, store} = this.props;
        return (
           <section className="cart my-5">
                <h2>CART</h2>

                <div id="cart-grid">
                    <div className="cart-item cart-header">
                        <li><p>Item</p></li>
                        <li><p>Price</p></li>
                        <li><p>Quantity</p></li>
                    </div>
                
                    {cart.map(item => <CartItem key={item.productId} item={item} store={store} />)}
                    
                </div>

                <div id="summation">
                    <p>Total<span id="currency">$</span>{this.props.subtotal}<span id="figure"></span></p>
                </div>
                
                <Link to="/purchase-summary"><button disabled={!cart.length > 0}className="purchase buyTicket">purchase</button></Link>
            </section>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        calcSubTotal: ()=>dispatch(calcSubTotal()),
        calcEstTotal: ()=>{dispatch(calcEstTotal())},
    }
}

export default connect(null, mapDispatchToProps)(Cart)
