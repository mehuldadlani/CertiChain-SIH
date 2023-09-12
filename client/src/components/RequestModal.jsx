import React from "react";
import { useEffect, useState } from "react";
import { ArrowDownIcon } from "@heroicons/react/outline";

const RequestModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        className="px-2 py-2 bg-inputBg/70 text-black ml-10 mt-20 rounded-md"
        onClick={() => setShowModal(true)}
      >
        Request Certificate
      </button>
      {showModal ? (
        <div className=" w-[500px] absolute ">
          <form className="border-2 mr-[310px] h-[250px] mt-4 p-4">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <label for="name" className="block mb-1 text-sm font-medium text-black">
                  NAME
                </label>
                <input className="bg-inputBg/70 rounded-3xl  shadow-[inset_2.0px_2.0px_4.0px_rgba(0,0,0,0.25)] placeholder:pl-4 placeholder:text-sm" type="text" placeholder="Enter Your Name" />
              </div>
              <div className="flex flex-col  mt-2">
                <label for="name" className="block mb-1 text-sm font-medium text-black">
                  WALLET ADDRESS
                </label>
                <input className="bg-inputBg/70 rounded-3xl  shadow-[inset_2.0px_2.0px_4.0px_rgba(0,0,0,0.25)]" type="text" />
              </div>

              <div className="flex flex-row mt-2">
                <label for="name" className="block  text-sm  text-black">
                  Organisation
                </label>
                <div>
                  <select
                    id=""
                    class=" text-gray-900 text-xs rounded-xs ml-4 px-1  w-4"
                  >
                    <option selected>
                      <ArrowDownIcon />
                    </option>
                    <option>Udemy</option>
                    <option>NPTEL</option>
                    <option>Coursera</option>
                    <option>SRM</option>
                  </select>
                  
                </div>
                <div>
                    <input
                      type="checkbox"
                      className=" border-2 rounded-lg w-12 mr-8"
                    />
                  </div>
              </div>

              <div className="flex flex-row">
                <label for="name" className="block  text-sm  text-black">
                  Certificates
                </label>
                <div>
                  <select
                    id=""
                    class=" text-gray-900 text-xs rounded-xs ml-[27px] px-1  w-4"
                  >
                    <option selected>
                      <ArrowDownIcon />
                    </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                  
                </div>
                <div>
                    <input
                      type="checkbox"
                      className=" border-2 rounded-lg w-12 mr-8"
                    />
                  </div>
              </div>

            </div>
            <button
              className="bg-loginBg text-white  px-4 py-1 ml-1 mt-6  text-sm rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.15)]"
              onClick={() => setShowModal(false)}
            >
              Submit
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default RequestModal;
