const styles = {
  cardContainer: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "16px",

    "& > p": {
      fontFamily: "var(--font-gosha-sans)",
      textOverflow: "ellipsis",
    },
  },
};

export default styles;
