import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom';

import UserApp from "./components/userApp/userApp";
import UserHome from "./components/userApp/home/home";
import UserLogin from "./components/userApp/signIn/signIn";

class Routes extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path='/' render={()=><UserApp><UserHome/></UserApp>}/>
        <Route path='/home' render={()=><UserApp><UserHome/></UserApp>}/>
        <Route path='/login' component={UserLogin}/>
      </Fragment>
    );
  }
}

export default Routes;