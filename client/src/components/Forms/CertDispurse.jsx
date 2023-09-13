import { ethers } from "ethers";
import React, { useState, useEffect, useRef } from "react";
import { Web3Storage } from "web3.storage";
import mainLogo from "../../assets/mainLogo.png";
import CertificateCanvas from "./CertficateCanvas";

import {
	SBT_CONTRACT_ADDRESS,
	SBT_CONTRACT_ABI,
} from "../../utils/ContractDetails.jsx";

export default function CertDispurse() {
	const [logo, setLogo] = useState(mainLogo);
	const [name, setName] = useState("");
	const [organisationName, setOrganisationName] = useState("");
	const [address, setAddress] = useState("");
	const [signature, setSignature] = useState("");
	const [ticketUrl, setTicketUrl] = useState("");
	const [certificateDetails, setCertificateDetails] = useState([]);

	useEffect(() => {
		if (ticketUrl && ticketUrl !== "") {
			continueMinting();
		}
	}, [ticketUrl]);

	const continueMinting = async () => {
		try {
			console.log("Begin");
			const { ethereum } = window;

			if (ethereum) {
				console.log("Going to pop wallet to connect");

				const provider = new ethers.providers.Web3Provider(window.ethereum);

				const signer = provider.getSigner();
				const connectedContract = new ethers.Contract(
					SBT_CONTRACT_ADDRESS,
					SBT_CONTRACT_ABI,
					signer
				);
				const accounts = await ethereum.request({
					method: "eth_requestAccounts",
				});
				console.log("Connected", accounts[0]);

				function getAccessToken() {
					return process.env.REACT_APP_ACCESS_TOKEN;
				}

				function makeStorageClient() {
					return new Web3Storage({ token: getAccessToken() });
				}

				async function makeFileObjects(datauri) {
					// console.log(datauri);
					var arr = datauri.split(","),
						mime = arr[0].match(/:(.*?);/)[1],
						bstr = atob(arr[1]),
						n = bstr.length,
						u8arr = new Uint8Array(n);
					while (n--) {
						u8arr[n] = bstr.charCodeAt(n);
					}
					return [new File([u8arr], "nftURI.png", { type: mime })];
				}
				async function storeFiles(datauri) {
					const files = await makeFileObjects(datauri);
					const client = makeStorageClient();
					const cid = await client.put(files, { wrapWithDirectory: false });
					return cid;
				}

				const ImageCID = await storeFiles(ticketUrl);

				async function makeFileObjects1(questions) {
					const files = [new File([questions], "nftInfo.json")];

					return files;
				}

				async function storeFiles1(datauri) {
					const files = await makeFileObjects1(datauri);
					const client = makeStorageClient();
					const cid = await client.put(files, { wrapWithDirectory: false });
					return cid;
				}

				const metadata = JSON.stringify({
					name: `Certificate of ${name}`,
					description: "Soulbound certificate for the attendees",
					image: `ipfs://${ImageCID}`,
				});

				console.log(metadata);
				const QuestionCID = await storeFiles1(metadata);
				console.log(`${QuestionCID}`);

				let minting = await connectedContract.safeMint(
					`${address}`,
					`ipfs://${QuestionCID}`
				);
				console.log("Minting: Process started");
				await minting.wait();
				console.log("Minting: Process finished");
			} else {
				console.log("Ethereum object doesn't exist!");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const generateCertificate = async () => {
		function getAccessToken() {
			return process.env.REACT_APP_ACCESS_TOKEN;
		}

		function makeStorageClient() {
			return new Web3Storage({ token: getAccessToken() });
		}

		const storeImage = async (files) => {
			console.log("Uploading image to IPFS with web3.storage....");
			const client = makeStorageClient();
			const cid = await client.put([files], { wrapWithDirectory: false });
			console.log("Stored Image with cid:", cid);
			return cid;
		};

		const logoCID = await storeImage(logo);

		const signatureCID = await storeImage(signature);

		setCertificateDetails({
			name: name,
			logo: `https://ipfs.io/ipfs/${logoCID}`,
			signature: `https://ipfs.io/ipfs/${signatureCID}`,
			organisationName: organisationName,
		});
	};

	return (
		<div className="bg-mainBg h-screen">
			<div className="flex w-[237px] h-11 mx-auto pt-20 justify-center items-center gap-1 shrink-0 relative">
				<img className="" src={mainLogo} />
			</div>
			<div className="">
				<div className="pt-24 ">
					<div className="h-[580px] w-[767px] m-auto bg-formBg/40 rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.25)]   ">
						<h1 className="text-center text-[22px] p-[33px]">
							DISPURSE CERTIFICATES
						</h1>
						<div className="flex flex-col mt-2 m-auto">
							<div className="flex flex-col">
								<div class=" px-20 ">
									ADDRESS
									<input
										type="text"
										id="email"
										class="h-[42px] w-[580.83px] bg-inputBg/70 rounded-3xl  shadow-[inset_2.0px_2.0px_4.0px_rgba(0,0,0,0.25)] p-4 placeholder:pl-2"
										placeholder="Enter your Address"
										required
										onChange={(e) => setAddress(e.target.value)}
									/>
								</div>
								<div class=" px-20 mt-4">
									NAME
									<input
										type="Name"
										id="Name"
										className="h-[42px] w-[580.83px] bg-inputBg/70 rounded-3xl  shadow-[inset_2.0px_2.0px_4.0px_rgba(0,0,0,0.25)] p-4 placeholder:pl-2"
										placeholder="Enter your Name"
										required
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
								<div class=" px-20 mt-4">
									ORGANISATION NAME
									<input
										type="Name"
										id="Name"
										className="h-[42px] w-[580.83px] bg-inputBg/70 rounded-3xl  shadow-[inset_2.0px_2.0px_4.0px_rgba(0,0,0,0.25)] p-4 placeholder:pl-2"
										placeholder="Enter the Organisation Name"
										required
										onChange={(e) => setOrganisationName(e.target.value)}
									/>
								</div>

								<div class=" px-20 mt-4">
									<p>Logo</p>
									<input
										type="file"
										className="h-[42px] w-[580.83px] bg-inputBg/70 rounded-3xl  shadow-[inset_2.0px_2.0px_4.0px_rgba(0,0,0,0.25)] p-4 placeholder:pl-2"
										accept="image/png, image/jpeg"
										onChange={(e) => setLogo(e.target.files[0])}
									/>
								</div>

								<div class=" px-20 mt-4">
									<p>Signature</p>
									<input
										type="file"
										className="h-[42px] w-[580.83px] bg-inputBg/70 rounded-3xl  shadow-[inset_2.0px_2.0px_4.0px_rgba(0,0,0,0.25)] p-4 placeholder:pl-2"
										accept="image/png, image/jpeg"
										onChange={(e) => setSignature(e.target.files[0])}
									/>
								</div>
							</div>
							<div className=" m-auto mt-8">
								<button
									onClick={generateCertificate}
									className=" bg-loginBg text-white px-6 py-2 rounded-3xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.25)] "
								>
									SUBMIT DETAILS
								</button>
							</div>
							<div className="hidden">
								<CertificateCanvas
									ticketDetails={certificateDetails}
									setTicketUrl={setTicketUrl}
									height="350px"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
