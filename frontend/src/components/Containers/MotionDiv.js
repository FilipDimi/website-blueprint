import React from "react";
import { motion } from "framer-motion";

const MotionDiv = (props) => {
  const {
    xy,
    initCoord,
    initScale,
    initOpacity,
    animateCoord,
    animateScale,
    animateOpacity,
    transition,
  } = props;

  if (xy === "x") {
    return (
      <motion.div
        initial={{ x: initCoord, scale: initScale, opacity: initOpacity }}
        animate={{
          x: animateCoord,
          scale: animateScale,
          opacity: animateOpacity,
        }}
        transition={{ duration: transition }}
      >
        {props.children}
      </motion.div>
    );
  } else {
    return (
        <motion.div
          initial={{ y: initCoord, scale: initScale, opacity: initOpacity }}
          animate={{
            y: animateCoord,
            scale: animateScale,
            opacity: animateOpacity,
          }}
          transition={{ duration: transition }}
        >
          {props.children}
        </motion.div>
      );
  }
};

export default MotionDiv;
