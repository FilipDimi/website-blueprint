import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./HomePage.module.css";
import { motion } from "framer-motion";

import CustomButton from "../components/UI/CustomButton";
import MotionDiv from "../components/Containers/MotionDiv";
import RightTiltContainer from "../components/Containers/RightTiltContainer";
import LeftTiltContainer from "../components/Containers/LeftTiltContainer";
import { jumbotronImgUrl } from "../common/companySpecific";
import TestimonialGroup from "../components/BigContainers/TestimonialGroup";
import FactsContainer from "../components/BigContainers/FactsContainer";

const Homepage = () => {

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
        <FactsContainer />
      </MotionDiv>
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
        <Container>
          <h2 className="text-center mb-3">Testimonials</h2>
          <Row>
            <TestimonialGroup />
          </Row>
        </Container>
      </MotionDiv>
      <LeftTiltContainer />
      <LeftTiltContainer />
    </React.Fragment>
  );
};

export default Homepage;
