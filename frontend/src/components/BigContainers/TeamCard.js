import React from "react";
import { Stack, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import styles from "./TeamCard.module.css";

const TeamCard = (props) => {
  return (
    <motion.div
      className={styles.card}
      whileHover={{
        scale: 1.09,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.5 }}
    >
      <Stack gap={0}>
        <div>
          <Image
            className={styles.imageSize}
            src={props.src}
            alt={props.name}
          />
        </div>
        <Stack gap={0} className="text-center mt-4">
          <h3>{props.name}</h3>
          <p>{props.position}</p>
        </Stack>
      </Stack>
    </motion.div>
  );
};

export default TeamCard;
