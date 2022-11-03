import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./TestimonialCard.module.css";

const TestimonialCard = (props) => {
  const { title, desc, src, alt, user } = props

  return (
    <Container className={styles.container}>
      <Row>
        <h5>{title}</h5>
        <p className={styles.justText}>
            {desc}
        </p>
      </Row>
      <Row>
        <Col lg={3}>
          <Image
            src={src}
            alt={alt}
            className={styles.image}
          />
        </Col>
        <Col lg={9} className="mt-3">
          <p className={styles.italicText}>- {user}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default TestimonialCard;
