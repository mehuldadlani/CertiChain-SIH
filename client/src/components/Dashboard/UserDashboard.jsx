import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Ellipse from "../../assets/Ellipse .png";
import Profile from "../../assets/Profile.png";
import axios from "axios";
import { useAccount } from "@particle-network/connect-react-ui";
import { SBT_CONTRACT_ADDRESS } from "../../utils/ContractDetails";
import RequestModal from "../RequestModal";

const UserDashboard = () => {
	const [nfts, setNfts] = useState([]);
	const [name, setName] = useState("");
	const [loading, setLoading] = useState(false);
	const account = useAccount();
	const url = `https://polygon-mumbai.g.alchemy.com/v2/SOBXEUW5j6LP2EiyurQwh2PwSO7BIC0H/getNFTs/?owner=${account}`;
	const config = {
		method: "get",
		url: url,
	};

	useEffect(() => {
		setLoading(true);
		axios(config)
			.then((response) => {
				let data = response.data.ownedNfts.filter((nft) => {
					return nft.contract.address === SBT_CONTRACT_ADDRESS;
				});

				setNfts(data);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className="">
			<div>
				<div className="absolute z-[-1]">
					<img
						className=" overflow-hidden object-cover mix-blend-normal "
						src={Ellipse}
						alt=""
					></img>
				</div>

				<div className="relative">
					<Navbar />
					<div className="flex flex-row justify-between">
						<div className="mt-[57px] ml-10">
							<img src={Profile}></img>
							<h1 className="ml-6 mt-6 text-xl font-semibold">
								Welcome to your Dashboard{" "}
							</h1>
						</div>
						<div className="mt-44 mr-[60px]">
							<RequestModal account={account} />
						</div>
					</div>
				</div>
				<div className="flex flex-row pt-10 justify-between">
					<h1 className="text-xl font-semibold ml-16">Your Certificates</h1>
				</div>
				{loading ? (
					<div className="flex justify-center items-center">
						<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
					</div>
				) : (
					<div className="grid grid-cols-3 mx-20 pb-20">
						{nfts.map((nft) => (
							<div className="flex flex-col  justify-center items-center w-[350px] h-[350px] bg-inputBg/70 rounded-xl mt-8  ">
								<img
									className="w-[300px] h-[300px] object-cover pt-4 "
									src={nft.media[0].gateway}
									alt=""
								></img>
								<h1 className="text-xl font-semibold py-3">
									{nft.contractMetadata.name}
								</h1>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default UserDashboard;
