import React from "react";
import mainLogo from "../assets/mainLogo.png";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className="flex flex-row justify-between mt-[30px]">
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
              <button className="bg-walletBg text-white py-1 px-4  rounded-md">Connect Wallet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
