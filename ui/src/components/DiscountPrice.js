import React, { Component } from 'react';
import PriceFormat from "./PriceFormat";


class DiscountPrice extends Component {

    calculateDiscountPrice(fullPrice) {
        let discountPercent = 0;
        switch (true) {
            case (fullPrice < 1000):
                discountPercent = 1;
                break;
            case (fullPrice < 5000):
                discountPercent = 2;
                break;
            case (fullPrice < 20000):
                discountPercent = 5;
                break;
            default:
                discountPercent = 10;
                break;
        }
        return (fullPrice - (fullPrice * discountPercent / 100)).toFixed(2).replace(/\.0*$/g,''); // replace with regexp to hide 0 decimal places, e.g. 123.00 will be shown as 123
    }

    render() {
        return (
            <span>
                <PriceFormat price={this.calculateDiscountPrice(this.props.fullPrice)}/>
            </span>
        );
    }
}

export default DiscountPrice;