import React from "react";
import Navbar from "../Navbar";
import Ellipse from "../../assets/Ellipse .png";

const UserDashboard = () => {
  return (
    <div className="">
      <div className="absolute">
        <img
          className="  object-cover mix-blend-normal"
          src={Ellipse}
          alt=""
        ></img>
      </div>

      <div className="relative">
        <Navbar />
        <div></div>
      </div>
    </div>
  );
};

export default UserDashboard;
