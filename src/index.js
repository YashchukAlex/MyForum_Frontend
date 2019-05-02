import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import store from './store';
import Routes from './routes';
import App from './app'
import './index.css';
import { TOKEN_NAME } from './constants/auth';

(function() {
  let token = localStorage.getItem(TOKEN_NAME) ? localStorage.getItem(TOKEN_NAME) : null;
  axios.defaults.headers.common['Authorization'] = token ? `bearer ${token}` : null;
})();

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Routes/>
      </App>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
