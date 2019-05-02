import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import UserHome from "./components/userApp/home/home";
import SingIn from "./components/signIn/signIn";
import SignUp from "./components/signUp/signUp";
import UserProfile from './components/userProfile/userProfile';
import NotFound from "./components/errors/404/404.jsx";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={UserHome}/>
        <Route path="/home" component={UserHome}/>
        <Route path="/sign-in" component={SingIn}/>
        <Route path="/sign-up" component={SignUp}/>
        <Route path="/profile" component={UserProfile}/>
        <Route component={NotFound}/>
      </Switch>
    );
  }
}

export default Routes;