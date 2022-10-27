import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <Container className={styles.errorCard} xs={3}>
      <Row className="text-center">
        <Col lg="2">
          <Image
            style={{ maxWidth: "150px" }}
            src="https://images.pexels.com/photos/355935/pexels-photo-355935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Error page"
            roundedCircle
          />
        </Col>
        <Col md="auto" className={styles.centerContent}>
          <p>
            <span style={{ fontSize: "1.5rem" }}>Opps!</span> It looks like the
            page you are looking for does not exists.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
