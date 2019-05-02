import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Col, Button } from 'react-bootstrap';

import { changePassword } from '../../actions/user';

import '../../content/basicForm.css';

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'currentPassword': '',
      'newPassword': '',
      'confirmPassword': ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const {target} = event;
    const value = target.value;
    const {name} = target;
    this.setState({
      [name]: value
    });
  };

  submitForm(e) {
    e.preventDefault();
    this.props.changePassword({
      currentPassword: this.state.currentPassword,
      newPassword: this.state.newPassword,
      confirmPassword: this.state.confirmPassword
    });
  }

  render() {
    const { currentPassword, newPassword, confirmPassword } = this.state;
    return (
        <Form className="form" onSubmit={(e) => this.submitForm(e)}>
          <Col>
            <Form.Group>
              <Form.Label>Current password</Form.Label>
              <Form.Control
                type="password"
                name="currentPassword"
                placeholder="******"
                value={ currentPassword }
                onChange={(e) => {this.handleChange(e);}}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>New password</Form.Label>
              <Form.Control
                type="password"
                name="newPassword"
                placeholder="******"
                value={ newPassword }
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="******"
                value={ confirmPassword }
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>
          </Col>
          <Button variant="primary" type="submit">Send</Button>
        </Form>
    );
  }
}

export default connect(({ user }) => ({ user }), { changePassword })(ChangePassword);
