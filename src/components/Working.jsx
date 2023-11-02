import React from "react";
import { Arrow, BlueWorking, Search, Security } from "./Iconsvg";
import { Col, Container, Row } from "react-bootstrap";
import Workings from "../assets/images/png2/Working.png";
import { WorkingData } from "./Helper";

const Working = () => {
  return (
    <section className="Bg-sky">
      <Container className="custom_container py-5">
        <div className="d-flex justify-content-center mb-2">
          <BlueWorking />
        </div>
        <h2 className="ff_outfit fw-medium fs_lg text-lightblack text-center">
          How it’s working
        </h2>
        <Row className="align-items-center mt-4">
          <Col lg={6}>
            <img className="w-100" src={Workings} alt="workings" />
          </Col>
          <Col lg={6}>
            {WorkingData &&
              WorkingData.map((obj, i) => {
                return (
                  <div className="BoxWorking mb-3">
                    <div className="d-flex gap-4">
                      <div>{obj.SvgIcon}</div>
                      <div>
                        <h2 className="ff_outfit fs_md fw-medium text_lightblack line-height-Sign">
                          {obj.Heading}
                        </h2>
                        <p className="ff_Inter fs_sm fw-normal text-black Para_working_width">
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
