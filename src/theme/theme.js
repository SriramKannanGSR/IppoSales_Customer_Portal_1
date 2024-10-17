import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const primaryColor = "#ff570a";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: grey[300],
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: grey[400],
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: primaryColor,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
          "&:active": {
            boxShadow: "none",
          },
        },
      },
    },
  },
});

export default theme;
