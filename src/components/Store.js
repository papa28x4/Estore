import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../css/store.css';
import Item from './Item';
import Cart from './Cart';


class Store extends Component {
    render() {
        // console.log(this.props)
        return (
            <>
                <section className="music" >
                    <h2 className="section-header">MUSIC</h2>
                    <div className="music-grid">
                    {this.props.items.map(item => <Item key={item.productId} item={item} cart={this.props.cart} />)}
                    </div>
                </section>
                <Cart cart={this.props.cart} store={this.props.items} subtotal={this.props.subtotal.toFixed(2)} />
            </>
        )
    }
}

const mapStateToProps=state=>{
    return{
        items: state.items,
        cart: state.cart,
        subtotal: state.figures.subtotal
    }
}

export default connect(mapStateToProps)(Store)


