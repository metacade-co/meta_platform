import { ArcadeIcon, CommunityIcon, TrendingIcon, GrantsIcon, HomeIcon, LaunchpadIcon } from "src/assets/icons";

const NavigationItems = [
  {
    icon: <HomeIcon />,
    text: "Home",
    path: "/",
  },
  {
    icon: <TrendingIcon />,
    text: "Trending",
    path: "/trending",
  },
  {
    icon: <ArcadeIcon />,
    text: "Arcade",
    path: "/arcade",
  },
  {
    icon: <CommunityIcon />,
    text: "Community",
    path: "/community",
  },
  {
    icon: <LaunchpadIcon />,
    text: "Launchpad",
    path: "/launchpad",
  },
  {
    icon: <GrantsIcon />,
    text: "Grants",
    path: "/grants",
  },
];

export default NavigationItems;
