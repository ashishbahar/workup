import React from "react";
import { BlueWorking, WorkingLine } from "./Iconsvg";
import { Col, Container, Row } from "react-bootstrap";
import Workings from "../assets/images/webp/WorkingGroup.webp";
import vector from "../assets/images/png/Vector_working.png";
import { WorkingData } from "./Helper";

const Working = () => {
  return (
    <section className="Bg-sky pt-1 position-relative pb-4">
      <img className=" abs_vector" src={vector} alt="vector" />

      <Container className="custom_container pt-5 ">
        <div className="d-flex justify-content-center mb-2">
          <BlueWorking />
        </div>
        <h2 className="ff_outfit fw-medium fs_lg text_lightblack text-center mb-0 lineheight_normal">
          How it’s working
        </h2>
        <Row className=" pt-2 mt-1">
          <Col
            data-aos="zoom-in-right"
            data-aos-duration="2000"
            lg={6}
            md={10}
            className="d-flex mx-auto mt-4 mt-lg-0 justify-content-start"
          >
            <img className="width-90 mx_auto mb-1" src={Workings} alt="workings" />
          </Col>
          <Col
            lg={6}
            data-aos="zoom-in-left"
            data-aos-duration="2000"
            className="position-relative pt-lg-5 my-4 "
          >
            <div className="position_line d-none d-sm-block">
              <WorkingLine />
            </div>
            {WorkingData &&
              WorkingData.map((obj, i) => {
                return (
                  <div className="BoxWorking mb-3 ms-lg-5 ms-sm-4 d-inline-lg-block">
                    <div className="d-flex gap-sm-4 gap-3">
                      <div>{obj.SvgIcon}</div>
                      <div>
                        <h2 className="ff_outfit fs_md fw-medium text_lightblack line-height-Sign mb-1">
                          {obj.Heading}
                        </h2>
                        <p className="ff_Inter fs_sm fw-normal text-black Para_working_width line-height-para opacity_07 mb-0 pe-2">
                          {obj.Para}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Working;
