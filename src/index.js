import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import axios from 'axios';

import store from './store';
import Routes from './routes';
import App from './app'
import './index.css';
import {TOKEN_NAME} from './constants/auth';

(function() {
  let token = !localStorage.getItem(TOKEN_NAME) || null;
  if (token) {
      axios.defaults.headers.common['Authorization'] = token;
  } else {
      axios.defaults.headers.common['Authorization'] = null;
  }
})();

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Routes/>
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
