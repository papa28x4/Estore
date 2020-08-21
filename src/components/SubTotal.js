import React, { Component } from 'react'

export default class SubTotal extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-6">Subtotal</div>
                <div className="col-sm-6">{`$${this.props.price}`}</div>
            </div >
        )
    }
}
