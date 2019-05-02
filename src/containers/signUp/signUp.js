import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Form, Col, Button } from 'react-bootstrap';

import { signUpRequest } from '../../actions/auth';

import '../../content/basicForm.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'login': props.user.data.Login,
      'email': props.user.data.Email,
      'password': '',
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
    this.props.signUpRequest({
      login: this.state.login,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    });
  }

  render() {
    const { login, email, password, confirmPassword } = this.state;
    return (
      <Container className="container">
      <h2>Sign Up</h2>
      <Form className="form" onSubmit={(e) => this.submitForm(e)}>
        <Col>
          <Form.Group>
            <Form.Label>Login (min 4 length)</Form.Label>
            <Form.Control
              type="text"
              name="login"
              placeholder="user"
              value={ login }
              onChange={(e) => { this.handleChange(e) }}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={ email }
              onChange={(e) => { this.handleChange(e) }}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Password (min 6 length, require: number and lower case)</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="******"
              value={ password }
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
    </Container>
    );
  }
}

export default connect(({ auth }) => ({ auth }), { signUpRequest })(SignUp);