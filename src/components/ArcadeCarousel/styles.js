const styles = {
  arcadePage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  carouselWrapper: {
    position: "relative",

    "& slide": {
      "& > div:last-of-type": {
        position: "absolute",
        display: "none",
        background: "red",
        width: "100%",
      },
      "&:hover": {
        zIndex: "999999999",
        transform: "scale(1.2) translate3d(0,0,100000px)",
        transformOrigin: "left",

        "& > div:last-of-type": {
          position: "absolute",
          display: "block",
          zIndex: "22",
        },
      },
    },
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
    "& > div:nth(:last-of-type)": {
      position: "absolute",
      display: "none",
    },
    "& img": {
      width: "100%",
      margin: "0",
    },
  },

  carouselItemDescription: {
    width: "100%",
    height: "100px",
    background: "red",
  },
};

export default styles;
