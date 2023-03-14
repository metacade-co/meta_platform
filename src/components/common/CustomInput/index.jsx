import { InputAdornment, TextField } from "@mui/material";
import { SearchIcon } from "src/assets/icons";
import styles from "src/components/common/CustomInput/styles";

function CustomInput(props) {
  return (
    <TextField
      css={styles.inputWrapper}
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant="standard"
      {...props}
    />
  );
}

export default CustomInput;
