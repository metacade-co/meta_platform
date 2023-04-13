const styles = {
  switcherContainer: (isFirstButtonActive) => ({
    display: "flex",
    border: "2px solid #FFFFFF",
    clipPath:
      "polygon(0 2px,2px 2px,2px 0,calc(100% - 2px) 0,calc(100% - 2px) 2px,100% 2px,100% calc(100% - 2px),calc(100% - 2px) calc(100% - 2px),calc(100% - 2px) 100%,2px 100%,2px calc(100% - 2px),0 calc(100% - 2px))",

    "& > button": {
      background: "none",
      border: "none",
      padding: "5px 8px",
      fontFamily: "var(--font-joystix)",
      fontSize: "10px",
      lineHeight: "14px",
      fontWeight: 400,
      clipPath:
        "polygon(0 2px,2px 2px,2px 0,calc(100% - 2px) 0,calc(100% - 2px) 2px,100% 2px,100% calc(100% - 2px),calc(100% - 2px) calc(100% - 2px),calc(100% - 2px) 100%,2px 100%,2px calc(100% - 2px),0 calc(100% - 2px))",

      "&:first-of-type": {
        background: isFirstButtonActive ? "#FFFFFF" : "transparent",
        color: isFirstButtonActive ? "#000000" : "#FFFFFF",
      },
      "&:last-of-type": {
        background: !isFirstButtonActive ? "#FFFFFF" : "transparent",
        color: !isFirstButtonActive ? "#000000" : "#FFFFFF",
      },
    },
  }),
};

export default styles;
