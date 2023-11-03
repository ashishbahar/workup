import React, { useState } from "react";
import { Container } from "react-bootstrap";
import pagelogo from "../assets/images/png/pagelogo.png";
const Header = () => {
  const [nav, setNav] = useState(true);
  if (nav) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }

  return (
    <nav className="nav_bg position-relative z_index_12 z-2">
      <Container className=" custom_container py-4">
        <div className="d-flex justify-content-between align-items-center py-1">
          <img
            className="cursor_pointer width_max_76"
            src={pagelogo}
            alt="pagelogo"
          />
          <ul
            className={
              nav === true
                ? "mb-0 ps-0 d-flex align-items-center flex-column flex-lg-row mobile_ul hide "
                : "mb-0 ps-0 d-flex align-items-center flex-column flex-lg-row mobile_ul show "
            }
          >
            <li onClick={() => setNav(true)} className="px-lg-3">
              <a
                className="hover_line transition_3_linear ff_outfit fs_sm text_black fw-medium opacity_07 text-capitalize"
                href="#"
              >
                Chat Room
              </a>
            </li>
            <li onClick={() => setNav(true)} className="px-lg-3">
              <a
                className="hover_line transition_3_linear ff_outfit fs_sm text_black fw-medium opacity_07 text-capitalize"
                href="#"
              >
                Invest
              </a>
            </li>
            <li onClick={() => setNav(true)} className="px-lg-3">
              <a
                className="hover_line transition_3_linear ff_outfit fs_sm text_black fw-medium opacity_07 text-capitalize"
                href="#"
              >
                Become a Co-Founder
              </a>
            </li>

            <button
              onClick={() => setNav(true)}
              className="ms-lg-3 text_blue ff_Inter fs_sm fw-semibold text-capitalize transition_3_linear border-0 outline-0 bg-white py_12 px-4 rounded-5 nav_btn_color"
            >
              Log In
            </button>
          </ul>

          <div className="text-end d-lg-none">
            <button
              className={nav === true ? "hamburger" : "hamburger-2"}
              onClick={() => setNav(!nav)}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
