import { ConnectButton } from "@particle-network/connect-react-ui";
import SignUp from "./components/Auth/SignUp";
import { Routes, Route } from "react-router-dom";
import "@particle-network/connect-react-ui/dist/index.css";
import UserReg from "./components/Forms/UserReg";
import LoginChoice from "./components/Auth/LoginChoice";
import OrgReg from "./components/Forms/OrgReg";
import UserDashboard from "./components/Dashboard/UserDashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/user/reg" element={<UserReg />} />
        <Route path="/mode" element={<LoginChoice />} />
        <Route path="/org/reg" element={<OrgReg />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="Navbar" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
