import React from "react";
import { Container } from "react-bootstrap";
import { ArrowIcon } from "./Icon";

const Waitlist = () => {
  return (
    <div>
      <Container className=" pb-1 custom_container">
        <div className=" WaitList_box mx-auto">
          <h2 className=" pb-1 mb-0 text-center leading_120 ff_outfit fw-medium fs_lg  text_white text-capitalize">
            Join our waitlist
          </h2>
          <div className="hero_input position-relative mt-3    sm:mt-5  mx-auto py-2 ps-3 sm:ps-4 pe-2">
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
        </div>
      </Container>
    </div>
  );
};

export default Waitlist;
