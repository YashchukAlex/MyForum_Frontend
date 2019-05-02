import React, {Component,Fragment} from 'react';
import {Navbar,Nav,Image} from "react-bootstrap";

import logo from '../../content/logo.svg';
import Profile from '../../containers/header/userProfile.jsx';
import AdminPanel from '../../containers/header/adminPanel.jsx';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="home">
            <Image
              src={logo}
              style={{height:50}}
            />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="features">Features</Nav.Link>
            <Nav.Link href="pricing">Pricing</Nav.Link>
          </Nav>
          <AdminPanel/>
          <Profile/>
        </Navbar>
      </Fragment>
    );
  }
}

export default Header;