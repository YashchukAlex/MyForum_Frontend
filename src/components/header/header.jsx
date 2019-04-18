import React, {Component,Fragment} from 'react';
import {Navbar,Nav,Image} from "react-bootstrap";

import logo from '../../../content/logo.svg';
import ButtonUserName from '../../../containers/header/userInfo';

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
          <Nav.Item className="align-content-end">
            <ButtonUserName/>
          </Nav.Item>
        </Navbar>
      </Fragment>
    );
  }
}

export default Header;