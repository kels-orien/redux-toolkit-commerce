import React from 'react'
import renderer from 'react-test-renderer'
import Wrapper from '../../components/Wrapper'

test('Wrapper render correctly', () => {
    const tree = renderer.create(<Wrapper/>).toJSON();

    expect(tree).toMatchSnapshot()

})