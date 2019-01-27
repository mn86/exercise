import React, { Component } from 'react';
import CustomerForm from "./CustomerForm";
import OrderForm from "./OrderForm";
import GoBackButton from "./GoBackButton";

class CreationForms extends Component {

    render() {
        return (
            <div>
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
                <GoBackButton/>
            </div>
        );
    }
}

export default CreationForms;