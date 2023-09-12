import React from "react";

const UserReg = () => {
  return (
    <div className="bg-mainBg h-screen">
      <div>
        <form className="pt-24">
          <div className="h-[550px] w-[767px] m-auto bg-formBg/40 rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.20 )]  ">
            <h1 className="text-center text-[22px] pt-[33px]">Login</h1>
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
                    class="h-[42px] w-[580.83px] bg-inputBg/70 rounded-3xl  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.25)] p-4 placeholder:pl-2"
                    placeholder="Enter Your Email"
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
                    class="h-[42px] w-[580.83px] bg-inputBg/70 rounded-3xl  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.25)] p-4 placeholder:pl-2"
                    placeholder="Enter Your name"
                    required
                  />
                </div>

                <div class=" px-20 mt-4">
                  <label
                    for="DOB"
                    class="block mb-2 text-sm font-medium text-black ml-6"
                  >
                    DOB
                  </label>
                  <input
                    type="date"
                    id="DOB"
                    class="h-[42px] w-[580.83px] bg-inputBg/70 rounded-3xl  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.25)] px-4 "
                    placeholder=""
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
                    type="tel"
                    id="aadhar number"
                    class="h-[42px] w-[580.83px] bg-inputBg/70 rounded-3xl  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.25)] p-4 placeholder:pl-2"
                    required
                  />
                </div>
              </div>
              <div className=" m-auto mt-8">
                <button  className=" bg-loginBg text-white px-4 rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.25)] ">
                  LOGIN
                </button>
                
              </div>
              <div className="m-auto mt-2">
              <h1 className="">Haven't registered yet?Register here</h1>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserReg;
