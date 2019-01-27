import React, { Component } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';

class CustomerForm extends Component {

    constructor() {
        super();
        this.state = {
            customer: undefined,
            serverError: undefined
        }
    }

    handleSubmit = (values, actions) => {
        this.setState({customer: undefined, serverError: undefined});
        axios.post(`http://localhost:8080/v1/customers/`, values)
            .then(({ data: customer }) => {
                this.setState({ customer });
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
                        code: '',
                        name: '',
                        location: '',
                        active: false,
                        type: 'minor'
                    }}
                    onSubmit = { this.handleSubmit }
                    render = { formProps => {
                        return(
                            <Form>
                                <div className={'form-fields customer-form-fields'}>
                                    <label htmlFor="code">Code:</label>
                                    <Field name="code" />

                                    <label htmlFor="name">Name:</label>
                                    <Field name="name" />

                                    <label htmlFor="location">Location:</label>
                                    <Field name="location" />

                                    <label htmlFor="active">Active:</label>
                                    <Field component="input" type="checkbox" name="active" style={{position: 'relative', top: '4px'}}/>

                                    <label htmlFor="type">Type:</label>
                                    <Field component="select" name="type">
                                        <option value="poor">Poor</option>
                                        <option value="minor">Minor</option>
                                        <option value="major">Major</option>
                                        <option value="vip">VIP</option>
                                    </Field>
                                </div>

                                <button type="submit">Submit</button>
                            </Form>
                        );
                    }}
                />
                <div style={{display: this.state.customer ? 'initial' : 'none'}}>Customer id {this.state.customer} was successfully created.</div>
                <div style={{display: this.state.serverError ? 'initial' : 'none'}}>Error creating customer</div>
            </div>
            );
    }
}

export default CustomerForm;