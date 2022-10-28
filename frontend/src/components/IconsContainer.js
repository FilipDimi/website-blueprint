import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { EmojiSmile, EmojiExpressionless, EmojiWink } from 'react-bootstrap-icons';
import { colors } from '../common/companySpecific';

const IconsContainer = () => {
  return (
    <Container className='pt-3' style={{ backgroundColor: "#f0f2f4", height: 100 }} fluid>
        <Row className='text-center'>
            <Col><EmojiSmile fontSize={50} color={colors.primary} /></Col>
            <Col><EmojiExpressionless fontSize={50} color={colors.primary} /></Col>
            <Col><EmojiWink fontSize={50} color={colors.primary} /></Col>
        </Row>
    </Container>
  )
}

export default IconsContainer