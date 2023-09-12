import React from "react";

const UserReg = () => {
  return (
    <div className="bg-mainBg h-screen">
      <div>
        <form className="pt-24">
          <div className="h-[px] w-[767px] m-auto bg-formBg/40 rounded-3xl  shadow-xs  ">
            <h1 className="text-center text-3xl pt-[33px]">Login</h1>
            <div className="flex ">
              <div className="flex flex-col">
                <div class=" px-20">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-black ml-4"
                  >
                    EMAIL ID
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="h-[42px] w-[580.83px] bg-inputBg/70 rounded-3xl  shadow-xs p-4"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>

                <div class=" px-20 mt-4">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-black ml-4"
                  >
                    NAME
                  </label>
                  <input
                    type="Name"
                    id="Name"
                    class="h-[42px] w-[580.83px] bg-inputBg/70 rounded-3xl  shadow-xs p-4"
                    placeholder="Enter Your name"
                    required
                  />
                </div>

                <div class=" px-20 mt-4">
                  <label
                    for="DOB"
                    class="block mb-2 text-sm font-medium text-black ml-4"
                  >
                    DOB
                  </label>
                  <input
                    type="date"
                    id="DOB"
                    class="h-[42px] w-[580.83px] bg-inputBg/70 rounded-3xl  shadow-xs p-4"
                    required
                  />
                </div>

                <div class=" px-20 mt-4">
                  <label
                    for="DOB"
                    class="block mb-2 text-sm font-medium text-black ml-4"
                  >
                    AADHAR NUMBER
                  </label>
                  <input
                    type="tel"
                    id="aadhar number"
                    class="h-[42px] w-[580.83px] bg-inputBg/70 rounded-3xl  shadow-xs p-4"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserReg;
