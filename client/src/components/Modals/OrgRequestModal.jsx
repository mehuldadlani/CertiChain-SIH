import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useAccount } from "@particle-network/connect-react-ui";
import axios from "axios";

const OrgRequestModal = () => {
  const account = useAccount();
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/organisations/${account}`)
      .then((response) => {
        let orgName = response.data.data.orgName;
        axios.get("http://localhost:8080/api/v1/requests").then((response) => {
          let data = response.data.filter((request) => {
            return (
              request.status === "REQUESTED" && request.orgName === orgName
            );
          });
          setRequests(data);
          console.log(requests);
        });
      });
  }, [showRequestModal]);

  return (
    <div>
      <ToastContainer />
      {!showRequestModal ? (
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowRequestModal(true)}
        >
          Request Certificate
        </button>
      ) : (
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
                  <div class="sm:flex sm:items-">
                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h1 className="text-xl font-semibold mb-4">
                        Pending Certificate Requests
                      </h1>
                      <div class="mt-2">
                        {requests.length === 0 ? (
                          <h1 className="text-lg text-gray-600">
                            No Pending Requests
                          </h1>
                        ) : (
                          <div className="">
                            {requests.map((request, index) => (
                              <div className="flex flex-row justify-between">
                                <div
                                  className="flex flex-col justify-around px-10 py-1"
                                  key={index}
                                >
                                  <h1 className="text-xl font-semibold">
                                    {request.certName}
                                  </h1>
                                  <div className="text-sm text-gray-600 font-semibold">
                                    <p>Requested By: {request.userName} </p>
                                    <p>Having ID: {request.aadharNumber} </p>
                                  </div>
                                </div>
                                <div className="button-container">
                                  <button
                                    type="button"
                                    class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto mt-5"
                                    onClick={() => {
                                      toast.success(
                                        "Certificate Approved Successfully"
                                      );
                                    }}
                                  >
                                    Approve
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setShowRequestModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrgRequestModal;
