import React from 'react'
import { Container, Row } from 'react-bootstrap';

import styles from "./IconsContainer.module.css"

const IconsContainer = (props) => {
  return (
    <Container className={styles.diagonalBox} fluid>
        <Row className={styles.centerVertically}>
          {props.children}
        </Row>
    </Container>
  )
}

export default IconsContainer