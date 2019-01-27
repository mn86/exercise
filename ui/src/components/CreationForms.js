import React, { Component } from 'react';
import CustomerForm from "./CustomerForm";
import OrderForm from "./OrderForm";

class CreationForms extends Component {

    render() {
        return (
            <div className={'creation-forms'}>
                <div>
                    <h3>Customer creation form</h3>
                    <CustomerForm/>
                </div>
                <div>
                    <h3>Order creation form</h3>
                    <OrderForm/>
                </div>
            </div>
        );
    }
}

export default CreationForms;