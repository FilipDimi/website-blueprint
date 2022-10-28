import React from "react";
import { Container } from "react-bootstrap";
import GreyEmptyContainer from "../components/GreyEmptyContainer";
import styles from "./HomePage.module.css";

const Homepage = () => {
  return (
    <React.Fragment>
      <Container
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1842&q=80)",
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
      <GreyEmptyContainer />
    </React.Fragment>
  );
};

export default Homepage;
