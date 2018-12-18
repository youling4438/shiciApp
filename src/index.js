import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import configureStore from 'store'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Routes from 'routes'
import Reducers from 'reducers'
import shici from './sagas/shici'
import 'styles/global-styles'
import registerServiceWorker from 'utils/registerServiceWorker'

const sagaMiddleware = createSagaMiddleware(shici)
const store = createStore(
  Reducers,
  applyMiddleware(sagaMiddleware)
)
render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
