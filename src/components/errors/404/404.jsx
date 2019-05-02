import React, { Component, Fragment } from 'react';
import { Image } from 'react-bootstrap';

import NotFoundImage from '../../../content/404.png';

import "./404.css";

class NotFound extends Component {
  render() {
    return (
      <Fragment>
        <Image src={NotFoundImage} className="content"/>
      </Fragment>
    );
  }
}

export default NotFound;