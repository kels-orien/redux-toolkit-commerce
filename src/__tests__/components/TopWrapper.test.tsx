import React from 'react'
import renderer from 'react-test-renderer'
import TopWrapper from '../../components/TopWrapper'

test('TopWrapper render correctly', () => {
    const tree = renderer.create(<TopWrapper/>).toJSON();

    expect(tree).toMatchSnapshot()

})