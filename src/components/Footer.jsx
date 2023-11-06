import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Facebook, FooterLogo, Instagram, Linkedin, Twitter } from "./Iconsvg";
import Vector from "../assets/images/webp/Footer_vector.webp";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <section class="bg-Footer position-relative">
      <img className="position_Footer" src={Vector} alt="vector" />
      <Container data-aos="fade-up" className="custom_container">
        <Row className="Footer_padding">
          <Col lg={6}>
            <span className=" cursor_pointer">
              <FooterLogo />
            </span>
            <p class="my-1 py-2 Footer_paragraph">
              The is a long established fact that a reader will be distracted by{" "}
              <span className="d-sm-block">
                the readable content of a page when looking at its layout.
              </span>
            </p>
            <div class="d-flex justify-content-start gap-3">
              <a
                href="https://www.Facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <Row className="mt-sm-5 mt-4 pt-3 pt-sm-0 mt-lg-0 w-100 px-0 justify-content-between">
              <Col className="d-flex justify-content-lg-end">
                <ul className="p-0">
                  <li className=" lineheight_normal">
                    <a class="text-white fs_md fw-semibold text-capitalize ff_opensans ">
                      Home
                    </a>
                  </li>
                  <li class="pt-2 lineheight_normal">
                    <a
                      href="#"
                      class="ff_Inter fs_xsm text-white fw-medium text-capitalize hover_line "
                    >
                      Chatroom
                    </a>
                  </li>
                  <li class="pt-2 lineheight_normal mt-1">
                    <a
                      href="#"
                      class="ff_Inter fs_xsm text-white fw-medium text-capitalize hover_line "
                    >
                      Invest
                    </a>
                  </li>
                  <li class="pt-2 lineheight_normal mt-1">
                    <a
                      href="#"
                      class="ff_Inter fs_xsm text-white fw-medium text-capitalize hover_line "
                    >
                      Become a cofounder Us?
                    </a>
                  </li>
                </ul>
              </Col>
              <Col className="d-flex justify-content-lg-end">
                <ul className="p-0">
                  <li className=" lineheight_normal">
                    <a class="text-white fs_md fw-semibold text-capitalize ff_opensans ">
                      Links
                    </a>
                  </li>
                  <li class="pt-2 lineheight_normal">
                    <a
                      href="#"
                      class="ff_Inter text-xs lg:text-base text-white opacity-70 font-normal hover:opacity-100 duration-300 hover_line "
                    >
                      Contact us
                    </a>
                  </li>
                  <li class="pt-2 lineheight_normal mt-1">
                    <a
                      href="#"
                      class="ff_Inter fs_xsm text-white fw-medium hover_line "
                    >
                      FAQ
                    </a>
                  </li>
                  <li class="pt-2 lineheight_normal mt-1">
                    <a
                      href="#"
                      class="ff_Inter fs_xsm text-white fw-medium hover_line "
                    >
                      Privacy
                    </a>
                  </li>
                  <li class="pt-2 lineheight_normal mt-1">
                    <a
                      href="#"
                      class="ff_Inter fs_xsm text-white fw-medium hover_line "
                    >
                      Terms & conditions
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className=" position-relative z-2">
        <div className="Fotter_line"></div>
        <div className="py-3 px-sm-5 px-4 ">
          <p className="text-center Footer_copyright mb-0 ff_opensans fw-semibold fs_xmd">
            Copyright {year} JesMor Enterprises, All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
