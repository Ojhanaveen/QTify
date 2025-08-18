
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import Logo from "./Logo"
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "#34C94B", height: "74px", justifyContent: "center" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left: Logo */}
        <Logo />

        {/* Middle: SearchBar */}
        <SearchBar />

        {/* Right: Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#121212",
            color: "#34C94B",
            textTransform: "none",
            borderRadius: "8px",
            px: 2,
            "&:hover": { backgroundColor: "#000" },
          }}
        >
          Give Feedback
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
