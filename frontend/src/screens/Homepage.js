import React, { useState } from "react";
import { Container, Row, Col, Image, Stack } from "react-bootstrap";
import styles from "./HomePage.module.css";
import { motion } from "framer-motion";

import CustomButton from "../components/UI/CustomButton";
import MotionDiv from "../components/Containers/MotionDiv";
import RightTiltContainer from "../components/Containers/RightTiltContainer";
import LeftTiltContainer from "../components/Containers/LeftTiltContainer";
import { jumbotronImgUrl, companyFacts } from "../common/companySpecific";

const Homepage = () => {
  const [fact, setFact] = useState(companyFacts[0]);

  return (
    <React.Fragment>
      <Container className="p-4">
        <Row>
          <Col xs={12} md={8} className={styles.hvcenter}>
            <motion.div
              initial={{ x: -300, scale: 1, opacity: 0 }}
              animate={{ x: 0, scale: 1, opacity: 1 }}
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
              initial={{ x: 300, scale: 1, opacity: 0 }}
              animate={{ x: 0, scale: 1, opacity: 1 }}
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
      <RightTiltContainer />
      <RightTiltContainer />
      <MotionDiv
        xy="y"
        initCoord={200}
        initScale={1}
        initOpacity={0.5}
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
      <Container>
        <h2 className="text-center mb-3">From Our Customers</h2>
        <Row>
          <Col lg={3} md={4} sm={6} xs={6}>
            <Container
              style={{ backgroundColor: "#F8F9FA", minHeight: 250 }}
              className="py-3 px-4 mb-3"
            >
              <Row>
                <h5>Best coffee in town</h5>
                <p className={styles.justText}>
                  For instance, the top of the page shares short and concise
                  tweets from customers; as you scroll you will then see a
                  customer service rating, a series of case studies, and then a
                  video customer testimonial.
                </p>
              </Row>
              <Row>
                <Col lg={3}>
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/4140/4140047.png"
                    alt="testimonials"
                    width="100%"
                  />
                </Col>
                <Col lg={9} className="mt-3">
                  <p>Filip Dimitrievski</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col lg={3} md={4} sm={6} xs={6}>
            <Container
              style={{ backgroundColor: "#F8F9FA", minHeight: 250 }}
              className="py-3 px-4"
            >
              <Row>
                <h5>Best coffee in town</h5>
                <p className={styles.justText}>
                  For instance, the top of the page shares short and concise
                  tweets from customers; as you scroll you will then see a
                  customer service rating, a series of case studies, and then a
                  video customer testimonial.
                </p>
              </Row>
              <Row>
                <Col lg={3}>
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="testimonials"
                    width="100%"
                  />
                </Col>
                <Col lg={9} className="mt-3">
                  <p>Filip Dimitrievski</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col lg={3} md={4} sm={6} xs={6}>
            <Container
              style={{ backgroundColor: "#F8F9FA", minHeight: 250 }}
              className="py-3 px-4"
            >
              <Row>
                <h5>Best coffee in town</h5>
                <p className={styles.justText}>
                  For instance, the top of the page shares short and concise
                  tweets from customers; as you scroll you will then see a
                  customer service rating, a series of case studies, and then a
                  video customer testimonial.
                </p>
              </Row>
              <Row>
                <Col lg={3}>
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                    alt="testimonials"
                    width="100%"
                  />
                </Col>
                <Col lg={9} className="mt-3">
                  <p style={{ fontStyle: "italic", color: "grey" }}>
                    - Filip Dimitrievski
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col lg={3} md={4} sm={6} xs={6}>
            <Container
              style={{ backgroundColor: "#F8F9FA", minHeight: 250 }}
              className="py-3 px-4"
            >
              <Row>
                <h5>Best coffee in town</h5>
                <p className={styles.justText}>
                  For instance, the top of the page shares short and concise
                  tweets from customers; as you scroll you will then see a
                  customer service rating, a series of case studies, and then a
                  video customer testimonial.
                </p>
              </Row>
              <Row>
                <Col lg={3}>
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                    alt="testimonials"
                    width="100%"
                  />
                </Col>
                <Col lg={9} className="mt-3">
                  <p>Filip Dimitrievski</p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <LeftTiltContainer />
      <LeftTiltContainer />
    </React.Fragment>
  );
};

export default Homepage;
