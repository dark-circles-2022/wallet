import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SmartAccountProvider } from "./contexts/SmartAccountContext";
import { Web3AuthProvider } from "./contexts/SocialLoginContext";
import "./index.css";
import "@biconomy/web3-auth/dist/src/style.css";

import { Box, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import {
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router";
import Onboard from "./screens/onboarding/Onboard";
import SetPassword from "./screens/onboarding/SetPassword";
import WalletName from "./screens/onboarding/WalletName";
import AddGuardians from "./screens/onboarding/AddGuardians";
import theme from "./theme";
import { createBrowserRouter } from "react-router-dom";
import WalletSelect from "./screens/onboarding/WalletSelectRecovery";
import PingGaurdian from "./screens/onboarding/PingGaurdian";
import AddFunds from "./screens/onboarding/AddFunds";
import WooHoo from "./screens/onboarding/WooHoo";
import Dashboard from "./screens/Dashboard";

const root = document.createElement("div");
root.id = "crx-root";
document.body.append(root);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Outlet />}>
      <Route path="/" element={<Onboard />} />
      {/* Create */}
      <Route path="create" element={<Outlet />}>
        <Route path="" element={<SetPassword />} />
        <Route path="1" element={<AddGuardians />} />
        <Route path="2" element={<WalletName />} />
        <Route path="3" element={<AddFunds />} />
        <Route path="4" element={<WooHoo />} />
      </Route>
      {/* Recover */}
      <Route path="recover" element={<Outlet />}>
        <Route path="" element={<WalletSelect />} />
        <Route path="1" element={<PingGaurdian />} />
        <Route path="2" element={<WooHoo />} />
      </Route>
      {/* Dashboard */}
      <Route path="dashboard" element={<Dashboard />} />
      {/* Test */}
      <Route path="test" element={<WooHoo />} />
    </Route>
  )
);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Web3AuthProvider>
      <SmartAccountProvider>
        {/* <App /> */}
        <ColorModeScript />
        <ChakraProvider theme={theme}>
          <Box
            maxW="20rem"
            maxH="35.5rem"
            w="20rem"
            h="35.5rem"
            m="auto"
            borderRadius={"1.25rem"}
            overflow="hidden"
            boxShadow="0px 4px 40px rgba(0, 0, 0, 0.1)"
            position={"relative"}
          >
            <RouterProvider router={router} />
          </Box>
        </ChakraProvider>
      </SmartAccountProvider>
    </Web3AuthProvider>
  </React.StrictMode>
);
