import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TestimonialCard from "./TestimonialCard";

import styles from "./TestimonialGroup.module.css";

const TestimonialGroup = () => {
  return (
    <Container className={styles.container}>
      <Row>
        <Col lg={3} md={4} sm={6} xs={6} className="mb-3">
          <TestimonialCard
            title="Nice Place to Study"
            desc="For instance, the top of the page shares short and concise tweets from customers; as you scroll you will then see a customer service rating, a series of case studies, and then a video customer testimonial."
            src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
            alt="Martin"
            user="Martin"
          />
        </Col>
        <Col lg={3} md={4} sm={6} xs={6} className="mb-3">
          <TestimonialCard
            title="Tasty Donuts test"
            desc="For instance, the top of the page shares short and concise tweets from customers; as you scroll you will then see a customer service rating, a series of case studies, and then a video customer testimonial."
            src="https://cdn-icons-png.flaticon.com/512/4140/4140047.png"
            alt="Nina"
            user="Nina"
          />
        </Col>
        <Col lg={3} md={4} sm={6} xs={6} className="mb-3">
          <TestimonialCard
            title="Best Espresso in Town"
            desc="For instance, the top of the page shares short and concise tweets from customers; as you scroll you will then see a customer service rating, a series of case studies, and then a video customer testimonial."
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Filip"
            user="Filip"
          />
        </Col>
        <Col lg={3} md={4} sm={6} xs={6} className="mb-3">
          <TestimonialCard
            title="Amazing Macchiato"
            desc="For instance, the top of the page shares short and concise tweets from customers; as you scroll you will then see a customer service rating, a series of case studies, and then a video customer testimonial."
            src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
            alt="Robert"
            user="Robert"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default TestimonialGroup;
