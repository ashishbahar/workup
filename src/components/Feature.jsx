import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AutoRules } from "./Icon";
import { FeatureData } from "./Helper";

const Feature = () => {
  return (
    <div className=" py-5 ">
      <Container className=" custom_container sm:py-5">
        <div className=" text-center">
          <div className="blue_line mb-2 mx-auto rounded-2"></div>
          <h2 className=" leading_120 ff_outfit fw-medium fs_lg  text_lightblack text-capitalize">
            Plugs & Play Features
          </h2>
          <Row className=" mt-5 pt-2">
            {FeatureData &&
              FeatureData.map((Obj, i) => {
                return (
                  <Col lg={3}>
                    <div key={i} className=" h-100 feature_box transition_3_linear">
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
        </div>
      </Container>
    </div>
  );
};

export default Feature;
