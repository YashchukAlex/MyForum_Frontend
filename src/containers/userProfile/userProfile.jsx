import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Form, Col, Button, Modal } from 'react-bootstrap';

import ChangePassword from '../../containers/userProfile/changePassword';

import '../../content/basicForm.css';

class userProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      phoneNumber: '',
      shomModalPassword: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange = (event) => {
    const {target} = event;
    const value = target.value;
    const {name} = target;
    this.setState({
      [name]: value
    });
  };

  handleClose() {
    this.setState({ shomModalPassword: false });
  }

  handleShow() {
    this.setState({ shomModalPassword: true });
  }
  
  render() {
    const { user } = this.props;

    return (
      <Container>
        <h2>Profile</h2>
        <Form className="form">
        <Col>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={ user.data.Email }
              onChange={(e) => { this.handleChange(e) }}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="tel"
              name="phoneNumber"
              value={ user.data.PhoneNumber ? user.data.PhoneNumber : ''  }
              placeholder="3806710101001"
              onChange={(e) => { this.handleChange(e) }}
            />
          </Form.Group>
        </Col>
        <Button variant="link" onClick={this.handleShow}>change password</Button>
        <Modal show={this.state.shomModalPassword} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Change password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ChangePassword/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Button variant="primary" type="submit">Send</Button>
      </Form>
      </Container>
    );
  }
}

export default connect(({ user }) => ({ user }))(userProfile);
