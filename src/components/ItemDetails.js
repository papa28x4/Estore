import React, { Component } from 'react';
import {Button, Collapse, Card, Media, Row, Col} from 'react-bootstrap';
import '../css/itemDetails.css';

export default class ItemDetails extends Component {
    constructor(props){
        super(props);
        console.log('props', props);
        this.state = {
            open: false
        };
    }

    renderDetails=event=>{
        console.log(this.props.cart)
        const { cart, items } = this.props;
       
        let details = cart.map(buy => {
            let item = items.find(item => item.productId === buy.productId)
            return (
                <Card key={buy.productId} className="bg-grey mb-3">
                    <Media>
                            <img style={{width:100, height:100}} src={item.url} alt="coffee"/>
                            <Media.Body className="ml-2">
                               {buy.description}
                                <Row className="show-grid mt-2">
                                    <Col sm={6}>
                                        <strong>{`$${item.price}`}</strong>
                                        <br />
                                        <strong className="price-strike">{`$${item.altPrice}`}</strong>
                                    </Col>
                                    <Col sm={6}>
                                        <b>Qty:</b> {buy.qty}
                                    </Col>
                                </Row>
                            </Media.Body>
                    </Media>
                </Card>
            )
        }) 
        return details;
    }
    render() {
        return (
           <div>
               <Button 
                className="item-details-button"
                bsstyle="link"
                onClick={()=>this.setState({open: !this.state.open})}
               >
                {this.state.open === false ? 'See' : 'Hide'} item details
                {this.state.open === false ? ' +' : ' -'}
               </Button>
               <Collapse in={this.state.open}>
                <div>
                    {this.renderDetails()}
                </div>
               </Collapse>
           </div>
        )
    }
}
