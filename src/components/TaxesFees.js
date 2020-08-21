import React, { Component } from 'react'

class TaxesFees extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-6">VAT:</div>
                <div className="col-sm-6">{`$${this.props.taxes}`}</div>
            </div>
        )
    }
}

export default TaxesFees
