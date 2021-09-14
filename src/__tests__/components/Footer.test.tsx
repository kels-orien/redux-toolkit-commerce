import React from 'react'
import renderer from 'react-test-renderer'
import Footer from '../../components/Footer'
import { BrowserRouter } from 'react-router-dom'

test('Footer render correctly', () => {
    const tree = renderer.create(<BrowserRouter><Footer/></BrowserRouter>).toJSON();

    expect(tree).toMatchSnapshot()

})