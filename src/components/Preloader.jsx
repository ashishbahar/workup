import React from "react";
import Img_logo from "../assets/images/webp/Missions.webp";

const Preloader = () => {
  return (
    <div className="min-vh-100 w-100 d-flex align-items-center justify-content-center bg-white preloader_img position-fixed w-100 top-0 zindex-5 start-0">
      <div className="d-flex justify-content-center flex-column">
       
        <div className="d-flex justify-content-center">
        <img className="Animation w-25" src={Img_logo} alt="#" />
       
      </div>
      </div>
     
    </div>
  );
};

export default Preloader;
