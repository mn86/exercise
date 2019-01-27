import React, { Component } from 'react';
import axios from 'axios';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import ActiveStatusIcon from "./ActiveStatusIcon";

class CustomersList extends Component {

    constructor () {
        super();

        this.state = {
            tableData: [{
                id: '',
                name: '',
                code: '',
                type: '',
                ordersCount: '',
                active: ''
            }],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/v1/customers/')
            .then(({ data: customers }) => {
                console.log('customers', customers);
                this.setState({ tableData: customers });
            });
    }

    render() {
        const tableColumns = [{
            Header: 'Name',
            accessor: 'name'
        }, {
            Header: 'Code',
            accessor: 'code',
        }, {
            Header: 'Type',
            accessor: "type"
        }, {
            Header: 'Orders',
            accessor: 'ordersCount'
        }, {
            Header: 'Active',
            accessor: 'active',
            Cell: props => <ActiveStatusIcon isActive={props.value}/>
        }];
        return (
            <div>
                <div>Customers list</div>
                <ReactTable
                    data={this.state.tableData}
                    columns={tableColumns}
                    defaultPageSize={10}
                    noDataText='No customers data, please add some using h2 console or /test page'
                    getTdProps={(state, rowInfo, column, instance) => {
                        if (rowInfo) {
                            return {
                                onClick: () => {
                                    this.props.history.push('/customer/' + rowInfo.original.id);
                                }
                            }
                        } else {
                            return {};
                        }
                    }}
                />
            </div>
        );
    }
}

export default CustomersList;