import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import ContactForm from "../components/BigContainers/ContactForm";
import ContactInfoCard from "../components/BigContainers/ContactInfoCard";
import MotionDiv from "../components/Containers/MotionDiv";
import RightTiltContainer from "../components/Containers/RightTiltContainer";

const ContactPage = () => {
  return (
    <React.Fragment>
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
        <Container
          className="my-3"
          sm={4}
          style={{ backgroundColor: "#F8F9FA", padding: 20 }}
        >
          <Row>
            <Col sm={4}>
              <Image
                src="https://images.pexels.com/photos/2678301/pexels-photo-2678301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="navigation"
                style={{ width: "100%" }}
              />
            </Col>
            <Col sm={8}>
              <h2>Contact Us</h2>
              <ContactForm />
            </Col>
          </Row>
        </Container>
        <ContactInfoCard />
      </MotionDiv>
      <RightTiltContainer />
      <RightTiltContainer />
    </React.Fragment>
  );
};

export default ContactPage;
