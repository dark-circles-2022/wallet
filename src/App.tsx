import React, { Suspense, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MockCreateWallet from "./screens/mock_create_wallet";
import { useWeb3AuthContext } from "./contexts/SocialLoginContext";
const SocialLoginDynamic = React.lazy(
  () => import("./screens/mock_create_wallet")
);

function App() {
  const [count, setCount] = useState(0);
  const { provider, address, ethersProvider } = useWeb3AuthContext();
  console.log("madarchod1", provider);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={chrome.runtime.getURL(logo)}
          className="App-logo"
          alt="logo"
        />
        <Suspense fallback={<div>Loading...</div>}>
          <SocialLoginDynamic />
        </Suspense>
        <code>App.tsx</code> and save to test HMR updates.
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
