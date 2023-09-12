import React from "react";
import Navbar from "../Navbar";
import Ellipse from "../../assets/Ellipse .png";

const ReqCert = () => {
  return (
    <div>
      <div className="absolute">
        <img
          className=" overflow-hidden object-cover mix-blend-normal"
          src={Ellipse}
          alt=""
        ></img>
      </div>
      <div className="relative">
        <Navbar />
      </div>
    </div>
  );
};

export default ReqCert;
