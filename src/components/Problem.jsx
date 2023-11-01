import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { Forgotten, ManualTask, SpendControl } from "./Icon";
const Problem = () => {
  const slider = React.useRef(null);
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    prevArrow: ".prevarow",
    nextArrow: ".nextarow",
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
          <div></div>
        </div>
        <div>
          <Slider ref={slider} {...settings}>
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
                <Forgotten />
                <p className=" mt-3 mb-2 text_lightblack mb-0 leading_120 ff_outfit fs_md fw-medium text-capitalize">
                  Forgotten Taxes
                </p>
                <p className=" text_darkgray leading-150 ff_Inter fw-normal fs_sm text_ mb-0 pt-2">
                  Fully integrated tax solution, so you’re always aware of
                  what’s really yours.
                </p>
              </div>
            </div>{" "}
            <div className="px-12 py-5">
              <div className=" slider_box   transition_3_linear">
                <ManualTask />
                <p className=" mt-3 mb-2 text_lightblack mb-0 leading_120 ff_outfit fs_md fw-medium text-capitalize">
                  Manual Tasks
                </p>
                <p className=" text_darkgray leading-150 ff_Inter fw-normal fs_sm text_ mb-0 pt-2">
                  Over are the days of manually inputting or retrieving
                  financial data.
                </p>
              </div>
            </div>
          </Slider>
          <button
            className="prevarow"
            onClick={() => slider?.current?.slickPrev()}
          >
            next
          </button>
          <button
            className="nextarow"
            onClick={() => slider?.current?.slickNext()}
          >
            prev
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Problem;
