import React, { Fragment } from 'react';

import Footer from './footer/footer';
import Header from './header/header';

const UserApp  = ({children}) => (
  <Fragment>
    <Header/>
    {children}
    <Footer/>
  </Fragment>
);

export default UserApp;

