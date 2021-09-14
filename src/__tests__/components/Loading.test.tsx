import React from 'react'
import { mount } from 'enzyme'
import Loading from '../../components/Loading'



test('Loading renders correctly', () => {
    const wrapper = mount(<Loading />)

    expect(wrapper).toMatchSnapshot()

})