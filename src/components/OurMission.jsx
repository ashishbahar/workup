import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Group from "../assets/images/png/"

const OurMission = () => {
  return (
   <section>
      <Container>
        <Row>
          <Col lg={6}>
               <img src={Group} alt="Group" />
          </Col>

          <Col lg={6} >
          </Col>

        </Row>
      </Container>
   </section>
  )
}

export default OurMission