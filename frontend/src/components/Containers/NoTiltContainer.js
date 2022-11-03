import React from "react";
import { Container, Row } from "react-bootstrap";
import MotionDiv from "./MotionDiv";

import styles from "./NoTiltContainer.module.css";

const NoTiltContainer = (props) => {
  return (
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
      <Container className={styles.diagonalBox} fluid>
        <Row className={styles.centerVertically}>{props.children}</Row>
      </Container>
    </MotionDiv>
  );
};

export default NoTiltContainer;
