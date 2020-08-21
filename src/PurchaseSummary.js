import React, { Component } from 'react';
import SubTotal from './components/SubTotal';
import PickupSavings from './components/PickupSavings';
import TaxesFees from './components/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal';
import ItemDetails from './components/ItemDetails';
import PromoCode from './components/PromoCode';
import {connect} from 'react-redux'
import { applyDiscount, calcEstTotal } from './reduxStore/action';

class PurchaseSummary extends Component {
  constructor(props){
    super(props)
    console.log('purchase', props)
    this.state={
      
    }
  }

  componentDidMount(){
    this.props.calcEstTotal()
  }
  render() {
    // console.log(this.props.figures)
    const {disabled, subtotal, pickupSavings, taxes, estimatedTotal} = this.props.figures;
    const { cart, items } = this.props;
    
    return (
     <div className="container my-3">
      <h2>Purchase Summary</h2>
      <div className="purchase-card m-auto">
        <SubTotal price={subtotal.toFixed(2)} />
        <PickupSavings price={pickupSavings.toFixed(2)} />
        <TaxesFees taxes={taxes.toFixed(2)}/>
        <hr />
        <EstimatedTotal estTotal={estimatedTotal.toFixed(2)} />
        <ItemDetails cart={cart} items={items} price={estimatedTotal.toFixed(2)} />
        <hr/>
        <PromoCode disabled={disabled} applyDiscount={this.props.applyDiscount}/>
      </div>
    </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    figures: state.figures,
    cart: state.cart,
    items: state.items
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    calcEstTotal: ()=>{dispatch(calcEstTotal())},
    applyDiscount: (value)=>{dispatch(applyDiscount(value))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseSummary)

