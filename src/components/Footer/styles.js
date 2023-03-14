const styles = {
  footerContainer: {
    flexGrow: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#111111",
    fontFamily: "var(--font-gosha-sans)",
    padding: "32px 65px",
  },

  footerNavigation: {
    display: "flex",
    gap: "46px",

    "& ul": {
      listStyleType: "none",

      "&>li:not(:last-of-type)": {
        marginBottom: "12px",
      },
    },
  },

  footerDivider: {
    display: "block",
    width: "1px",
    background: "#333333",
  },

  footerMcadePrice: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    "& h5": {
      alignSelf: "center",
    },
  },

  footerMcadePricePacmanSection: {
    display: "flex",
    justifyContent: "space-between",
  },

  footerMcadePricePacmanSectionIcon: {
    height: "40px",
    width: "40px",
  },

  footerInfoSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },

  footerInfoSectionMcadeLogo: {
    marginBottom: "28px",
  },

  footerInfoSectionLinks: {
    listStyleType: "none",
    display: "flex",
    gap: "24px",
    marginTop: "11px",
  },
};

export default styles;
