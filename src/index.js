import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './clients/Routes';
import configureStore from '@engine/store'

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
)
