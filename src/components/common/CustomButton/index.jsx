import { Button } from "@mui/material";
import style from "src/components/common/CustomButton/styles";

function CustomButton({ bgColor, children }) {
  return (
    <Button variant="contained" css={style(bgColor)}>
      {children}
    </Button>
  );
}

export default CustomButton;
