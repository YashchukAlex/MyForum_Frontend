import React, { Fragment } from 'react';

import Header from './components/header/header';

import './app.css';

const App  = ({children}) => (
  <Fragment>
    <Header/>
    <div className="body">
      {children}
    </div>
  </Fragment>
);

export default App;