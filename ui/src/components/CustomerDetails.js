import React, { Component } from 'react';
import axios from 'axios'
import Moment from 'react-moment';
import CustomerOrdersList from "./CustomerOrdersList";
import GoBackButton from "./GoBackButton";
import ActiveStatusIcon from "./ActiveStatusIcon";

class CustomerDetails extends Component {

    constructor() {
        super();
        this.state = {
            customer: {}
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/v1/customers/${this.props.match.params.customerId}`)
            .then(({ data: customer }) => {
                console.log('customer', customer);
                this.setState({ customer });
            });
    }

    render() {
        return (
            <div>
                <h2 style={{marginBottom: '10px'}}>Customer details</h2>
                <div className={'details-container'}>
                    <div>
                        <b>Id (remove):</b> {this.state.customer.id}
                    </div>
                    <div>
                        <b>Code:</b> {this.state.customer.code}
                    </div>
                    <div>
                        <b>Name:</b> {this.state.customer.name}
                    </div>
                    <div>
                        <b>Location:</b> {this.state.customer.location}
                    </div>
                    <div>
                        <b>Registration Date:</b> <Moment format="DD.MM.YYYY HH:mm:ss">{this.state.customer.registrationDate}</Moment>
                    </div>
                    <div>
                        <b>Active:</b> <ActiveStatusIcon isActive={this.state.customer.active}/>
                    </div>
                    <div>
                        <b>Type:</b> {this.state.customer.type} {this.state.customer.type === 'vip' ? <img className={'svg-icon'} src='../star.svg' alt='VIP icon'/> : ''}</div>
                    <div>
                        <b>Orders:</b> <CustomerOrdersList ordersList={this.state.customer.orders}/>
                    </div>
                    <div className={'go-back-button'}>
                        <GoBackButton/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomerDetails;