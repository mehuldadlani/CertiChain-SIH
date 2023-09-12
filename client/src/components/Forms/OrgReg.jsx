import React, { useState } from "react";
import mainLogo from "../../assets/mainLogo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAccount } from "@particle-network/connect-react-ui";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrgReg = () => {
  const account = useAccount();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    const response = axios.post(`http://localhost:8080/api/v1/organisations`, {
      orgEmail: email,
      orgName: name,
      walletAddress: account,
    });

    toast.success("Details Submitted Successfully!");

    navigate("/org/dashboard");
  };

  return (
    <div className="bg-mainBg h-screen">
      <ToastContainer />
      <div className="flex w-[237px] h-11 mx-auto pt-20 justify-center items-center gap-1 shrink-0 relative">
        <a href="/">
          <img className="" src={mainLogo} />
        </a>
      </div>
      <div className="">
        <form className="pt-24 ">
          <div className="h-[390px] w-[767px] m-auto bg-formBg/40 rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.25)]   ">
            <h1 className="text-center text-[22px] p-[33px]">
              ADD YOUR ORGANISATION DETAILS
            </h1>
            <div className="flex flex-col mt-2 m-auto">
              <div className="flex flex-col">
                <div class=" px-20 ">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-black ml-6"
                  >
                    EMAIL ID
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="h-[42px] w-[580.83px] bg-inputBg/70 rounded-3xl  shadow-[inset_2.0px_2.0px_4.0px_rgba(0,0,0,0.25)] p-4 placeholder:pl-2"
                    placeholder="Enter Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div class=" px-20 mt-4">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-black ml-6"
                  >
                    NAME
                  </label>
                  <input
                    type="Name"
                    id="Name"
                    class="h-[42px] w-[580.83px] bg-inputBg/70 rounded-3xl  shadow-[inset_2.0px_2.0px_4.0px_rgba(0,0,0,0.25)] p-4 placeholder:pl-2"
                    placeholder="Enter Your name"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className=" m-auto mt-8">
                <button
                  className=" bg-loginBg text-white px-6 py-2 rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.25)] "
                  onClick={handleSubmit}
                >
                  SUBMIT DETAILS
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrgReg;
