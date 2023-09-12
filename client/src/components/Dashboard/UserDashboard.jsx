import React, { useState } from "react";
import Navbar from "../Navbar";
import Ellipse from "../../assets/Ellipse .png";
import Profile from "../../assets/Profile.png";
import axios from "axios";
import { useAccount } from "@particle-network/connect-react-ui";;
import  Search  from "../../assets/Search.png";

const UserDashboard = () => {
  const [nfts, setNfts] = useState([]);
  const account = useAccount();
  const url = `https://polygon-mumbai.g.alchemy.com/v2/SOBXEUW5j6LP2EiyurQwh2PwSO7BIC0H/getNFTs/?owner=${account}`;
  const config = {
    method: "get",
    url: url,
  };

  axios(config)
    .then((response) => {
      setNfts(response.data.ownedNfts);
      console.log(nfts);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="">
      <div className="absolute">
        <img
          className=" overflow-hidden object-cover mix-blend-normal"
          src={Ellipse}
          alt=""
        ></img>
      </div>

      <div className="relative">
        <Navbar />
        <div className="flex flex-row justify-between">

          <div className="mt-[57px] ml-10">
            <img src={Profile}></img>
            <h1 className="ml-6 mt-6 text-xl font-semibold">Welcome, User</h1>
          </div>

          <div> 
            <div className="w-[213px] h-[33px] bg-searchBg mt-[270px] rounded-xl mr-24">
              <img className="ml-[181px] py-1" src={Search}></img>

            </div>

          </div>
        </div>
      </div>
      {nfts.map((nft) => (
        <div className="flex flex-row justify-center">
          <div className="flex flex-col justify-center items-center w-[300px] h-[300px] bg-white rounded-xl mt-10">
            <img
              className="w-[200px] h-[200px] object-cover"
              src={nft.media[0].gateway}
              alt=""
            ></img>
            <h1 className="text-xl font-semibold">{nft.contractMetadata.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserDashboard;
