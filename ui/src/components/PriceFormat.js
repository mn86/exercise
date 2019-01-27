import React, { Component } from 'react';
import Intl from 'intl';
import 'intl/locale-data/jsonp/de-DE';

class PriceFormat extends Component {

    render() {
        const formatter = Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 0
        });
        return (
            <span>
                {formatter.format(this.props.price).slice(0, -2)}
            </span>
        );
    }
}

export default PriceFormat;