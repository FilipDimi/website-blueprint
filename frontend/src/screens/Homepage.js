import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./HomePage.module.css";
import { motion } from "framer-motion";

import CustomButton from "../components/CustomButton";
import IconsContainer from "../components/IconsContainer";
import { jumbotronImgUrl } from "../common/companySpecific";

const Homepage = () => {
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
      <IconsContainer />
    </React.Fragment>
  );
};

export default Homepage;
