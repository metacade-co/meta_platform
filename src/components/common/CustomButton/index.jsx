import { Button } from "@mui/material";
import style from "src/components/common/CustomButton/styles";

function CustomButton({ bgColor, textColor, children }) {
  return (
    <Button variant="contained" css={style(bgColor, textColor)}>
      {children}
    </Button>
  );
}

export default CustomButton;
