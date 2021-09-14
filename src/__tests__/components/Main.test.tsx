import React from 'react'
import renderer from 'react-test-renderer'
import Main from '../../components/Main'

test('Main render correctly', () => {
    const tree = renderer.create(<Main/>).toJSON();

    expect(tree).toMatchSnapshot()

})