import React from "react";
import Navbar from "../Navbar";
import Ellipse from "../../assets/Ellipse .png";
import Profile from "../../assets/Profile.png";
import  Search  from "../../assets/Search.png";

const UserDashboard = () => {
  return (
    <div className="">
      <div className="absolute">
        <img
          className=" overflow-hidden object-cover mix-blend-normal"
          src={Ellipse}
          alt=""
        ></img>
      </div>

      <div className="relative">
        <Navbar />
        <div className="flex flex-row justify-between">

          <div className="mt-[57px] ml-10">
            <img src={Profile}></img>
            <h1 className="ml-6 mt-6 text-xl font-semibold">Welcome, User</h1>
          </div>

          <div> 
            <div className="w-[213px] h-[33px] bg-searchBg mt-[270px] rounded-xl mr-24">
              <img className="ml-[181px] py-1" src={Search}></img>

            </div>

          </div>


        </div>

      </div>
    </div>
  );
};

export default UserDashboard;
