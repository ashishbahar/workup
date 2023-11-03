import React from "react";
import { Container } from "react-bootstrap";
import { ArrowIcon } from "./Icon";

const Waitlist = (props) => {
  return (
    <div className={`position-relative z-1 ${props.translate}`}>
      <Container className=" pb-1 custom_container ">
        <div
          data-aos="flip-left"
          data-aos-duration="2500"
          className={`WaitList_box mx-auto position-relative z-2 overflow-hidden ${props.maxwidth}`}
        >
          <h2 className=" pb-1 mb-0 text-center position-relative z-1 leading_120 ff_outfit fw-medium fs_lg  text_white text-capitalize">
            Join our waitlist
          </h2>
          <div className="hero_input position-relative mt-3 z-1    sm:mt-5  mx-auto py-2 ps-3 sm:ps-4 pe-2">
            <form action="">
              <input
                required
                type="email"
                className="border-0 w-85 w_75 w-85"
                placeholder="Enter your email"
              />
              <button className="hero_btn w_25  border-0">
                <ArrowIcon />
              </button>
            </form>
          </div>
          <img
            className={`zigzag1 position-absolute top-0 start-0 ${props.waitlist}`}
            src={props.zigzag}
            alt="zigzag"
          />
          <img
            className={`zigzag1 position-absolute bottom-0 end-0 ${props.waitlist}`}
            src={props.zigzag2}
            alt="zigzag"
          />
        </div>
      </Container>
    </div>
  );
};

export default Waitlist;
