import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ModalProvider } from "@particle-network/connect-react-ui";
import { WalletEntryPosition } from "@particle-network/auth";
import { Ethereum, EthereumGoerli } from "@particle-network/chains";
import { evmWallets } from "@particle-network/connect";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ModalProvider
      options={{
        projectId:"d1018e4c-798c-468f-a3e3-cdfd93f9f85c",
        clientKey:"c1zo4wfEEaguPrwEpwqW1tEIQ2a3dMMr0gFHkIEJ",
        appId:"4a3c3ddf-d154-41f3-9788-1db35debeea9",
        chains: [Ethereum, EthereumGoerli],
        particleWalletEntry: {
          displayWalletEntry: true, //display wallet button when connect particle success.
          defaultWalletEntryPosition: WalletEntryPosition.BR,
          supportChains: [Ethereum, EthereumGoerli],
          customStyle: {}, //optional: custom wallet style
        },
        securityAccount: {
          promptSettingWhenSign: 1,
          promptMasterPasswordSettingWhenLogin: 1,
        },
        wallets: [...evmWallets({ qrcode: true })],
      }}
      theme={"auto"}
      language={"en"}
      walletSort={["Particle Auth"]}
      particleAuthSort={["email", "phone", "google", "apple", "facebook"]}
    >
      <App />
    </ModalProvider>
   </BrowserRouter>
   
);
