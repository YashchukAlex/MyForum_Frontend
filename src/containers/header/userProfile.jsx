import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button, DropdownButton, Dropdown, Spinner} from 'react-bootstrap';

import { getUserRequest } from '../../actions/user';
import { signOutRequest } from '../../actions/auth';
import './userProfile.css';

class UserProfile extends Component {
  componentDidMount(){
    this.props.getUserRequest();
  }
  
  render() {
    const { user } = this.props;

    return (
      user.loading ? <Spinner animation="border" variant="primary"/> :  
      user.loaded ?
        <DropdownButton title={user.data.Login} className="align-items-end" variant="info" size="lg">
          <Dropdown.Item href="profile">Profile</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={this.props.signOutRequest}>Sign out</Dropdown.Item>
        </DropdownButton> :
        <Fragment>
          <Button variant="outline-warning" size="sm" href="sign-up">sign up</Button>
          <Button variant="outline-success" size="sm" href="sign-in">sign in</Button>
        </Fragment>
    );
  }
}

export default connect(({ user }) => ({ user }), { getUserRequest, signOutRequest })(UserProfile);