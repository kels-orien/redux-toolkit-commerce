import React from 'react'
import renderer from 'react-test-renderer'
import CardWrapper from '../../components/CardWrapper'

test('CardWrapper render correctly', () => {
    const tree = renderer.create(<CardWrapper/>).toJSON();

    expect(tree).toMatchSnapshot()

})