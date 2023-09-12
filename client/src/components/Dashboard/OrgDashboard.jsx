import React, { useState } from "react";
import Navbar from "../Navbar";
import Ellipse from "../../assets/Ellipse .png";
import Profile from "../../assets/Profile.png";
import axios from "axios";
import { useAccount } from "@particle-network/connect-react-ui";
import OrgRequestModal from "../Modals/OrgRequestModal";

const OrgDashboard = () => {
  const account = useAccount();

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
            <h1 className="ml-6 mt-6 text-xl font-semibold">
              Welcome, Organisation
            </h1>
          </div>
        </div>
        <div className="flex flex-row justify-around pt-20">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <a href="/org/certificates">Distribute Certificate</a>
          </button>
          <OrgRequestModal />
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <a href="/org/verify">Verify Certificate</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrgDashboard;
