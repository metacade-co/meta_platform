const styles = (bgColor = "#222222", textColor = "#ffffff") => ({
  textTransform: "uppercase",
  fontFamily: "var(--font-joystix)",
  backgroundColor: bgColor,
  color: textColor,
  padding: "12px 20px",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "16px",
  clipPath:
    "polygon(0 3px,3px 3px,3px 0,calc(100% - 3px) 0,calc(100% - 3px) 3px,100% 3px,100% calc(100% - 3px),calc(100% - 3px) calc(100% - 3px),calc(100% - 3px) 100%,3px 100%,3px calc(100% - 3px),0 calc(100% - 3px))",
});

export default styles;
