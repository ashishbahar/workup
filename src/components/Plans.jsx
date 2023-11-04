import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LinearCheckbox } from "./Icon";
import Dots3 from "../assets/images/webp/Dots_Sol.webp";
import lineardots from "../assets/images/png/lineardots.png";
const Plans = () => {
  return (
    <div className="pt-md-4 pb-4 mt-1 position-relative ">
      <img
        className=" position-absolute  bottom-50 start-0"
        src={Dots3}
        alt="dots"
      />
      <img
        className=" position-absolute positionimg14 end-0"
        src={lineardots}
        alt="lineardots"
      />
      <Container className="pt-lg-5 mt-4  mt-lg-0 custom_container position-relative z-1">
        <div className="py-5 ">
          <>
            <div className="blue_line mb-2 mx-auto rounded-2"></div>
            <h2 className=" text-center leading_120 ff_outfit fw-medium fs_lg  text_lightblack text-capitalize">
              Potential Plans
            </h2>
          </>
          <div className=" pt-1">
            {" "}
            <Row className=" my-4 justify-content-center py-lg-2">
              <Col
                data-aos="zoom-in-right"
                data-aos-duration="2000"
                lg={4}
                md={6}
                sm={9}
                xs={11}
                className=" mt-4"
              >
                <div className="plan_box">
                  <div className="d-flex flex-column h-100 justify-content-between">
                    <div>
                      <div className="text-center">
                        <p className="mb-0 planheading  transition_3_linear  ff_outfit lineheight_normal fs_md fw-medium text_lightblack">
                          Free Forever
                        </p>
                        <p className="mb-0 opacity_07 mt-1 transition_3_linear planpara lineheight_normal ff_Inter text_black fs_sm fw-normal">
                          Best for sole traders
                        </p>
                        <p className="mb-0 text-linear  transition_3_linear mt-3 planheading lineheight_normal ff_opensans fw-semibold fs_2lg  ">
                          Free
                        </p>
                        <p className="mb-0 planpara  transition_3_linear mt-1  planopacity opacity-50  lineheight_normal ff_Inter text_black fs_sm fw-normal ">
                          Forever
                        </p>
                      </div>
                      <div className=" planpoint_max_width mx-auto">
                        <div className="d-flex  align-items-center me-4 ms-2 mt-4">
                          <LinearCheckbox />
                          <p className="  ff_Inter  transition_3_linear fw-normal mb-0 plan_text fs_sm lineheight_normal color_lightgray ms-1 ">
                            3 Business accounts
                          </p>
                        </div>
                        <div className="d-flex align-items-center me-4 ms-2 mt-3">
                          <LinearCheckbox />
                          <p className="  ff_Inter  transition_3_linear fw-normal mb-0 plan_text fs_sm lineheight_normal color_lightgray ms-1 ">
                            1 Locked account
                          </p>
                        </div>
                        <div className="d-flex   align-items-center me-4 ms-2 mt-3">
                          <LinearCheckbox />
                          <p className="  ff_Inter  transition_3_linear fw-normal mb-0 plan_text fs_sm lineheight_normal color_lightgray ms-1 ">
                            1 Linked account
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-4 pt-3">
                      <button className="plan_btn ff_Inter transition_3_linear fw_xmd fw-medium text_white w-100 ">
                        Free Forever
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                data-aos="zoom-out-up"
                data-aos-duration="2000"
                lg={4}
                md={6}
                sm={9}
                xs={11}
                className=" mt-4"
              >
                <div className="plan_box">
                  <div className="d-flex h-100 flex-column justify-content-between">
                    <div>
                      <div className="text-center">
                        <p className="mb-0 planheading  transition_3_linear  ff_outfit lineheight_normal fs_md fw-medium text_lightblack">
                          Getting Serious
                        </p>
                        <p className="mb-0 opacity_07 mt-1 transition_3_linear planpara lineheight_normal ff_Inter text_black fs_sm fw-normal">
                          Best for small business
                        </p>
                        <div className="d-flex justify-content-center align-items-center fw-semibold lineheight_normal">
                          <span className=" transition_3_linear fs_md text-linear planheading ff_poppins">
                            $
                          </span>
                          <p className="mb-0 text-linear  transition_3_linear mt-3 planheading lineheight_normal ff_opensans fw-semibold fs_2lg  ">
                            25
                          </p>
                        </div>
                        <p className="mb-0 planpara  transition_3_linear mt-1  planopacity opacity-50  lineheight_normal ff_Inter text_black fs_sm fw-normal ">
                          Per member Per month
                        </p>
                      </div>
                      <div className=" planpoint_max_width mx-auto">
                        <div className="d-flex  align-items-center me-4 ms-2 mt-4">
                          <LinearCheckbox />
                          <p className="  ff_Inter  transition_3_linear fw-normal mb-0 plan_text fs_sm lineheight_normal color_lightgray ms-1 ">
                            5 Business accounts
                          </p>
                        </div>
                        <div className="d-flex align-items-center me-4 ms-2 mt-3">
                          <LinearCheckbox />
                          <p className="  ff_Inter  transition_3_linear fw-normal mb-0 plan_text fs_sm lineheight_normal color_lightgray ms-1 ">
                            3 Locked account
                          </p>
                        </div>
                        <div className="d-flex   align-items-center me-4 ms-2 mt-3">
                          <LinearCheckbox />
                          <p className="  ff_Inter  transition_3_linear fw-normal mb-0 plan_text fs_sm lineheight_normal color_lightgray ms-1 ">
                            3 Linked account
                          </p>
                        </div>
                        <div className="d-flex   align-items-center me-4 ms-2 mt-3">
                          <LinearCheckbox />
                          <p className="  ff_Inter  transition_3_linear fw-normal mb-0 plan_text fs_sm lineheight_normal color_lightgray ms-1 ">
                            Auto transfer rules
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-4 pt-3">
                      <button className="plan_btn ff_Inter transition_3_linear fw_xmd fw-medium text_white w-100 ">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                data-aos="zoom-in-left"
                data-aos-duration="2000"
                lg={4}
                md={6}
                sm={9}
                xs={11}
                className=" mt-4"
              >
                <div className="plan_box">
                  <div className="d-flex h-100 flex-column justify-content-between">
                    <div>
                      <div className="text-center">
                        <p className="mb-0 planheading  transition_3_linear  ff_outfit lineheight_normal fs_md fw-medium text_lightblack">
                          I’m Serious
                        </p>
                        <p className="mb-0 opacity_07 mt-1 transition_3_linear planpara lineheight_normal ff_Inter text_black fs_sm fw-normal">
                          Best for growth businesses
                        </p>
                        <div className="d-flex justify-content-center align-items-center fw-semibold lineheight_normal">
                          <span className=" fs_md text-linear planheading transition_3_linear ff_poppins">
                            $
                          </span>
                          <p className="mb-0 text-linear  transition_3_linear mt-3 planheading lineheight_normal ff_opensans fw-semibold fs_2lg  ">
                            35
                          </p>
                        </div>
                        <p className="mb-0 planpara  transition_3_linear mt-1  planopacity opacity-50  lineheight_normal ff_Inter text_black fs_sm fw-normal ">
                          Per member Per month
                        </p>
                      </div>
                      <div className=" planpoint_max_width mx-auto">
                        <div className="d-flex  align-items-center me-4 ms-2 mt-4">
                          <LinearCheckbox />
                          <p className="  ff_Inter  transition_3_linear fw-normal mb-0 plan_text fs_sm lineheight_normal color_lightgray ms-1 ">
                            10 Business accounts
                          </p>
                        </div>
                        <div className="d-flex align-items-center me-4 ms-2 mt-3">
                          <LinearCheckbox />
                          <p className="  ff_Inter  transition_3_linear fw-normal mb-0 plan_text fs_sm lineheight_normal color_lightgray ms-1 ">
                            10 Locked account
                          </p>
                        </div>
                        <div className="d-flex   align-items-center me-4 ms-2 mt-3">
                          <LinearCheckbox />
                          <p className="  ff_Inter  transition_3_linear fw-normal mb-0 plan_text fs_sm lineheight_normal color_lightgray ms-1 ">
                            10 Linked account
                          </p>
                        </div>{" "}
                        <div className="d-flex   align-items-center me-4 ms-2 mt-3">
                          <LinearCheckbox />
                          <p className="  ff_Inter  transition_3_linear fw-normal mb-0 plan_text fs_sm lineheight_normal color_lightgray ms-1 ">
                            Auto transfer rules
                          </p>
                        </div>{" "}
                        <div className="d-flex   align-items-center me-4 ms-2 mt-3">
                          <LinearCheckbox />
                          <p className="  ff_Inter  transition_3_linear fw-normal mb-0 plan_text fs_sm lineheight_normal color_lightgray ms-1 ">
                            Auto pay rules
                          </p>
                        </div>{" "}
                        <div className="d-flex   align-items-center me-4 ms-2 mt-3">
                          <LinearCheckbox />
                          <p className="  ff_Inter  transition_3_linear fw-normal mb-0 plan_text fs_sm lineheight_normal color_lightgray ms-1 ">
                            Auto reconciled rules
                          </p>
                        </div>{" "}
                        <div className="d-flex   align-items-center me-4 ms-2 mt-3">
                          <LinearCheckbox />
                          <p className="  ff_Inter  transition_3_linear fw-normal mb-0 plan_text fs_sm lineheight_normal color_lightgray ms-1 ">
                            24/7 support
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-4 pt-3">
                      <button className="plan_btn ff_Inter transition_3_linear fw_xmd fw-medium text_white w-100 ">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Plans;
