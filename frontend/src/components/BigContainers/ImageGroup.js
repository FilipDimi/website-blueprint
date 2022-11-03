import React from "react";
import { Row, Container } from "react-bootstrap";
import HoverImage from "./HoverImage";

const ImageGroup = () => {
  return (
    <Container
      style={{ backgroundColor: "#F8F9FA", padding: 20 }}
    >
      <h2 className="text-center mb-3">Our Place</h2>
      <Row>
        <HoverImage
          src="https://images.pexels.com/photos/1346340/pexels-photo-1346340.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="macarons"
        />
        <HoverImage
          src="https://images.pexels.com/photos/678076/pexels-photo-678076.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="coffee"
        />
        <HoverImage
          src="https://images.pexels.com/photos/2325307/pexels-photo-2325307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="espresso"
        />
        <HoverImage
          src="https://images.pexels.com/photos/4350055/pexels-photo-4350055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="latteart"
        />
        <HoverImage
          src="https://images.pexels.com/photos/2074120/pexels-photo-2074120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="bookcoffee"
        />
        <HoverImage
          src="https://images.pexels.com/photos/2074121/pexels-photo-2074121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="aeropress"
        />
      </Row>
    </Container>
  );
};

export default ImageGroup;
