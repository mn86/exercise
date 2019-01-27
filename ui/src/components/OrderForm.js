import React, { Component } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';

class OrderForm extends Component {

    constructor() {
        super();
        this.state = {
            order: undefined,
            serverError: undefined
        }
    }

    handleSubmit = (values, actions) => {
        this.setState({order: undefined, serverError: undefined});
        axios.post(`http://localhost:8080/v1/orders/`, values)
            .then(({ data: order }) => {
                this.setState({ order });
            })
            .catch((error) => {
            this.setState({serverError: true})
        })
    };

    render() {
        return(
            <div className={'creation-form'}>
                <Formik
                    initialValues={{
                        orderDate: '',
                        confirmationDate: '',
                        completionDate: '',
                        product: '',
                        originalPrice: '',
                        order: 'ordered',
                        customer: {
                            id: ''
                        }
                    }}
                    onSubmit = { this.handleSubmit }
                    render = { formProps => {
                        return(
                            <Form>
                                <div className={'form-fields order-form-fields'}>
                                    <label htmlFor="orderDate">Order date:</label>
                                    <Field name="orderDate" />

                                    <label htmlFor="confirmationDate">Confirmation date:</label>
                                    <Field name="confirmationDate" />

                                    <label htmlFor="completionDate">Completion date:</label>
                                    <Field name="completionDate" />

                                    <label htmlFor="product">Product:</label>
                                    <Field name="product"/>

                                    <label htmlFor="originalPrice">Original price:</label>
                                    <Field name="originalPrice"/>

                                    <label htmlFor="order">Order:</label>
                                    <Field component="select" name="order">
                                        <option value="ordered">Ordered</option>
                                        <option value="confirmed">Confirmed</option>
                                        <option value="in_progress">In progress</option>
                                        <option value="delivered">Delivered</option>
                                    </Field>

                                    <label htmlFor="customer.id">Customer id:</label>
                                    <Field name="customer.id" />
                                </div>

                                <button type="submit">Submit</button>
                            </Form>
                        );
                    }}
                />
                <div style={{display: this.state.order ? 'initial' : 'none'}}>Order id {this.state.order} was successfully created.</div>
                <div style={{display: this.state.serverError ? 'initial' : 'none'}}>Error creating order</div>
            </div>
            );
    }
}

export default OrderForm;