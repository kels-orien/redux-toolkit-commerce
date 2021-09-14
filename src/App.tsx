import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AppRoutes from './AppRoutes'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={AppRoutes} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
