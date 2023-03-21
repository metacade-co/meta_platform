import Footer from "src/components/Footer";
import Header from "src/components/Header";
import { AppBar, Box, Toolbar } from "@mui/material";
import { fonts } from "src/fonts";
import "@/styles/globals.css";
import SideBar from "@/components/SideBar";

const drawerWidth = 87;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
          <Header />
        </AppBar>
        <SideBar drawerWidth={drawerWidth} />
        <Box component="app" sx={{ marginLeft: "88px", display: "flex", flexDirection: "column", minHeight: `100vh` }}>
          <Box component="main" sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
            <Toolbar />
            <Component {...pageProps} />
          </Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
}
