import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import GoBackButton from "./GoBackButton";
import DiscountPrice from "./DiscountPrice";
import PriceFormat from "./PriceFormat";

class OrderDetails extends Component {

    constructor() {
        super();
        this.state = {
            order: {}
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/v1/orders/${this.props.match.params.orderId}`)
            .then(({ data: order }) => {
                console.log('order', order);
                this.setState({ order });
            });
    }

    render() {
        return (
            <div>
                <GoBackButton/>
                {/*Order details {JSON.stringify(this.state)}*/}
                <div>
                    <h2 style={{marginBottom: '10px'}}>Order details</h2>
                    <div className={'details-container'}>
                        <div>
                            <b>Id:</b> {this.state.order.id}
                        </div>
                        <div>
                            <b>Order Date:</b> <Moment format="DD.MM.YYYY HH:mm:ss">{this.state.order.orderDate}</Moment>
                        </div>
                        <div>
                            <b>Confirmation Date:</b> <Moment format="DD.MM.YYYY HH:mm:ss">{this.state.order.confirmationDate}</Moment>
                        </div>
                        <div>
                            <b>Completion Date:</b> <Moment format="DD.MM.YYYY HH:mm:ss">{this.state.order.completionDate}</Moment>
                        </div>
                        <div>
                            <b>Product:</b> {this.state.order.product}
                        </div>
                        <div>
                            <b>Original price:</b> <PriceFormat price={this.state.order.originalPrice}/>
                        </div>
                        <div>
                            <b>Discount price:</b> <DiscountPrice fullPrice={this.state.order.originalPrice}/>
                        </div>

                        <div>
                            <b>Order:</b> {this.state.order.order}</div>
                        <div>
                            <b>Customer:</b> {this.state.order.customer}
                        </div>
                        <div className={'go-back-button'}>
                            <GoBackButton/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default OrderDetails;