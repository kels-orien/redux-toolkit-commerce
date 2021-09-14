import React from 'react'
import renderer from 'react-test-renderer'
import Skeleton from '../../components/Skeleton'

test('Skeleton render correctly', () => {
    const tree = renderer.create(<Skeleton/>).toJSON();

    expect(tree).toMatchSnapshot()

})