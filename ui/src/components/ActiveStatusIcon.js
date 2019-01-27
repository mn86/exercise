import React, { Component } from 'react';

class ActiveStatusIcon extends Component {

    render() {
        return (
            <span>
                <img className={'svg-icon'} src={this.props.isActive?'../check.svg':'../x.svg'} alt={this.props.isActive?'Active':'Not active'}/>
            </span>
        );
    }
}

export default ActiveStatusIcon;