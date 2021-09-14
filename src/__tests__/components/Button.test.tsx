import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../../components/Button'

test('Button render correctly', () => {
    const tree = renderer.create(<Button/>).toJSON();

    expect(tree).toMatchSnapshot()

})