import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import MainNavigationBox from '../../../components/MainNavigationBox'




test('MainNavigationBox render correctly', () => {
    
    const wrapper = mount(<BrowserRouter><MainNavigationBox key="1" links={[
        {
          id : 1,
          label: "Electronics",
          to: "/products/category/electronics"
        },
        {
          id : 2,
          label: "Jewelry",
          to: "/products/category/jewelery"
        },
        {
          id: 3,
          label: "Men's Clothing",
          to: "/products/category/men's clothing"
        },
        
        {
          id: 4,
          label: "Women's Clothing",
          to: "/products/category/women's clothing"
      }]} /></BrowserRouter>)

    expect(wrapper).toMatchSnapshot()

})