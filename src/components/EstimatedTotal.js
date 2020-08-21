import React, { Component } from 'react'

class EstimatedTotal extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-6"><h2>Est. Total</h2></div>
                <div className="col-sm-6"><h2>{`$${this.props.estTotal}`}</h2></div>
            </div>
        )
    }
}

export default EstimatedTotal
