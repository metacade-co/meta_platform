const styles = {
  aloha: {
    color: "black",
  },
  arcadePage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  carouselContainer: {
    margin: "0 20px 40px",
  },

  carouselWrapper: {
    position: "relative",
  },

  carouselSwiperButton: (isButtonVisible) => ({
    display: isButtonVisible ? "flex" : "none",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    position: "absolute",
    right: "0",
    width: "132px",
    zIndex: "2",
    background: "linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",

    "& svg": {
      opacity: "0",
      transition: "opacity .2s ease-in-out",
    },

    "&:hover": {
      background: "linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",

      "& svg": {
        opacity: "1",
        transition: "opacity .2s ease-in-out",
      },
    },
  }),

  carouselTitle: {
    fontFamily: "var(--font-gosha-sans)",
    fontSize: "20px",
    lineHeight: "22px",
    marginBottom: "16px",
  },

  carouselItem: {
    width: "256px",
    height: "136px",

    "& img": {
      width: "100%",
    },
  },
};

export default styles;
