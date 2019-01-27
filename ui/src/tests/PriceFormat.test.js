import React from 'react';
import { shallow } from 'enzyme';
import PriceFormat from "../components/PriceFormat";

let originalPricesArray = [0, 100, 989.01, 980.1, 7899.99, 45750, 1218999.05, 32112318000];
let expectedPricesArray = ["0", "100", "989,01", "980,1", "7.899,99", "45.750", "1.218.999,05", "32.112.318.000"];


for (let i = 0; i < originalPricesArray.length; i++) {
    let originalPrice = originalPricesArray[i];
    it('Price formatting for ' + originalPrice, () => {
        const wrapper = shallow(<PriceFormat price={originalPrice} />);
        expect(wrapper.html()).toEqual("<span>" + expectedPricesArray[i] + "</span>");
    });
}