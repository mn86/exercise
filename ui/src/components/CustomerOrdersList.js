import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CustomerOrdersList extends Component {
    render() {
        return (
            <div className={'orders-list'}>
                <ul>{this.props.ordersList ? this.props.ordersList.map((value, index) => {
                    return <li key={index}><Link to={'/order/' + value}>Order {value}</Link></li>
                }) : ''}</ul>
            </div>
        );
    }
}

export default CustomerOrdersList;