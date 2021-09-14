import React from 'react'
import Home from '../../home'
import { BrowserRouter } from 'react-router-dom'
import {
    render,
    screen,
    within,
    fireEvent,
    RenderResult,
  } from '@testing-library/react';
import { Provider } from 'react-redux'
import { store } from '../../app/store'

const renderApp = (): RenderResult => 
render (
    <Provider store= { store }>
        <BrowserRouter>
        <Home/>
        </BrowserRouter>   
    </Provider>,
)
test('fetches and displays all products', async () => {
    const { asFragment, getByText } = renderApp()
    expect(asFragment()).toMatchSnapshot()
  
    // should show no user initially, and not be fetching a user
    //expect(getByTestId('data-values')).toHaveLength(20)
    const data = {title: 'Mens', contents: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday'}
    
    const falseData = {
    title: 'Favorite Footware',
    contents: 'Flipflops are the best',
  }

  expect(await screen.findByText(data.title)).toBeInTheDocument()
  expect(screen.queryByText(falseData.title)).not.toBeInTheDocument()
})