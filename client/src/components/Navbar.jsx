import React from "react";
import mainLogo from "../assets/mainLogo.png";
import { ConnectButton } from "@particle-network/connect-react-ui";
import "@particle-network/connect-react-ui/dist/index.css";
import { useAccount } from "@particle-network/connect-react-ui";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const account = useAccount();
  const navigate = useNavigate();

  if (!account) {
    navigate("/");
  }

  return (
    <div>
      <div>
        <div className="flex flex-row justify-between pt-10 h-screen">
          <div className="ml-10 ">
            <img src={mainLogo}></img>
          </div>

          <div className="flex flex-rows justify-around space-x-4 mr-10  ">
            <div className="flex flex-row mr-[261px] space-x-24  ">
              <h1 className="text-homeBg">Home</h1>
              <h1 className="text-issueBg">Issue</h1>
              <h1 className="text-issueBg">Profile</h1>
            </div>

            <div className="">
              <ConnectButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
