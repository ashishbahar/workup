import React from "react";
import { BlueWorking, WorkingLine } from "./Iconsvg";
import { Col, Container, Row } from "react-bootstrap";
import Workings from "../assets/images/webp/WorkingGroup.webp";
import vector from "../assets/images/png/Vector_working.png";
import { WorkingData } from "./Helper";

const Working = () => {
  return (
    <section className="Bg-sky py-lg-2 position-relative">
      <img className=" abs_vector" src={vector} alt="vector" />

      <Container className="custom_container py-5">
        <div className="d-flex justify-content-center mb-2">
          <BlueWorking />
        </div>
        <h2 className="ff_outfit fw-medium fs_lg text-lightblack text-center mb-0">
          How it’s working
        </h2>
        <Row className="align-items-center py-2 my-1">
          <Col
            data-aos="zoom-in-right"
            data-aos-duration="2000"
            lg={6}
            md={10}
            className="d-flex  mx-auto mt-5 mt-lg-0 justify-content-start"
          >
            <img className="width-83 mx_auto" src={Workings} alt="workings" />
          </Col>
          <Col
            lg={6}
            data-aos="zoom-in-left"
            data-aos-duration="2000"
            className="position-relative pt-5 mt-sm-4"
          >
            <div className="positon_line d-none d-sm-block">
              <WorkingLine />
            </div>
            {WorkingData &&
              WorkingData.map((obj, i) => {
                return (
                  <div className="BoxWorking mb-3 ms-sm-4 ms-lg-0">
                    <div className="d-flex gap-4">
                      <div>{obj.SvgIcon}</div>
                      <div>
                        <h2 className="ff_outfit fs_md fw-medium text_lightblack line-height-Sign">
                          {obj.Heading}
                        </h2>
                        <p className="ff_Inter fs_sm fw-normal text-black Para_working_width mb-0">
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
