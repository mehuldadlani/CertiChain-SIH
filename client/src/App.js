import { ConnectButton } from "@particle-network/connect-react-ui";
import SignUp from "./components/Auth/SignUp";
import { Routes, Route } from "react-router-dom";
import "@particle-network/connect-react-ui/dist/index.css";
import UserReg from "./components/Forms/UserReg";
import LoginChoice from "./components/Auth/LoginChoice";
import OrgReg from "./components/Forms/OrgReg";
import CertDispurse from "./components/Forms/CertDispurse";
import UserDashboard from "./components/Dashboard/UserDashboard";
import OrgDashboard from "./components/Dashboard/OrgDashboard";
import RequestModal from "./components/RequestModal";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<SignUp />} />
				<Route path="/user/reg" element={<UserReg />} />
				<Route path="/mode" element={<LoginChoice />} />
				<Route path="/org/reg" element={<OrgReg />} />
				<Route path="/org/certdisp" element={<CertDispurse />} />
				<Route path="/user/dashboard" element={<UserDashboard />} />
				<Route path="/org/dashboard" element={<OrgDashboard />} />
        <Route path="/req/modal" element={<RequestModal />} />
			</Routes>
		</div>
	);
}

export default App;
