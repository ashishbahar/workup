import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FeatureDataSecline, FeatureDatafirstline } from "./Helper";
import Dots3 from "../assets/images/webp/Dots_Sol.webp";
import linearimg from "../assets/images/png/secondsecposition.png";
const Feature = () => {
  return (
    <div className=" pb-5 pt-4 pt-xl-5 mb-2 position-relative ">
      <img
        className=" position-absolute positionimg6 start-0"
        src={Dots3}
        alt="Dots3"
      />
      <img
        className=" position-absolute positionimg6 end-0"
        src={Dots3}
        alt="Dots3"
      />
      <img
        className=" position-absolute positionimg7 end-0"
        src={linearimg}
        alt="linearimg"
      />
      <img
        className=" position-absolute positionimg8 "
        src={Dots3}
        alt="Dots3"
      />
      <img
        className=" position-absolute positionimg9 "
        src={Dots3}
        alt="Dots9"
      />
      <Container className=" custom_container pb-xl-5 pt-sm-4 mt-2 mb-sm-4 ">
        <div className=" text-center">
          <div className="blue_line mb-2 mx-auto rounded-2"></div>
          <h2 className=" leading_120 ff_outfit fw-medium fs_lg  text_lightblack text-capitalize">
            Plugs & Play Features
          </h2>
          <Row
            data-aos="fade-right"
            data-aos-duration="2000"
            className="  position-relative z-1 pt-xl-4 mt-sm-2 justify-content-center"
          >
            {FeatureDatafirstline &&
              FeatureDatafirstline.map((Obj, i) => {
                return (
                  <Col lg={3} sm={6} className="mt-4  ">
                    <div
                      key={i}
                      className=" h-100 position-relative z-1 feature_box  transition_3_linear"
                    >
                      {Obj.SvgIcon}
                      <div className=" pt-4">
                        <p className=" text_lightblack mb-0 leading_120 ff_outfit fs_md fw-medium text-capitalize">
                          {Obj.Heading}
                        </p>
                        <p className=" text_darkgray feature_pera leading-150 ff_Inter fw-normal fs_sm text_ mb-0 pt-3">
                          {Obj.Para}
                        </p>
                      </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
          <Row
            data-aos="fade-left"
            data-aos-duration="2000"
            className="justify-content-center"
          >
            {FeatureDataSecline &&
              FeatureDataSecline.map((Obj, i) => {
                return (
                  <Col lg={3} sm={6} className="ms_1 mt-4">
                    <div
                      key={i}
                      className=" h-100 feature_box  transition_3_linear"
                    >
                      {Obj.SvgIcon}
                      <div className=" pt-4">
                        <p className=" text_lightblack mb-0 leading_120  ff_outfit fs_md fw-medium text-capitalize">
                          {Obj.Heading}
                        </p>
                        <p className=" text_darkgray leading-150 feature_pera ff_Inter fw-normal fs_sm text_ mb-0 pt-3">
                          {Obj.Para}
                        </p>
                      </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Feature;
