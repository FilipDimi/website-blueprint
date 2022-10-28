import React from "react";
import { Container, Row, Col, Image, Stack } from "react-bootstrap";
import styles from "./AboutPage.module.css";

import { aboutImgObj, colors } from "../common/companySpecific";

const AboutPage = () => {
  return (
    <Container>
      <Container className={styles.containerBg}>
        <Row>
          <Col xs lg="2" className="text-center">
            <Image
              src={aboutImgObj.src}
              alt={aboutImgObj.alt}
              style={{ maxWidth: "200px" }}
              roundedCircle
            />
          </Col>
          <Col className="mt-2" md="auto" style={{ maxWidth: "80%" }}>
            <Row>
              <h2>About Us</h2>
            </Row>
            <Row>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className={styles.containerBg}>
        <h2 className={styles.teamFlexBox}>Meet Our Team</h2>
        <hr />
        <div className={styles.teamFlexBox}>
          <div
            style={{
              width: "400px",
              height: "600px",
              backgroundColor: colors.primary,
              marginBottom: "15px",
              borderRadius: "1.5rem",
              overflow: "hidden",
            }}
          >
            <Stack gap={0}>
              <div>
                <Image
                  style={{ width: "100%" }}
                  src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
              </div>
              <Stack gap={0} className="text-center mt-4">
                <h3>Martin Dimitrievski</h3>
                <p>CEO & Musician</p>
              </Stack>
            </Stack>
          </div>
          <div
            style={{
              width: "400px",
              height: "600px",
              backgroundColor: colors.primary,
              marginBottom: "15px",
              borderRadius: "1.5rem",
              overflow: "hidden",
            }}
          >
            <Stack gap={0}>
              <div>
                <Image
                  style={{ width: "100%" }}
                  src="https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
              </div>
              <Stack gap={0} className="text-center mt-4">
                <h3>Robert Dimitrievski</h3>
                <p>CTO & Junior Software Engineer</p>
              </Stack>
            </Stack>
          </div>
          <div
            style={{
              width: "400px",
              height: "600px",
              backgroundColor: colors.primary,
              marginBottom: "15px",
              borderRadius: "1.5rem",
              overflow: "hidden",
            }}
          >
            <Stack gap={0}>
              <div>
                <Image
                  style={{ width: "100%" }}
                  src="https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
              </div>
              <Stack gap={0} className="text-center mt-4">
                <h3>Nina Dimitrievska</h3>
                <p>COO & Teacher</p>
              </Stack>
            </Stack>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default AboutPage;
