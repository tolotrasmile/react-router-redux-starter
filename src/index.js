import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './assets/reset.css'
import './assets/index.css'
import registerServiceWorker from './registerServiceWorker'
import App from './containners/App'
import store from './store'

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
registerServiceWorker()
