import { ConnectButton } from "@particle-network/connect-react-ui";
import SignUp from "./components/SignUp";
import "@particle-network/connect-react-ui/dist/index.css";

function App() {
	return (
		<div>
			<ConnectButton />
			<SignUp />
		</div>
	);
}

export default App;
