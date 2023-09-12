import React, { useState } from "react";
import mainLogo from "../../assets/mainLogo.png";
import { useAccount } from "@particle-network/connect-react-ui";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserReg = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [aadhar, setAadhar] = useState("");
  const account = useAccount();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, name, dob, aadhar, account);
    const response = axios.post(`http://localhost:8080/api/v1/users`, {
      email: email,
      name: name,
      dob: dob,
      aadharNumber: aadhar,
      walletAddress: account,
    });

    toast.success("Details Submitted Successfully!");

    setTimeout(() => {
      navigate("/user/dashboard");
    }, 500);
  };

  return (
    <div className="bg-mainBg h-screen">
      <ToastContainer />
      <div className="flex w-[237px] h-11 mx-auto pt-20 pb-6 justify-center items-center gap-1 shrink-0 relative">
        <a href="/">
          <img className="" src={mainLogo} />
        </a>
      </div>
      <div>
        <form className="pt-10">
          <div className="h-[550px] w-[767px] m-auto bg-formBg/40 rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.20)]">
            <h1 className="text-center text-[22px] pt-[33px]">
              ADD YOUR DETAILS
            </h1>
            <div className="flex flex-col mt-6 m-auto">
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

                <div class=" px-20 mt-4">
                  <label
                    for="DOB"
                    class="block mb-2 text-sm font-medium text-black ml-6"
                  >
                    Date of Birth (DD/MM/YYYY)
                  </label>
                  <input
                    type="date"
                    id="DOB"
                    class="h-[42px] w-[580.83px] bg-inputBg/70 rounded-3xl  shadow-[inset_2.0px_2.0px_4.0px_rgba(0,0,0,0.25)] px-4 "
                    placeholder=""
                    onChange={(e) => setDob(e.target.value)}
                    required
                  />
                </div>

                <div class=" px-20 mt-4">
                  <label
                    for="DOB"
                    class="block mb-2 text-sm font-medium text-black ml-6"
                  >
                    AADHAR NUMBER
                  </label>
                  <input
                    type="number"
                    id="aadhar number"
                    class="h-[42px] w-[580.83px] bg-inputBg/70 rounded-3xl  shadow-[inset_2.0px_2.0px_4.0px_rgba(0,0,0,0.25)] p-4 placeholder:pl-2"
                    placeholder="Enter Your Aadhar Number"
                    onChange={(e) => setAadhar(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className=" m-auto mt-14">
                <button
                  className=" bg-loginBg text-white px-4 rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.25)] py-2 hover:border-2 hover:border-[#CF4242]"
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

export default UserReg;
