import Footer from "src/components/Footer";
import Header from "src/components/Header";
import { Global, css } from "@emotion/react";
import { AppBar, BottomNavigationAction, Box, Drawer, List, ThemeProvider, Toolbar } from "@mui/material";
import "@/styles/globals.css";
import { fonts } from "src/fonts";
import { ArcadeIcon, CommunityIcon, TrendingIcon, GrantsIcon, HomeIcon, LaunchpadIcon } from "src/assets/icons";

const drawerWidth = 87;

export default function App({ Component, pageProps }) {
  const NavigationItems = [
    {
      icon: <HomeIcon />,
      text: "Home",
    },
    {
      icon: <TrendingIcon />,
      text: "Trending",
    },
    {
      icon: <ArcadeIcon />,
      text: "Arcade",
    },
    {
      icon: <CommunityIcon />,
      text: "Community",
    },
    {
      icon: <LaunchpadIcon />,
      text: "Launchpad",
    },
    {
      icon: <GrantsIcon />,
      text: "Grants",
    },
  ];

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
          <Header />
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "black",
              color: "white",
              borderRight: "1px solid#222222",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <List sx={{ display: "flex", flexDirection: "column", gap: "60px", padding: 0 }}>
            {NavigationItems.map((item) => (
              <BottomNavigationAction
                showLabel={true}
                key={item.text}
                sx={{
                  ".MuiBottomNavigationAction-label": {
                    color: "#ffffff",
                    fontFamily: "var(--font-retro-gaming)",
                    textTransform: "uppercase",
                    marginTop: "16px",
                    fontSize: "11px",
                  },
                }}
                label={item.text}
                icon={item.icon}
              />
            ))}
          </List>
        </Drawer>
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
