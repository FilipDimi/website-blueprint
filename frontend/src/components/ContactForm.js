import React from "react";
import { Form, Row, Col, FloatingLabel } from "react-bootstrap";
import styles from "./ContactForm.module.css"

import CustomButton from "./CustomButton";

const ContactForm = () => {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="first_nameInput">
          <Form.Label>First Name</Form.Label>
          <Form.Control className={styles.customInput} type="text" placeholder="First Name" style={{borderRadius: 0}}></Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="last_nameInput">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" style={{borderRadius: 0}}></Form.Control>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="emailInput">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" style={{borderRadius: 0}}></Form.Control>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group controlId="emailInput">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Subject" style={{borderRadius: 0}}></Form.Control>
        </Form.Group>
      </Row>
      <FloatingLabel className="mb-3" controlId="messageInput" label="Message">
        <Form.Control
          as="textarea"
          placeholder="Message"
          style={{ height: 100, borderRadius: 0 }}
        />
      </FloatingLabel>

      <div className="d-grid">
        <CustomButton text="Send Us a Message" />
      </div>
    </Form>
  );
};

export default ContactForm;
