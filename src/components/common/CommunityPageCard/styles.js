const styles = {
  // CommunityPageCard

  cardContainer: {
    background: "linear-gradient(360deg, rgba(45, 31, 78, 0.8) -0.05%, rgba(29, 24, 40, 0.8) 100.05%)",
    border: "1px solid #333333",
    borderRadius: "24px",
    padding: "26px 32px",
  },

  cardHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "24px",
    "& > button": {
      color: "#000000",
      background: "#F6C928",
      fontSize: "14px",
      padding: "5px 10px",
      "&:hover": {
        background: "#FFFFFF",
      },
    },
  },

  cardHeaderHeading: {
    display: "flex",
    alignItems: "center",

    "& > h3": {
      fontFamily: "var(--font-joystix)",
      fontWeight: "400",
      fontSize: "20px",
      lineHeight: "20px",
      marginRight: "15px",
    },
  },

  // Small card
  smallCard: {
    "& > ul ": {
      color: "#D0CED6",
      fontWeight: "700",
      paddingLeft: "20px",
      "& li": {
        listStyleType: "square",
      },
    },
    "& > h4": {
      fontWeight: "700",
      fontSize: "32px",
      lineHeight: "40px",
      marginBottom: "16px",

      "& > span:nth-of-type(2)": {
        color: "#F6C929",
      },
      "& > span:nth-of-type(3)": {
        color: "#009FE3",
      },
      "& > span:nth-of-type(4)": {
        color: "#B231C4",
      },
    },

    "& > p": {
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "22px",
      color: "#D0CED6",
      "& > a": {
        color: "#009FE3",
      },
    },
  },
};

export default styles;
