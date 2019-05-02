import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Form, Col, Button } from 'react-bootstrap';
import { singInRequest } from '../../actions/auth';

import '../../content/basicForm.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'userName': '',
      'password': ''
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
    this.props.singInRequest({
      grant_type: 'password',
      username: this.state.userName,
      password: this.state.password
    });
  }

  render() {
    const { userName, password } = this.state;
    return (
      <Container className="container">
        <h2>Sign In</h2>
        <Form className="form" onSubmit={(e) => this.submitForm(e)}>
          <Col>
            <Form.Group>
              <Form.Label>User name</Form.Label>
              <Form.Control
                type="text"
                name="userName"
                placeholder="user"
                value={userName}
                onChange={(e) => {this.handleChange(e);}}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="******"
                value={password}
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
export default connect(({ auth }) => ({ auth }), { singInRequest })(SignIn);
