import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MockCreateWallet from "./screens/mock_create_wallet";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={chrome.runtime.getURL(logo)}
          className="App-logo"
          alt="logo"
        />
        <p>Wallet popup</p>
        <p>{/* <MockCreateWallet /> */}</p>
        <p>
          <code>App.tsx</code> and save to test HMR updates.
        </p>
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
