import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import desktop from "../assets/images/png/desktop.png";

const Update = () => {
  const [first, setfirst] = useState(0);
  return (
    <div className=" pt-lg-5 mt-xl-5">
      <Container className=" py-5 my-md-4  custom_container">
        <div className="overflow-scroll example ">
          <div
            className={`d-flex  pb-2  update_line justify-content-between mx-auto ${
              first === 0
                ? "active"
                : first === 1
                ? "active1"
                : first === 2
                ? "active2"
                : " "
            }`}
          >
            <p
              onClick={() => setfirst(0)}
              className="cursor_pointer text_lightblue ff_outfit lineheight_normal fw-semibold fs_xlg"
            >
              Updated with your Dashboard
            </p>
            <p
              onClick={() => setfirst(1)}
              className="cursor_pointer text_lightblue ff_outfit lineheight_normal fw-semibold fs_xlg"
            >
              Accounts
            </p>
            <p
              onClick={() => setfirst(2)}
              className="cursor_pointer text_lightblue ff_outfit lineheight_normal fw-semibold fs_xlg pe-1"
            >
              Cards
            </p>
          </div>
        </div>
        <Row className="py-lg-5 py-4 justify-content-lg-between justify-content-center align-items-center">
          <Col lg={6} md={8} className="my-4 ">
            <img className=" w-100  mx-auto " src={desktop} alt="desktop" />
          </Col>
          <Col lg={5}>
            <div className="text-center text-lg-start">
              <h3
                className={`ff_outfit fs_xlg fw-semibold text_lightblue lineheight_normal ${
                  first === 0 ? "d-block" : "d-none"
                }`}
              >
                Updated with your Dashboard
              </h3>
              <h3
                className={`ff_outfit fs_xlg fw-semibold text_lightblue lineheight_normal ${
                  first === 1 ? "d-block" : "d-none"
                }`}
              >
                Accounts
              </h3>
              <h3
                className={`ff_outfit fs_xlg fw-semibold text_lightblue lineheight_normal ${
                  first === 2 ? "d-block" : "d-none"
                }`}
              >
                Cards
              </h3>
              <p className=" color_lightgray ff_Inter fs_sm fw-normal leading-150 mb-0 mt-2 pt-1">
                Et tempor justo aliquam orci augue vitae fringilla purus eget.
                Id vitae odio consequat aliquet volutpat convallis mi tortor.
                Eget mattis malesuada commodo urnavolutpat nisi rutrum leo.
                Curabitur id gravida urna consectetur.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Update;
