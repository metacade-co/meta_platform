import { WagmiConfig, createClient, configureChains, goerli } from "wagmi";
import { connectorsForWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
  trustWallet,
  coinbaseWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { publicProvider } from "wagmi/providers/public";

import Footer from "src/components/Footer";
import Header from "src/components/Header";
import { AppBar, Box, Toolbar } from "@mui/material";
import SideBar from "src/components/SideBar";

import { fonts } from "src/fonts";

import "@rainbow-me/rainbowkit/styles.css";
import "src/styles/globals.css";

const drawerWidth = 87;

export default function App({ Component, pageProps }) {
  const { chains, provider, webSocketProvider } = configureChains([goerli], [publicProvider()]);

  const connectors = connectorsForWallets([
    {
      groupName: "Recommended",
      wallets: [
        metaMaskWallet({ chains }),
        trustWallet({ chains }),
        coinbaseWallet({ chains, appName: "MetaPlatform" }),
        walletConnectWallet({ chains }),
        rainbowWallet({ chains }),
      ],
    },
  ]);

  const client = createClient({
    autoConnect: true,
    connectors,
    provider,
    webSocketProvider,
  });

  return (
    <>
      <WagmiConfig client={client}>
        <RainbowKitProvider chains={chains}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
              <Header />
            </AppBar>
            <SideBar drawerWidth={drawerWidth} />
            <Box
              component="app"
              sx={{ marginLeft: "88px", display: "flex", flexDirection: "column", minHeight: `100vh` }}
            >
              <Box component="main" sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <Toolbar />
                <Component {...pageProps} />
              </Box>
              <Footer />
            </Box>
          </Box>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}
