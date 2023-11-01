import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Group from "../assets/images/png2/group_discuss.png"
import Group_two from "../assets/images/png2/group_Two.png"
import Three_dots from "../assets/images/png2/Three_Dots.png"

const OurMission = () => {
  return (
   <section className='Bg-sky position-relative'>
    <img className='position_Our width_group' src={Group_two} alt="#" />
    <img className='Sol_dots_abs' src={Three_dots} alt="#" />
      <Container className='custom_container'>
        <Row className='align-items-center'>
          <Col lg={6}>
               <img className='Our_padding w-100' src={Group} alt="Group" />
          </Col>

          <Col lg={6} className='d-flex flex-column align-items-end'>
            <div>
              <div className='line_Blue'></div>
              <h2 className='text_lightblack fs_lg fw-medium ff_Raleway'>Our Mission</h2>
              <p className='Paragraph Ourmax'>Our mission is to harness the power of AI-driven automation to empower Australian businesses. We propel all sized businesses towards success by automating financial tasks, from tax payments to bank transfers, report building. Creating an ecosystem where AI acts as the autopilot for finance. Join us in building a future where businesses thrive effortlessly and reach new heights.</p>
            </div>
          </Col>
        </Row>
      </Container>
   </section>
  )
}

export default OurMission