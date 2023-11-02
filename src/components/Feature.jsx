import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FeatureDataSecline,
  FeatureDataThirdline,
  FeatureDatafirstline,
} from "./Helper";

const Feature = () => {
  return (
    <div className=" pb-5 pt-4 pt-md-5 ">
      <Container className=" custom_container pb-4 pb-sm-5 pt-sm-5 mb-sm-4 ">
        <div className=" text-center">
          <div className="blue_line mb-2 mx-auto rounded-2"></div>
          <h2 className=" leading_120 ff_outfit fw-medium fs_lg  text_lightblack text-capitalize">
            Plugs & Play Features
          </h2>
          <Row className="  pt-4 mt-sm-2 justify-content-center">
            {FeatureDatafirstline &&
              FeatureDatafirstline.map((Obj, i) => {
                return (
                  <Col lg={3} sm={6} className="mt-4">
                    <div
                      key={i}
                      className=" h-100 feature_box ms-lg-1 transition_3_linear"
                    >
                      {Obj.SvgIcon}
                      <div className=" pt-4">
                        <p className=" text_lightblack mb-0 leading_120 ff_outfit fs_md fw-medium text-capitalize">
                          {Obj.Heading}
                        </p>
                        <p className=" text_darkgray leading-150 ff_Inter fw-normal fs_sm text_ mb-0 pt-2">
                          {Obj.Para}
                        </p>
                      </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
          <Row className="justify-content-center">
            {FeatureDataSecline &&
              FeatureDataSecline.map((Obj, i) => {
                return (
                  <Col lg={3} sm={6} className="ms-lg-1 mt-4">
                    <div
                      key={i}
                      className=" h-100 feature_box  transition_3_linear"
                    >
                      {Obj.SvgIcon}
                      <div className=" pt-4">
                        <p className=" text_lightblack mb-0 leading_120 ff_outfit fs_md fw-medium text-capitalize">
                          {Obj.Heading}
                        </p>
                        <p className=" text_darkgray leading-150 ff_Inter fw-normal fs_sm text_ mb-0 pt-2">
                          {Obj.Para}
                        </p>
                      </div>
                    </div>
                  </Col>
                )
              })}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Feature;
