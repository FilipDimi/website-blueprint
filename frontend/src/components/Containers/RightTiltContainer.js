import React from "react";
import { Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

import styles from "./RightTiltContainer.module.css";

const RightTiltContainer = (props) => {
  return (
    <motion.div
      initial={{ x: -700, y: -100, scale: 0.5, opacity: 0.5 }}
      animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container className={styles.diagonalBox} fluid>
        <Row className={styles.centerVertically}>{props.children}</Row>
      </Container>
    </motion.div>
  );
};

export default RightTiltContainer;
