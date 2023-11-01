import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { SpendControl } from "./Icon";
const Problem = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="py-5 ">
      <Container className=" custom_container py-5 my-4 ">
        <div>
          <div className="blue_line mb-2 mx-auto rounded-2"></div>
          <h2 className=" text-center leading_120 ff_outfit fw-medium fs_lg  text_lightblack text-capitalize">
            Problem We are solving
          </h2>
        </div>
        <div>
          <Slider {...settings}>
            <div className="px-12 py-5">
              <div className=" slider_box   transition_3_linear">
                <SpendControl />
                <p className=" mt-3 mb-2 text_lightblack mb-0 leading_120 ff_outfit fs_md fw-medium text-capitalize">
                  Spend Control
                </p>
                <p className=" text_darkgray leading-150 ff_Inter fw-normal fs_sm text_ mb-0 pt-2">
                  Smart card issuing and budget control, so its easy to do the
                  right thing.
                </p>
              </div>
            </div>
            <div className="px-12 py-5">
              <div className=" slider_box   transition_3_linear">
                <SpendControl />
                <p className=" mt-3 mb-2 text_lightblack mb-0 leading_120 ff_outfit fs_md fw-medium text-capitalize">
                  Spend Control
                </p>
                <p className=" text_darkgray leading-150 ff_Inter fw-normal fs_sm text_ mb-0 pt-2">
                  Smart card issuing and budget control, so its easy to do the
                  right thing.
                </p>
              </div>
            </div>{" "}
            <div className="px-12 py-5">
              <div className=" slider_box   transition_3_linear">
                <SpendControl />
                <p className=" mt-3 mb-2 text_lightblack mb-0 leading_120 ff_outfit fs_md fw-medium text-capitalize">
                  Spend Control
                </p>
                <p className=" text_darkgray leading-150 ff_Inter fw-normal fs_sm text_ mb-0 pt-2">
                  Smart card issuing and budget control, so its easy to do the
                  right thing.
                </p>
              </div>
            </div>{" "}
            <div className="px-12 py-5">
              <div className=" slider_box   transition_3_linear">
                <SpendControl />
                <p className=" mt-3 mb-2 text_lightblack mb-0 leading_120 ff_outfit fs_md fw-medium text-capitalize">
                  Spend Control
                </p>
                <p className=" text_darkgray leading-150 ff_Inter fw-normal fs_sm text_ mb-0 pt-2">
                  Smart card issuing and budget control, so its easy to do the
                  right thing.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Problem;
