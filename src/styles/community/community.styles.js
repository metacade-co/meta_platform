const styles = {
  communityPage: {
    fontFamily: "var(--font-gosha-sans)",
    margin: "44px 76px",
  },

  communityPageHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "28px",
  },
  communityPageArrow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "30px 0",

    "& > svg": {
      transform: "rotate(-90deg)",
    },
  },
  communityPageHeading: {
    fontFamily: "var(--font-joystix)",
    fontWeight: "400",
    fontSize: "48px",
    lineHeight: "48px",
    textAlign: "center",
    background: "linear-gradient(90.06deg, #EF692A 0.05%, #F1E917 99.25%)",
    backgroundClip: "text",
    textFillColor: "transparent",
  },

  communityHeaderButtons: {
    display: "flex",
    gap: "16px",
    "& > button": {
      background: "none",
      "&:hover": {
        background: "#FFFFFF",
        color: "#000000",
      },
    },
  },

  communityPageMetacadeComminityIcons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "24px",
    marginBottom: "46px",
  },

  communityPageSocials: {
    display: "flex",
    alignItems: "center",
    gap: "24px",

    "& svg > circle": {
      fill: "#1A1B23",
    },
  },
  playersOnlineCircle: {
    display: "inline-block",
    background: "#23C415",
    borderRadius: "50%",
    width: "6px",
    height: "6px",
  },

  web3GamingTable: {
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#B0AEB4",

    "& > div:first-of-type": {
      marginBottom: "4px",
    },
    "& > div:not(:first-of-type)": {
      padding: "12px 0",
      borderBottom: "1px solid #333333",
      "& > div:last-of-type": {
        textAlign: "end",
      },
    },
  },

  web3GamingTableRow: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "0.2fr 0.4fr 2fr 0.5fr 1.5fr",
    color: "#FFFFFF",
  },

  communityPageActiveUsersBlock: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "22px",
  },

  communityPageCardsSection: {
    "& > div": {
      marginBottom: "24px",
    },
  },

  communityPageCardsSectionRow: {
    display: "flex",
    gap: "24px",
    "& > div": {
      flex: "1 1 33.3%",
    },
  },

  communityPageCardsSectionRowSocials: {
    display: "flex",
    gap: "64px",
    marginTop: "28px",
  },

  communityPageCardsSectionRowColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    "& > div": {
      flex: "1 1 33.3%",
    },
  },

  communityPageCardsSectionRowColumnPlayersOnline: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    gap: "16px",

    "& > span": {
      width: "40px",
      height: "40px",
      background: "#B0AEB4",
      borderRadius: "50%",
    },

    "& > div > p": {
      display: "flex",
      alignItems: "center",
      gap: "10px",

      "&:first-of-type": {
        fontWeight: "700",
        fontSize: "16px",
        lineHeight: "22px",
        color: "#8A939B",
      },
    },
  },
  communityPageArticle: {
    display: "flex",
    gap: "24px",

    "&:not(:nth-of-type(1))": {
      marginTop: "20px",
    },
  },
  communityPageArticleText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    maxWidth: "235px",
    overflow: "hidden",
    textOverflow: "ellipsis",

    "& > div": {
      display: "flex",
      alignItems: "center",
      gap: "17px",
      color: "#B0AEB4",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "16px",

      "& > span:nth-of-type(2)": {
        display: "inline-block",
        borderRadius: "50%",
        background: "#5F5F6D",
        width: "6px",
        height: "6px",
      },
    },
  },
};

export default styles;
