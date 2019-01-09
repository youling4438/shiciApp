import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import configureStore from 'store'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Routes from './routes'
import Reducers from './reducers'
import rootSaga from './sagas'
import './styles/global-styles'
import registerServiceWorker from './utils/registerServiceWorker'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  Reducers,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)
// function renderDom() {
  render(
    <Provider store={store}>
      <Routes />
    </Provider>,
    document.getElementById('root')
  )
// }
registerServiceWorker()
// renderDom()
// store.subscribe(renderDom)
