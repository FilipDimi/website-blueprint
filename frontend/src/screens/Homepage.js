import React from "react";
import { Container } from "react-bootstrap";
import IconsContainer from "../components/IconsContainer";
import styles from "./HomePage.module.css";

import { jumbotronImgUrl } from '../common/companySpecific';

const Homepage = () => {
  return (
    <React.Fragment>
      <Container
        style={{
          backgroundImage:
            `url(${jumbotronImgUrl})`,
        }}
        className={styles.backgroundImage}
        fluid
      >
        <Container className={styles.imageTextContainer}>
          <h1 className="pt-4">Welcome to Herdroc</h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Container>
      </Container>
      <IconsContainer />
    </React.Fragment>
  );
};

export default Homepage;
