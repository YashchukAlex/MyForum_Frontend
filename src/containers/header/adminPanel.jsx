import React, { Component, Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const checkEnableControl = (roles) => {
    return roles !== null ? (roles.includes('Super admin', 'Admin')) : false;
}

class AdminPanel extends Component {

  render() {
    const { user } = this.props;
    const enableContol = user.loaded ? checkEnableControl(user.data.Roles) : false;

    return (
      <Fragment>
        {enableContol && (
          <Button variant="outline-danger" className="align-items-start" href="admin">
            Go to admin interface
          </Button>
        )}
      </Fragment>
    );
  }
}

export default connect(({ user }) => ({ user }))(AdminPanel);