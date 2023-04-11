const styles = {
  gameDetailsContainer: {
    background: "#000000",
    border: "1px solid #333333",
    borderRadius: "24px",
    margin: "8px 26px 10%",
    padding: "32px 40px",
  },

  gameDetailsBackButton: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
    cursor: "pointer",
    textTransform: "uppercase",
    fontFamily: "var(--font-gosha-sans)",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "16px",
    fontStyle: "normal",
  },

  gameDetailsHeaderLeft: {
    display: "flex",
    flexDirection: "column",
    gap: "28px",
  },

  gameDetailsIconBlock: {
    display: "flex",
    gap: "44px",
  },

  gameDetailsGameNameBlock: {
    "& > h3": {
      fontFamily: "var(--font-gosha-sans)",
      fontWeight: "700",
      fontSize: "32px",
      lineHeight: "40px",
    },
  },

  gameDetailsHeader: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: "20px",
  },

  gameDetailsTagsBlock: {
    display: "flex",
    alignItems: "center",
    marginTop: "8px",
    gap: "20px",
  },

  gameDetailsGameTagsBordered: {
    display: "flex",
    alignItems: "center",
    gap: "8px",

    "& > span": {
      padding: "4px 8px",
      color: "#B0AEB4",
      fontFamily: "var(--font-joystix)",
      fontWeight: "400",
      fontSize: "13px",
      lineHeight: "16px",
      border: "1px solid #B0AEB4",
      borderRadius: "2px",
    },
  },

  gameDetailsGameTags: {
    fontFamily: "var(--font-gosha-sans)",
    display: "flex",
    alignItems: "center",
    gap: "8px",

    "& h6": {
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "22px",
      color: "#FFFFFF",
    },

    "& span": {
      display: "inline-block",
      backgroundColor: "#D9D9D9",
      width: "5px",
      height: "5px",
      borderRadius: "50%",
    },
  },

  gameDetailsButtonsBlock: {
    marginTop: "23px",
    display: "flex",
    alignItems: "center",
    "& > button": {
      background: "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #32B5FC",
    },
    "& > button:last-of-type": {
      background: "#F6C928",
      marginLeft: "20px",
      color: "#000000",
    },
  },

  gameDetailsButtonsBlockButtonsSmall: {
    display: "flex",
    gap: "48px",
    marginLeft: "28px",

    "& > svg": {
      width: "24px",
      height: "24px",
    },
  },

  gameDetailsChartSection: {
    marginBottom: "72px",
    "& > div": {
      display: "flex",
      background: "linear-gradient(360deg, #2D1F4E -0.05%, #1D1828 100.05%)",
      border: "1px solid #333333",
      borderRadius: "24px",
      padding: "24px",
      gap: "20px",
    },
    "& > h3": {
      fontFamily: "var(--font-joystix)",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "16px",
      marginBottom: "16px",
    },
  },
  gameDetailsChartSectionChartWrapper: {
    flex: "1 1 70%",
  },
  gameDetailsChartSectionViews: {
    display: "flex",
    gap: "16px",
    padding: "8px",
    borderRadius: "24px",
    background: "#111111",
    fontFamily: "var(--font-joystix)",
    fontSize: "16px",
    fontWeight: "400",
    flexGrow: "0",
  },

  gameDetailsChartSectionView: (active) => ({
    color: active ? "#000000" : "#B0AEB4",
    background: active ? "#FFFFFF" : "none",
    padding: "8px 16px",
    borderRadius: "16px",
  }),

  gameDetailsChartSectionChartInfoBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    flexGrow: "0",
    flexShrink: "1",
  },

  gameDetailsChartSectionChartInfo: {
    background: "rgba(0,0,0,0.4)",
    borderRadius: "14px",
    mixBlendMode: "normal",
    flexGrow: "1",
  },

  gameDetailsScreenshots: {
    display: "flex",
    gap: "24px",
    marginBottom: "5%",

    "& > img": {
      flexGrow: "1",
    },
  },
  gameDetailsDescription: {
    marginBottom: "20px",
    "& > h3": {
      fontFamily: "var(--font-joystix)",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "16px",
      marginBottom: "13px",
    },

    "& > div > p": {
      fontFamily: "var(--font-gosha-sans)",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "22px",
      color: "#D0CED6",
    },
  },

  gameDetailsPublisher: {
    fontFamily: "var(--font-gosha-sans)",
    "& > h3": {
      fontFamily: "var(--font-joystix)",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "16px",
      marginBottom: "26px",
    },
    "& > ul": {},
  },
};

export default styles;
