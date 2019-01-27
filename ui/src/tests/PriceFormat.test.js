import React from 'react';
import { shallow } from 'enzyme';
import PriceFormat from "../components/PriceFormat";

let originalPricesArray = [0, 0.99, 989.01, 980, 4899.02, 4750, 18999.05, 18000];
let expectedPricesArray = ["0", "0,99", "989,01", "980", "4.899,02", "4.750", "18.999,05", "18.000"];


for (let i = 0; i < originalPricesArray.length; i++) {
    let originalPrice = originalPricesArray[i];
    it('Price formatter is correct for ' + originalPrice, () => {
        const wrapper = shallow(<PriceFormat price={originalPrice} />);
        expect(wrapper.html()).toEqual("<span>" + expectedPricesArray[i] + "</span>");
    });
}