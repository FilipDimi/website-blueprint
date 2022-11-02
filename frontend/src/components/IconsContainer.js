import React from "react";
import { Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

import styles from "./IconsContainer.module.css";

const IconsContainer = (props) => {
  return (
    <motion.div
      initial={{ y: 300, scale: 0.5, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container className={styles.diagonalBox} fluid>
        <Row className={styles.centerVertically}>{props.children}</Row>
      </Container>
    </motion.div>
  );
};

export default IconsContainer;
