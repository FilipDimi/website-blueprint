import React from "react";
import { Container } from 'react-bootstrap'

import TeamCard from "./TeamCard";
import styles from "./TeamCardGroup.module.css"

const TeamCardGroup = () => {
  return (
    <Container className={styles.coloredContainerBg}>
      <h2 className={styles.teamFlexBox}>Meet Our Team</h2>
      <hr />
      <div className={styles.teamFlexBox}>
        <TeamCard
          name="Martin Dimitrievski"
          position="CEO & Musicion"
          src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <TeamCard
          name="Robert Dimitrievski"
          position="CTO & Chief"
          src="https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <TeamCard
          name="Nina Dimitrievska"
          position="CFO & Teacher"
          src="https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <TeamCard
          name="Robert Dimitrievski"
          position="CTO & Chief"
          src="https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <TeamCard
          name="Nina Dimitrievska"
          position="CFO & Teacher"
          src="https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <TeamCard
          name="Martin Dimitrievski"
          position="CEO & Musicion"
          src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    </Container>
  );
};

export default TeamCardGroup;
