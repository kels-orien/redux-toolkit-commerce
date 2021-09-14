import React from 'react'
import { mount } from 'enzyme'
import Navbar from '../../../components/Nav/Navbar'

test('Navbar render correctly', () => {
    const wrapper = mount(<Navbar/>)

    expect(wrapper).toMatchSnapshot()

})