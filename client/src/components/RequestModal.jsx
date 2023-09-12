import React from "react";
import { useEffect, useState } from "react";

const RequestModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        className="px-2 py-2 bg-teal-700 text-white ml-10 mt-20 rounded-md"
        onClick={() => setShowModal(true)}
      >
        request
      </button>
      {showModal ? (
        <div className=" w-[350px]">
          <form className="border-2 ml-10 h-[300px]">
            <div className="flex flex-col">

            <div className="flex flex-col">
                <label for="name" className="">
                  Name
                </label>
                <input className="" type="text" />
              </div>
              <div className="flex flex-col">
                <label for="name" className="">
                  Wallet-Address
                </label>
                <input className="" type="text" />
              </div>

              <div className="flex flex-row">
                <label for="name" className="">
                  Organisation
                </label>
                <div>
                  
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ml-2"
                  >
                    <option selected>Choose</option>
                    <option>Udemy</option>
                    <option >NPTEL</option>
                    <option>Coursera</option>
                    <option >SRM</option>
                  </select>
                </div>
                
                <input type="submit" value="done" className="ml-2 border-2 rounded-lg" />
                
                
              </div>

              <div className="flex flex-row">
                <label for="name" className="">
                  Certificates
                </label>
                <div>
                  
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ml-2"
                  >
                    <option selected>Choose</option>
                    <option>1</option>
                    <option >2</option>
                    <option>3</option>
                    <option >4</option>
                  </select>
                </div>
                
                <input type="submit" value="done" className="ml-2 border-2 rounded-lg" />
                
                
              </div>
            </div>
            <button className="px-2 py-2 bg-teal-700 text-white ml-10 mt-20 rounded-md" onClick={() => setShowModal(false)}>
              go
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default RequestModal;
