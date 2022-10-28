import React from 'react'
import { Stack, Image } from 'react-bootstrap';
import styles from './TeamCard.module.css'

const TeamCard = (props) => {
  return (
    <div className={styles.card}>
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
  </div>
  )
}

export default TeamCard