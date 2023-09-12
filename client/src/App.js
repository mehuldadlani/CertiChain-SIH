import { ConnectButton } from "@particle-network/connect-react-ui";
import SignUp from "./components/SignUp";
import { Routes, Route } from "react-router-dom"
import "@particle-network/connect-react-ui/dist/index.css";

function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={ <SignUp/> } />
        </Routes>
    </div>
  );
}

export default App;
