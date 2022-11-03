import React, { useState } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import CustomButton from "../UI/CustomButton";
import styles from "./FactsContainer.module.css";
import { companyFacts } from "../../common/companySpecific";

const FactsContainer = () => {
  const [fact, setFact] = useState(companyFacts[0]);
  return (
    <Container className={styles.container}>
      <Row>
        <Col lg={8}>
          <h3>{fact.title}</h3>
          <p>{fact.desc}</p>
        </Col>
        <Col xs={12} md={12} lg={4}>
          <Stack gap={2}>
            <CustomButton
              onClick={() => setFact(companyFacts[0])}
              text="What We Believe In"
            />
            <CustomButton
              onClick={() => setFact(companyFacts[1])}
              text="Our Moto is"
            />
            <CustomButton
              onClick={() => setFact(companyFacts[2])}
              text="What We Love"
            />
            <CustomButton
              onClick={() => setFact(companyFacts[3])}
              text="What We Do"
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default FactsContainer;
