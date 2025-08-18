import React from "react";
import { Box, Typography } from "@mui/material";
import headphones from "../assets/hero_headphones.png"; // <-- make sure this exists

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#121212",
        color: "#FFFFFF",
        px: 10,
        py: 6,
        borderRadius: "12px",
      }}
    >
      {/* Inner Box that contains text + image together */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 4, // spacing between text and image
        }}
      >
        {/* Text */}
        <Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, fontSize: "24px", mb: 1 }}
          >
            100 Thousand Songs, ad-free
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: 400, fontSize: "20px" }}
          >
            Over thousands podcast episodes
          </Typography>
        </Box>

        {/* Image */}
        <Box
          component="img"
          src={headphones}
          alt="Hero Headphones"
          sx={{ height: "180px", objectFit: "contain" }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
