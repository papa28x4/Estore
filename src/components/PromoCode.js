import React, { Component } from 'react';
import { Button, Collapse, Card} from 'react-bootstrap';

class PromoCode extends Component {
    constructor(props){
        super(props);
        console.log(props)
        this.state ={
            open: false,
            promoCode: ''
        }
    }
    changeHandler=(event)=>{
        this.setState({
            [event.target.id]: event.target.value
        },()=>{
            console.log(this.state.promoCode)
        })
    }
    applyDiscount=(event)=>{
        event.preventDefault()
        this.props.applyDiscount(this.state.promoCode)
    }
    render() {
        return (
            <div>
                <Button
                    className="promo-code-button item-details-button"
                    bsstyle="link"
                    onClick={()=>{this.setState({open:!this.state.open})}}
                >
                    {this.state.open === false ? 'Apply ': 'Hide '}
                    promo code
                    {this.state.open === false ? ' +': ' -'}
                </Button>
                <Collapse in={this.state.open}>
                    <div id="promo">
                        <Card style={{border: '0'}}>
                        <form>
                            <div className="form-group">
                                <input className="form-control" id="promoCode" type="text" placeholder="Enter a Promo Code" onChange={this.changeHandler} />
                            </div>
                            
                            <button type="submit" className="btn btn-success btn-block" disabled={this.props.disabled} onClick={this.applyDiscount}>Apply</button>
                        </form>
                        </Card>
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default PromoCode
