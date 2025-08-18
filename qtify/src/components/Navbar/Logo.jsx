import React from "react";
import { Box } from "@mui/material";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="QTify Logo" style={{ height: "34px" }} />
    </Box>
  );
};

export default Logo;
