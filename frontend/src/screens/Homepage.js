import React, { useState } from "react";
import { Container, Row, Col, Image, Stack } from "react-bootstrap";
import styles from "./HomePage.module.css";
import { motion } from "framer-motion";

import CustomButton from "../components/CustomButton";
import MotionDiv from "../components/MotionDiv";
import LeftTiltContainer from "../components/LeftTiltContainer";
import { jumbotronImgUrl, companyFacts } from "../common/companySpecific";

const Homepage = () => {
  const [fact, setFact] = useState(companyFacts[0]);

  return (
    <React.Fragment>
      <Container className="p-4">
        <Row>
          <Col xs={12} md={8} className={styles.hvcenter}>
            <motion.div
              initial={{ x: -300, scale: 0.5 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Container className={`text-center`} style={{ width: "80%" }}>
                <h1>Welcome to Nerdroc</h1>
                <h4>Moto moto moto moto</h4>
                <p className={styles.justText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <CustomButton text="See Our Menu" />
              </Container>
            </motion.div>
          </Col>
          <Col xs={6} md={4} className={styles.center}>
            <motion.div
              initial={{ x: 300, scale: 0.5 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={jumbotronImgUrl}
                alt="nerdroc"
                style={{ width: "100%" }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
      <LeftTiltContainer />
      <LeftTiltContainer />
      <MotionDiv
        xy="y"
        initCoord={200}
        initScale={0.5}
        initOpacity={1}
        animateCoord={0}
        animateScale={1}
        animateOpacity={1}
        transition={1}
      >
        <Container
          style={{
            backgroundColor: "#F8F9FA",
            height: 300,
            marginTop: 100,
            marginBottom: 100,
            padding: 30,
          }}
        >
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
      </MotionDiv>
    </React.Fragment>
  );
};

export default Homepage;
