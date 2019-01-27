import React from 'react';
import { shallow } from 'enzyme';
import DiscountPrice from "../components/DiscountPrice";

let originalPricesArray = [0, 1, 999, 1000, 4999, 5000, 19999, 20000];
let discountPricesArray = [0, 0.99, 989.01, 980, 4899.02, 4750, 18999.05, 18000];


for (let i = 0; i < originalPricesArray.length; i++) {
    let originalPrice = originalPricesArray[i];
    it('Discount calculates right for ' + originalPrice, () => {
        const wrapper = shallow(<DiscountPrice fullPrice={originalPrice} />);
        expect(wrapper.html()).toEqual("<span><span>" + discountPricesArray[i].toLocaleString("de") + "</span></span>");
    });
}