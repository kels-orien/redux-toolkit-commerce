import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store as reduxStore } from './app/store'






function render (
    ui: any,
    {
        preloadedState,
        store = reduxStore,
        ...renderOptions
    } = {}
) {
    function Wrapper ({ children}: any) {
        return <Provider store = { reduxStore }>{children}</Provider>
    }
    return rtlRender(ui, {wrapper:Wrapper, ...renderOptions}) 

}


//re-export everything
export * from '@testing-library/react'

//Override render method

export { render }
