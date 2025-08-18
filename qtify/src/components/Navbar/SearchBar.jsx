import React from "react";
import { InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "568px",
        height: "48px",
        bgcolor: "#FFFFFF",
        border: "1px solid #121212",
        borderRadius: "8px",
        px: 1,
      }}
    >
      <InputBase
        placeholder="Search a song"
        sx={{
          ml: 1,
          flex: 1,
          fontFamily: "Lato",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "100%",
          letterSpacing: "0.2px",
          color: "#121212",
        }}
      />
      <SearchIcon sx={{ color: "#121212" }} />
    </Box>
  );
};

export default SearchBar;
