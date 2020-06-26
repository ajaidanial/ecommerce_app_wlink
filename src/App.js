import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { Routes } from 'routes'
import React from 'react'

import 'styles/main.scss'

import configureStore, { history } from './appRedux/store'

export const store = configureStore()

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
)

export default App
