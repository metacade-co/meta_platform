const styles = {
  homePlayersReadyText: {
    padding: "44px 0 28px",
    fontFamily: "var(--font-joystix)",
    background: "linear-gradient(90.06deg, #EF692A 0.05%, #F1E917 99.25%)",
    backgroundClip: "text",
    textFillColor: "transparent",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "400",
    fontSize: "48px",
    lineHeight: "48px",
  },

  homeWelcomeMessage: {
    fontFamily: "var(--font-gosha-sans)",
    textAlign: "center",
  },

  homeWelcomeMessageWrapper: {
    display: "inline-block",
    padding: "8px 12px",
    backgroundColor: "#111111",
    borderRadius: "8px",
  },

  homeFeaturedGamesSection: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "0px 78px",
    margin: "0 auto",
  },

  homeFeaturedGamesSectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "40px",

    "& h5": {
      fontFamily: "var(--font-joystix)",
      fontSize: "20px",
      fontWeight: "400",
      "&:last-of-type": {
        color: "#F6C928",
      },
    },
  },

  homeSwiperButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: "-50px",
    zIndex: "10",
  },

  homeSwiperContainer: {
    position: "relative",
  },

  homeSwiper: {
    overflow: "hidden !important",
  },

  homeDivider: {
    border: "none",
    height: "1px",
    background: "#333333",
    margin: "60px 0",
  },

  homeExploreSection: {
    display: "flex",
    minHeight: "1200px",
    flexDirection: "column",
    padding: "0 76px",

    "& > button": {
      alignSelf: "center",
      marginTop: "80px",
    },
  },

  homeExploreSectionImage: {
    width: "100%",
    height: "auto",
  },

  homeExploreSectionHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: "26px",
    justifyContent: "space-between",
  },

  homeExploreSectionHeaderText: {
    flexGrow: "0",
    fontFamily: "var(--font-gosha-sans)",
    "& > h5": {
      fontWeight: "400",
      fontSize: "20px",
      lineHeight: "24px",
      marginBottom: "10px",
    },
    "& > h6": {
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "22px",
    },
  },

  homeExporeSectionHeaderButtons: {
    flexGrow: "0.5",
    display: "flex",
    justifyContent: "space-between",
    "& > button": {
      clipPath:
        "polygon(0 8px,4px 8px,4px 4px,8px 4px,8px 0,calc(100% - 8px) 0,calc(100% - 8px) 4px,calc(100% - 4px) 4px,calc(100% - 4px) 8px,100% 8px,100% calc(100% - 8px),calc(100% - 4px) calc(100% - 8px),calc(100% - 4px) calc(100% - 4px),calc(100% - 8px) calc(100% - 4px),calc(100% - 8px) 100%,8px 100%,8px calc(100% - 4px),4px calc(100% - 4px),4px calc(100% - 8px),0 calc(100% - 8px))",
    },
  },
};

export default styles;
