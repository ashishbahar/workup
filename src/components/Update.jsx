import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { First } from "react-bootstrap/esm/PageItem";

const Update = () => {
  const [first, setfirst] = useState(0);
  return (
    <div>
      <Container className=" py-5 custom_container">
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
        <Row>
            
        </Row>
      </Container>
    </div>
  );
};

export default Update;
