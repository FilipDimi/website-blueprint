import React, { useState } from "react";
import { Container, Stack, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import styles from "./AboutPage.module.css";

import TeamCardGroup from "../components/BigContainers/TeamCardGroup";
import CustomCarousel from "../components/UI/CustomCarousel";
import NoTiltContainer from "../components/Containers/NoTiltContainer";
import MotionDiv from "../components/Containers/MotionDiv";

const AboutPage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <React.Fragment>
      <Container className="my-5">
        <MotionDiv
          xy="y"
          initCoord={-200}
          initScale={1}
          initOpacity={0}
          animateCoord={0}
          animateScale={1}
          animateOpacity={1}
          transition={1}
        >
          <Container className={styles.coloredContainerBg}>
            <Stack gap={2}>
              <h2 className="text-center">About Us</h2>
              <Row className="mb-2">
                <Col className={styles.justfText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Col>
                <Col className={styles.justfText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Col>
              </Row>
              <CustomCarousel
                index={index}
                handleSelect={handleSelect}
                src1="https://images.unsplash.com/photo-1547039996-61c1135690c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1689&q=80"
                alt1="First Slide"
                src2="https://images.unsplash.com/photo-1547039996-61c1135690c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1689&q=80"
                alt2="Second Slide"
                src3="https://images.unsplash.com/photo-1547039996-61c1135690c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1689&q=80"
                alt3="Third Slide"
              />
            </Stack>
          </Container>
        </MotionDiv>
      </Container>
      <NoTiltContainer />
      <NoTiltContainer />
      <MotionDiv
        xy="y"
        initCoord={200}
        initScale={1}
        initOpacity={0}
        animateCoord={0}
        animateScale={1}
        animateOpacity={1}
        transition={1}
      >
        <Container>
          <TeamCardGroup />
        </Container>
      </MotionDiv>
    </React.Fragment>
  );
};

export default AboutPage;
