import React from "react";
import { Col, Image } from "react-bootstrap"
import { motion } from "framer-motion"

const HoverImage = (props) => {
  const { src, alt } = props

  return (
    <Col lg={4} md={6} sm={12} xs={12} className="mb-3">
      <motion.div
        whileHover={{
          scale: 1.09,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.5 }}
      >
        <Image
          src={src}
          alt={alt}
          width="100%"
        />
      </motion.div>
    </Col>
  );
};

export default HoverImage;
