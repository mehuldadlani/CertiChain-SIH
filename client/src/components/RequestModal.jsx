import React from "react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const RequestModal = (props) => {
  const account = props.account;
  const [showModal, setShowModal] = useState(false);
  const [certName, setCertName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [userName, setUserName] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");

  const handleSubmit = async () => {
    const nameInfo = await axios.get(
      `http://localhost:8080/api/v1/users/${account}`
    );

    setUserName(nameInfo.data.name);

    const data = await axios.post(`http://localhost:8080/api/v1/requests`, {
      certName,
      orgName,
      userName,
      aadharNumber,
      walletAddress: account,
    });

    toast.success("Hold on tight for approval!");

    setShowModal(false);
  };

  return (
    <div>
      <ToastContainer />
      <button
        className="px-2 py-2 bg-inputBg/70 text-black ml-10 mt-20 rounded-md"
        onClick={() => setShowModal(true)}
      >
        Request Certificate
      </button>
      {showModal ? (
        <div
          class="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="">
                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h1 className="text-xl font-semibold mb-4">
                        Request for a Certificate
                      </h1>
                      <div class="">
                        <div className="p-4 w-full">
                          <div className="flex flex-col">
                            <div className="flex flex-col mb-2">
                              <label
                                for="name"
                                className="block mb-1 text-md font-medium text-black"
                              >
                                NAME
                              </label>
                              <input
                                className="bg-inputBg/70 pl-4 py-1 rounded-lg  shadow-[inset_2.0px_2.0px_4.0px_rgba(0,0,0,0.25)] placeholder:text-sm"
                                type="text"
                                placeholder="Enter Your Name"
                                onChange={(e) => setUserName(e.target.value)}
                              />
                            </div>
                            <div className="flex flex-col my-2">
                              <label
                                for="name"
                                className="block mb-1 text-md font-medium text-black"
                              >
                                Aadhar Number
                              </label>
                              <input
                                className="bg-inputBg/70 rounded-lg py-1 shadow-[inset_2.0px_2.0px_4.0px_rgba(0,0,0,0.25)] pl-4 placeholder:text-sm"
                                type="text"
                                placeholder="Enter Your Aadhar Number"
                                onChange={(e) =>
                                  setAadharNumber(e.target.value)
                                }
                              />
                            </div>

                            <div className="flex flex-col my-2">
                              <label
                                for="name"
                                className="block mb-1 text-md font-medium text-black"
                              >
                                Organisation
                              </label>
                              <div>
                                <select
                                  id="organizationSelect"
                                  className="bg-inputBg/70 px-2 py-1 rounded-lg"
                                  placeholder="Select Organization"
                                  onChange={(e) => setOrgName(e.target.value)}
                                >
                                  <option disabled selected>
                                    Select an Organization
                                  </option>
                                  <option value="org1">Organization 1</option>
                                  <option value="org2">Organization 2</option>
                                  <option value="org3">Organization 3</option>
                                  <option value="org4">Organization 4</option>
                                </select>
                              </div>
                            </div>

                            <div className="flex flex-col my-2">
                              <label
                                for="name"
                                className="block mb-1 text-md font-medium text-black"
                              >
                                Certification
                              </label>
                              <div>
                                <select
                                  id="organizationSelect"
                                  className="bg-inputBg/70 px-2 py-1 rounded-lg"
                                  placeholder="Select Certification"
                                  onChange={(e) => setCertName(e.target.value)}
                                >
                                  <option disabled selected>
                                    Select an Certification
                                  </option>
                                  <option value="org1">Certificate 1</option>
                                  <option value="org2">Certificate 2</option>
                                  <option value="org3">Certificate 3</option>
                                  <option value="org4">Certificate 4</option>
                                </select>
                              </div>
                            </div>
                            <div class=" py-3 sm:flex sm:flex-row-reverse ">
                              <button
                                type="button"
                                class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                onClick={() => setShowModal(false)}
                              >
                                Close
                              </button>
                              <button
                                class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                                onClick={() => handleSubmit()}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : // <div className=" w-[500px] absolute ">
      //   <form className="border-2 mr-[310px] h-[250px] mt-4 p-4">
      //     <div className="flex flex-col">
      //       <div className="flex flex-col">
      //         <label for="name" className="block mb-1 text-sm font-medium text-black">
      //           NAME
      //         </label>
      //         <input className="bg-inputBg/70 rounded-3xl  shadow-[inset_2.0px_2.0px_4.0px_rgba(0,0,0,0.25)] placeholder:pl-4 placeholder:text-sm" type="text" placeholder="Enter Your Name" />
      //       </div>
      //       <div className="flex flex-col  mt-2">
      //         <label for="name" className="block mb-1 text-sm font-medium text-black">
      //           WALLET ADDRESS
      //         </label>
      //         <input className="bg-inputBg/70 rounded-3xl  shadow-[inset_2.0px_2.0px_4.0px_rgba(0,0,0,0.25)]" type="text" />
      //       </div>

      //       <div className="flex flex-row mt-2">
      //         <label for="name" className="block  text-sm  text-black">
      //           Organisation
      //         </label>
      //         <div>
      //           <select
      //             id=""
      //             class=" text-gray-900 text-xs rounded-xs ml-4 px-1  w-4"
      //           >
      //             <option selected>
      //               <ArrowDownIcon />
      //             </option>
      //             <option>Udemy</option>
      //             <option>NPTEL</option>
      //             <option>Coursera</option>
      //             <option>SRM</option>
      //           </select>

      //         </div>
      //         <div>
      //             <input
      //               type="checkbox"
      //               className=" border-2 rounded-lg w-12 mr-8"
      //             />
      //           </div>
      //       </div>

      //       <div className="flex flex-row">
      //         <label for="name" className="block  text-sm  text-black">
      //           Certificates
      //         </label>
      //         <div>
      //           <select
      //             id=""
      //             class=" text-gray-900 text-xs rounded-xs ml-[27px] px-1  w-4"
      //           >
      //             <option selected>
      //               <ArrowDownIcon />
      //             </option>
      //             <option>1</option>
      //             <option>2</option>
      //             <option>3</option>
      //             <option>4</option>
      //           </select>

      //         </div>
      //         <div>
      //             <input
      //               type="checkbox"
      //               className=" border-2 rounded-lg w-12 mr-8"
      //             />
      //           </div>
      //       </div>

      //     </div>
      //     <button
      //       className="bg-loginBg text-white  px-4 py-1 ml-1 mt-6  text-sm rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.15)]"
      //       onClick={() => setShowModal(false)}
      //     >
      //       Submit
      //     </button>
      //   </form>
      // </div>
      null}
    </div>
  );
};

export default RequestModal;
