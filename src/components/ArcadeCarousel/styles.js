const styles = {
  arcadePage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  carouselWrapper: {
    position: "relative",

    "& slide": {
      "&:hover": {
        zIndex: "20",
      },
    },
  },

  carouselSwiperButton: (isButtonVisible, isSlideHovered) => ({
    display: isButtonVisible ? "flex" : "none",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    position: "absolute",
    right: "0",
    width: "132px",
    zIndex: "2",
    transition: "all .1s ease-in-out",
    opacity: isSlideHovered ? "1" : "0",
    background: "linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",

    "& svg": {
      opacity: "0",
      transition: "opacity .2s ease-in-out",
    },

    "&:hover": {
      background: "linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",

      "& svg": {
        opacity: "1",
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
