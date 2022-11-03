import React from "react";
import { Container, Stack, Button, Nav, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  EnvelopeFill,
} from "react-bootstrap-icons";
import styles from "./Footer.module.css";
import { colors } from "../../common/companySpecific";

const Footer = () => {
  return (
    <Container className={styles.footerContainer} fluid>
      <Row>
        <Col lg={6} md={6} sm={12} xs={12}>
          <Stack gap={-5} className={styles.marginIfSm}>
            <h5 style={{ color: colors.accent }}>Open Hours</h5>
            <p className={styles.lowerMargin}>Monday: 8am - 8pm</p>
            <p className={styles.lowerMargin}>Tuesday: 8am - 8pm</p>
            <p className={styles.lowerMargin}>Wednesday: 8am - 8pm</p>
            <p className={styles.lowerMargin}>Thursday: 8am - 8pm</p>
            <p className={styles.lowerMargin}>Friday: 8am - 8pm</p>
            <p className={styles.lowerMargin}>Saturday: Closed</p>
            <p className={styles.lowerMargin}>Sunday: Closed</p>
          </Stack>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <Stack gap={0}>
            <h4 style={{ color: colors.accent }}>Nerdroc</h4>
            <div>
              <Button
                className={styles.buttonMargin}
                variant="outline-secondary"
              >
                <Facebook fontSize={20} />
              </Button>
              <Button
                className={styles.buttonMargin}
                variant="outline-secondary"
              >
                <Instagram fontSize={20} />
              </Button>
              <Button
                className={styles.buttonMargin}
                variant="outline-secondary"
              >
                <Twitter fontSize={20} />
              </Button>
              <Button
                className={styles.buttonMargin}
                variant="outline-secondary"
              >
                <EnvelopeFill fontSize={20} />
              </Button>
            </div>
            <div>
              <Nav className="justify-content-center">
                <Nav.Item>
                  <Nav.Link>
                    <Link className={styles.linkRemoveDec} to="/">
                      Home
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link className={styles.linkRemoveDec} to="/about">
                      About
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link className={styles.linkRemoveDec} to="/contact">
                      Contact
                    </Link>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <p style={{ color: "#6C757D" }}>Nerdroc © 2022</p>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
