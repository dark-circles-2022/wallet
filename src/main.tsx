import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SmartAccountProvider } from "./contexts/SmartAccountContext";
import { Web3AuthProvider } from "./contexts/SocialLoginContext";
import "./index.css";

const root = document.createElement("div");
root.id = "crx-root";
document.body.append(root);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Web3AuthProvider>
      <SmartAccountProvider>
        <App />
      </SmartAccountProvider>
    </Web3AuthProvider>
  </React.StrictMode>
);
