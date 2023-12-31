import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import positionimg2 from "../assets/images/png/heroposition2.png";
import linearcircle from "../assets/images/png/linearcircle.png";
import {
  ArrowIcon,
  Forgotten,
  LeftIcon,
  ManualTask,
  RightIcon,
  SpendControl,
} from "./Icon";
const Problem = () => {
  const slider = React.useRef(null);
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    prevArrow: ".prevarow",
    nextArrow: ".nextarow",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="py-xl-5 mb-xl-3 position-relative  ">
      <img
        className=" position-absolute positionimg10"
        src={positionimg2}
        alt="positionimg2"
      />
      <img
        className=" position-absolute positionimg11 "
        src={linearcircle}
        alt="linearcircle"
      />
      <Container
        data-aos-duration="2000"
        data-aos="zoom-in-right"
        className=" custom_container py-5 mb-xl-4 mt-4 "
      >
        <div>
          <div className="blue_line mb-2 mx-auto rounded-2"></div>
          <h2 className=" text-center leading_120 ff_outfit fw-medium fs_lg  text_lightblack text-capitalize">
            Problem We are solving
          </h2>
        </div>
        <div className=" position-relative">
          <Slider ref={slider} {...settings}>
            <div className="px-12 py-5">
              <div className=" slider_box h-100   transition_3_linear">
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
              <div className=" slider_box h-100   transition_3_linear">
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
              <div className=" slider_box h-100   transition_3_linear">
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
              <div className=" slider_box h-100   transition_3_linear">
                <ManualTask />
                <p className=" mt-3 mb-2 text_lightblack mb-0 leading_120 ff_outfit fs_md fw-medium text-capitalize">
                  Manual Tasks
                </p>
                <p className=" text_darkgray pe-lg-4 leading-150 ff_Inter fw-normal fs_sm text_ mb-0 pt-2">
                  Over are the days of manually inputting or retrieving
                  financial data.
                </p>
              </div>
            </div>
          </Slider>
          <div className=" text-center">
            <button
              className="nextarow slider_arrow  leftarrow_position"
              onClick={() => slider?.current?.slickNext()}
            >
              <LeftIcon />
            </button>
            <button
              className="prevarow  slider_arrow rightarrow_postion"
              onClick={() => slider?.current?.slickPrev()}
            >
              <RightIcon />
            </button>
          </div>
        </div>
        <div className="slider_input position-relative mt-4  mt-md-2  mx-auto py-2 ps-3 sm:ps-4 pe-2">
          <form
            action=""
            onSubmit={(e) => e.preventDefault()}
            className=" d-flex justify-content-between"
          >
            <input
              required
              type="email"
              className="border-0 w_71  "
              placeholder="List Goes On"
            />
            <button className="slider_btn w_25 border-0">
              <ArrowIcon />
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Problem;
