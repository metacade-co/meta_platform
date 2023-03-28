import { BottomNavigationAction, Drawer, List, Toolbar } from "@mui/material";
import { useRouter } from "next/router";
import NavigationItems from "src/components/SideBar/NavigationItems";

function SideBar({ drawerWidth }) {
  const router = useRouter();

  return (
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
            onClick={() => router.push(item.path)}
            showLabel={true}
            key={item.text}
            sx={{
              ".MuiBottomNavigationAction-label": {
                color: "#ffffff",
                fontFamily: "var(--font-joystix)",
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
  );
}

export default SideBar;
