import React from 'react'
import { Container, Row, Col, Stack } from 'react-bootstrap'
import { GeoAltFill, TelephoneFill, EnvelopeFill } from "react-bootstrap-icons";
import { colors } from '../../common/companySpecific';

const ContactInfoCard = () => {
  return (
    <Container
        sm={4}
        style={{ backgroundColor: "#F8F9FA", padding: 20, marginBottom: 100 }}
      >
        <Row>
          <Col lg={4} xs={12} className="text-center">
            <Stack>
              <p>
                <GeoAltFill size={30} color={colors.primary} />
              </p>
              <p>1234 Grand River, East Lansing</p>
            </Stack>
          </Col>
          <Col lg={4} xs={12} className="text-center">
            <Stack>
              <p>
                <TelephoneFill size={30} color={colors.primary} />
              </p>
              <p>555-123-1234</p>
            </Stack>
          </Col>
          <Col lg={4} xs={12} className="text-center">
            <Stack>
              <p>
                <EnvelopeFill size={30} color={colors.primary} />
              </p>
              <p>contact@nerdroc.com</p>
            </Stack>
          </Col>
        </Row>
      </Container>
  )
}

export default ContactInfoCard