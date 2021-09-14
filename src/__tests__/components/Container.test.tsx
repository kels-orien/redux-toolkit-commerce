import React from 'react'
import renderer from 'react-test-renderer'
import Container from '../../components/Container'

test('Container render correctly', () => {
    const tree = renderer.create(<Container/>).toJSON();

    expect(tree).toMatchSnapshot()

})