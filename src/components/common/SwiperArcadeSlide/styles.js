const styles = {
  carouselItem: {
    transition: "transform .3s ease",
    transformOrigin: "left",

    "& img": {
      width: "100%",
      cursor: "pointer",
      margin: "0",
    },

    "&:hover": {
      transform: "scale(1.3) ",
      transition: "transform .3s ease",

      "& > div:last-of-type": {
        display: "block",
      },
    },
  },

  carouselItemDetails: {
    position: "absolute",
    display: "none",
    width: "100%",

    backgroundColor: "#111111",
    borderRadius: "0px 0px 4px 4px",

    padding: "17px 23px 10px 20px",
    marginTop: "-14px",
  },

  carouselItemDetailsButtonsRow: {
    display: "flex",

    justifyContent: "space-between",
    alignItems: "center",

    "& button": {
      backgroundColor: "#F6C929",
      padding: "8px 16px",
    },
  },

  carouselItemDetailsButtonsIcons: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  carouselItemDetailsGameName: {
    marginTop: "9px",
    fontSize: "16px",
    fontFamily: "var(--font-gosha-sans)",
    fontWeight: "700",
    lineHeight: "22px",
  },

  carouselItemDetailsGameTags: {
    fontFamily: "var(--font-gosha-sans)",
    display: "flex",
    alignItems: "center",
    gap: "8px",

    "& h6": {
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "22px",
      color: "#8A939B",
    },

    "& span": {
      display: "inline-block",
      backgroundColor: "#D9D9D9",
      width: "5px",
      height: "5px",
      borderRadius: "50%",
    },
  },
};

export default styles;
