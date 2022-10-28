import React, { useState } from "react";
import { Container, Image, Stack, Carousel } from "react-bootstrap";
import styles from "./AboutPage.module.css";

import { colors } from "../common/companySpecific";

const AboutPage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="my-5">
      <Container className={styles.coloredContainerBg}>
        <Stack gap={1}>
          <h2 className="text-center">About Us</h2>
          <p className={styles.justfText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
            amet, conse ctetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1547039996-61c1135690c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1689&q=80"
                  alt="First slide"
                  responsive
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1547039996-61c1135690c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1689&q=80"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1547039996-61c1135690c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1689&q=80"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
        </Stack>
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
