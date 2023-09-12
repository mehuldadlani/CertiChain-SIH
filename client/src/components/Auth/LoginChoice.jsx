import React from "react";
import greenLink from "../../assets/greenLink.png";
import redLink from "../../assets/redLink.png";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const LoginChoice = () => {
  const navigate = useNavigate();

  const handleUser = () => {
    navigate("/user/login");
  };

  const handleOrg = () => {
    navigate("/org/login");
  };

  return (
    <div className="flex flex-col items-center justify-center mt-32 ">
      <div className="flex w-[237px] h-11 justify-center items-center gap-1 shrink-0 relative">
        <img src={greenLink} className="w-5 h-5 shrink-0" />
        <img
          src={redLink}
          className="w-5 h-5 shrink-0 absolute left-1 bottom-1"
        />
        <img className="w-[189px] h-5 shrink-0" src={logo} />
      </div>
      <div className="shrink-0 flex justify-center items-center mt-20">
        <div className="w-[309px] rounded-3xl bg-signUpBg shadow-xs flex flex-col justify-around items-center xl:w-[479px] xl:h-[262px]">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginChoice;
