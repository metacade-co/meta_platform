const styles = {
  inputWrapper: {
    padding: "9px 16px",
    border: "1px solid #222222",
    borderRadius: "4px",
    width: "360px",

    "& > div": {
      lineHeight: "initial",
      fontSize: "14px",
    },

    "& input": {
      padding: "0 0 0 16px",
      height: "auto",
      color: "rgba(204, 204, 204, 1)",

      "&::placeholder": {
        color: "rgba(204, 204, 204, 1)",
      },
    },
  },
};

export default styles;
