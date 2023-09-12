import React from "react";
import greenLink from "../../assets/greenLink.png";
import redLink from "../../assets/redLink.png";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { ConnectButton } from "@particle-network/connect-react-ui";
import { useAccount } from "@particle-network/connect-react-ui";
import "@particle-network/connect-react-ui/dist/index.css";
import axios from "axios";

const LoginChoice = () => {
  const navigate = useNavigate();
  const account = useAccount();

  if (!account) {
    navigate("/");
  }

  const handleUser = async () => {
    const isUserReg = await axios.get(
      `http://localhost:8080/api/v1/users/${account}`
    );
    if (isUserReg?.data.success === true) {
      navigate("/user/dashboard");
    } else {
      navigate("/user/reg");
    }
  };

  const handleOrg = () => {
    navigate("/org/reg");
  };

  return (
    <div className="bg-mainBg">
      <div className="flex flex-col items-center pt-28 h-screen">
        <div className="flex w-[237px] h-11 justify-center items-center gap-1 shrink-0 relative">
          <img src={greenLink} className="w-5 h-5 shrink-0" />
          <img
            src={redLink}
            className="w-5 h-5 shrink-0 absolute left-1 bottom-1"
          />
          <img className="w-[189px] h-5 shrink-0" src={logo} />
        </div>
        <div className="shrink-0 flex justify-center items-center mt-20 h-max">
          <div className="w-[309px] h-full rounded-3xl bg-signUpBg shadow-xs flex flex-col justify-around items-center xl:w-[479px] p-20">
            <div className="w-max flex flex-col items-center justify-between">
              <div className="text-center text-black Inder font-semibold text-xl pb-14">
                How do you want to proceed?
              </div>
              <div className="flex flex-row">
                <button className="w-max h-11 shrink-0 rounded-3xl bg-signInGradient flex items-center justify-center mx-2 px-4">
                  <div
                    className="text-[#FFF] Inder text-sm font-normal"
                    onClick={handleUser}
                  >
                    Continue as a User
                  </div>
                </button>
                <button className="w-max h-11 shrink-0 rounded-3xl bg-signInGradient flex items-center justify-center mx-2 px-4">
                  <div
                    className="text-[#FFF] Inder text-sm font-normal"
                    onClick={handleOrg}
                  >
                    Continue as an Organisation
                  </div>
                </button>
              </div>
              <div className="h-max pt-14">
                <ConnectButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginChoice;
