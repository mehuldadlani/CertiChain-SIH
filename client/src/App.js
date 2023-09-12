import { ConnectButton } from "@particle-network/connect-react-ui";
import SignUp from "./components/Auth/SignUp";
import { Routes, Route } from "react-router-dom"
import "@particle-network/connect-react-ui/dist/index.css";
import UserReg from "./components/Forms/UserReg";

function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={ <SignUp/> } />
        <Route path="UserReg" element={ <UserReg/> } />

        </Routes>
    </div>
  );
}

export default App;
