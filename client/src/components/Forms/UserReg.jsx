import React from "react";

const UserReg = () => {
  return (
    <div>
      <form>
        <div className="h-[400px] w-[767px] m-auto bg-formBg ">
          <h1 className="text-center">Login</h1>
          <div className="flex flex-col">
            <div className="flex flex-row">

              <div class="m-auto">
                <label for="email" class="block mb-2 text-sm font-medium">
                  email id
                </label>
                <input
                  type="email"
                  id="email"
                  class="h-[42px] w-[580.83px] bg-inputBg "
                  placeholder="Enter Your Email"
                  required
                />
              </div>


            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserReg;
