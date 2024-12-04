import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { mainnet } from "wagmi/chains";
import { WagmiProvider } from "wagmi";
import { _SERVICE } from "../declarations/ic_siwe_provider/ic_siwe_provider.did";
import { canisterId, idlFactory } from "../declarations/ic_siwe_provider/index";
import { SiweIdentityProvider } from "ic-use-siwe-identity";

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <SiweIdentityProvider<_SERVICE>
            canisterId={canisterId}
            idlFactory={idlFactory}
          >
            <App />
          </SiweIdentityProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>,
);
