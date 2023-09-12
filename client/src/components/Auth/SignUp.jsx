import { ConnectButton } from "@particle-network/connect-react-ui";
import greenLink from "../../assets/greenLink.png";
import redLink from "../../assets/redLink.png";
import logo from "../../assets/logo.png";
import signInLogo from "../../assets/signInLogo.png";
export default function SignUp() {
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
				<div className="w-[309px] h-max py	-6 shrink-0 rounded-3xl bg-signUpBg shadow-xs flex flex-col justify-center items-center xl:w-[479px] xl:h-[262px]">
					<div className="w-[140px] h-[209px] shrink-0 flex flex-col items-center justify-between">
						<div className="shrink-0 text-center text-black Inder font-semibold text-xl leading-5">
							Sign Up
						</div>
						<button className="w-[180px] h-11 shrink-0 rounded-3xl bg-signInGradient flex items-center justify-center">
							<img className="w-9 h-8 shrink-0 opacity-90" src={signInLogo} />
							<div className="text-[#FFF] Inder text-sm font-normal">
								<ConnectButton.Custom>
									{({ account, openConnectModal }) => {
										return (
											<div>
												<button onClick={openConnectModal} disabled={!!account}>
													{!account ? "Connect Wallet" : account}
												</button>
											</div>
										);
									}}
								</ConnectButton.Custom>
							</div>
						</button>
						<div className="shrink-0 flex items-center">
							<div className="text-black Inder text-xs font-semibold shrink-0">
								Already a member?
							</div>
							<button className="shrink-0 Inder text-xs font-medium text-[#1B80DE]">
								Sign In
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
