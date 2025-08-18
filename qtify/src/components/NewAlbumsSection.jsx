// src/components/NewAlbumsSection.jsx
import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import { getNewAlbums } from "../api";
import AlbumCart from "./AlbumCart"; 

import "swiper/css";
import "swiper/css/navigation";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const NewAlbumsSection = ({ title }) => {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const scrollRef = useRef();

 useEffect(() => {
  const fetchAlbums = async () => {
    const data = await getNewAlbums();
    setAlbums(Array.isArray(data) ? data : []);  
  };
  fetchAlbums();
}, []);


  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ px: 4, py: 3 }}>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography variant="h6">{title}</Typography>
        <Typography
          variant="body2"
          sx={{ color: "green", cursor: "pointer" }}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Collapse" : "Show All"}
        </Typography>
      </Box>

      {/* Horizontal Carousel */}
      {!showAll && albums.length > 0 && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={() => scroll("left")} sx={{ color: "green" }}>
            <ArrowBackIosNewIcon />
          </IconButton>

          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              gap: 2,
              overflowX: "auto",
              scrollBehavior: "smooth",
              flexGrow: 1,
              "&::-webkit-scrollbar": { display: "none" },
              py: 1,
            }}
          >
            {albums.map((album) => (
              <AlbumCart key={album.id} album={album} />
            ))}
          </Box>

          <IconButton onClick={() => scroll("right")} sx={{ color: "green" }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      )}

      {/* Vertical Grid when Show All */}
      {showAll && albums.length > 0 && (
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {albums.map((album) => (
            <Grid item xs={12} sm={6} md={3} key={album.id}>
              <AlbumCart album={album} />
            </Grid>
          ))}
        </Grid>
      )}

      {/* Fallback */}
      {albums.length === 0 && <Typography>No albums found.</Typography>}
    </Box>
  );
};

export default NewAlbumsSection;
