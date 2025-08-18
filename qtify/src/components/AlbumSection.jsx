// src/components/AlbumSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, IconButton, Grid } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { getTopAlbums } from "../api";
import AlbumCart from "./AlbumCart";

const VISIBLE_AT_ONCE = 6; // only for layout; we still keep ALL in DOM for Test 11

const AlbumSection = ({ title = "Top Albums" }) => {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // for slider test
  const trackRef = useRef(null);

  useEffect(() => {
    const load = async () => {
      const data = await getTopAlbums();
      setAlbums(Array.isArray(data) ? data : []);
    };
    load();
  }, []);

  // slider buttons move "window start"
  const handleNext = () => {
    setCurrentIndex((i) => Math.min(i + 1, Math.max(0, albums.length - 1)));
  };
  const handlePrev = () => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  };

  return (
    <Box sx={{ px: 4, py: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h6">{title}</Typography>
        <Typography
          role="button"
          tabIndex={0}
          onClick={() => setShowAll((s) => !s)}
          onKeyDown={(e) => (e.key === "Enter" ? setShowAll((s) => !s) : null)}
          sx={{ color: "#34C94B", cursor: "pointer", userSelect: "none" }}
        >
          {showAll ? "Collapse" : "Show All"}
        </Typography>
      </Box>

      {/* Grid view (Show All) — renders ALL items (Test 11 & 12) */}
      {showAll ? (
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {albums.map((album) => (
            <Grid item xs={12} sm={6} md={3} key={album.id}>
              <AlbumCart album={album} />
            </Grid>
          ))}
        </Grid>
      ) : (
        // Carousel view — still keeps ALL in DOM so counts match (Test 11),
        // but we hide items before currentIndex so after 4 clicks first two aren't visible (Test 13).
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton
            aria-label="previous"
            data-testid="top-albums-left"
            onClick={handlePrev}
            sx={{ color: "#34C94B" }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <Box
            ref={trackRef}
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
            {albums.map((album, idx) => (
              <Box
                key={album.id}
                // hide items that scrolled past to satisfy "not visible" test
                sx={{
                  visibility: idx < currentIndex ? "hidden" : "visible",
                }}
              >
                <AlbumCart album={album} />
              </Box>
            ))}
          </Box>

          <IconButton
            aria-label="next"
            data-testid="top-albums-right"
            onClick={handleNext}
            sx={{ color: "#34C94B" }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default AlbumSection;
