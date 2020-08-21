import React, { Component } from 'react'
const styles = {
    pickupSavings:{
        textDecoration: 'underline'
    },
    totalSavings: {
        color: 'red',
        fontweight: 800
    }
}
class PickupSavings extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-6">

               
{/* <a href="/#" data-toggle="tooltip" title="Some tooltip text!">Hover over me</a> */}


{/* <div class="tooltip bs-tooltip-top" role="tooltip">
  <div class="arrow"></div>
  <div class="tooltip-inner">
  Picking up your order in the store helps cut costs, and we pass the savings to you
  </div>
</div>
                    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Picking up your order in the store helps cut costs, and we pass the savings to you">
                         Tooltip on right
                    </button> */}
                    <div style={styles.pickupSavings}>PickupSavings</div>
                </div>
                <div style={styles.totalSavings} className="col-sm-6">
                    {`$${this.props.price}`}
                </div>
            </div>
        )
    }
}

export default PickupSavings
