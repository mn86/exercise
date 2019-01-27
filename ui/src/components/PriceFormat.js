import React, { Component } from 'react';

class PriceFormat extends Component {

    render() {
        return (
            <span>
                {(+this.props.price).toLocaleString('de', { minimumFractionDigits: 0 })}
            </span>
        );
    }
}

export default PriceFormat;