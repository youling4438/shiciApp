import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import configureStore from 'store'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Routes from 'routes'
import Reducers from 'reducers'
import Sagas from 'sagas'
import 'styles/global-styles'
import registerServiceWorker from 'utils/registerServiceWorker'

const sagaMiddleware = createSagaMiddleware(Sagas)
render(
  <Provider store={createStore(Reducers,
    applyMiddleware(sagaMiddleware))}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
