const styles = {
  arcadePage: {
    padding: "44px 0 30% 0",
    display: "flex",
    flexDirection: "column",
    overflowX: "hidden !important",
    margin: "0 0 0 20px",
  },
  arcadePageCarouselsBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    marginBottom: "56px",
  },

  arcadePageNetworkHeading: {
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "24px",
    fontFamily: "var(--font-joystix)",
    color: "#8A939B",
  },

  arcadePageTitleBlock: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "28px",
  },

  arcadePageTitleBlockMessage: {
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

  arcadePageNetworkSection: {
    position: "absolute",
    right: "20px",
    display: "flex",
    alignItems: "center",
    gap: "17px",

    "& select": {
      textTransform: "uppercase",
      fontFamily: "var(--font-joystix)",
      fontSize: "14px",
      lineHeight: "24px",
      background: "transparent",
      padding: "12px 20px",
      borderRadius: "4px",
      border: "1px solid #333333",

      "& option": {
        textTransform: "uppercase",
        fontFamily: "var(--font-joystix)",
        fontSize: "14px",
        lineHeight: "24px",
        background: "#333333",
        padding: "12px 20px",

        "&:selected": {
          background: "#333333",
        },
      },
    },
  },

  arcadePageButton: {
    alignSelf: "center",
  },
};

export default styles;
