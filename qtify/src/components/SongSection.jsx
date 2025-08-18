import React, { useState, useEffect } from "react";
import { Box, Typography, Tabs, Tab, Grid, IconButton } from "@mui/material";
import AlbumCart from "./AlbumCart";
import { getSongs, getGenres } from "../api"; // You will create these API calls
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const SongsSection = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [activeTab, setActiveTab] = useState(0); // 0 = All
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const fetchSongs = async () => {
      const songsData = await getSongs();
      setSongs(songsData);
    };
    const fetchGenres = async () => {
      const genresData = await getGenres();
      setGenres(["All", ...genresData]); // Add All tab
    };
    fetchSongs();
    fetchGenres();
  }, []);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setScrollIndex(0); // Reset scroll when changing genre
  };

  // Filter songs by active genre
  const filteredSongs =
    activeTab === 0
      ? songs
      : songs.filter((song) => song.genre === genres[activeTab]);

  // Horizontal scroll controls
  const scrollRef = React.useRef();
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
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2}}>
        <Typography variant="h6">Songs</Typography>
      </Box>

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        sx={{
          mb: 1,
          "& .MuiTabs-indicator": { backgroundColor: "green" },
        }}
      >
        {genres.map((genre, idx) => (
          <Tab
            key={idx}
            label={genre}
            sx={{ textTransform: "none", color: "#fff", minHeight: 32 }}
          />
        ))}
      </Tabs>

      {/* Horizontal Scroll / Carousel */}
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
          {filteredSongs.map((song) => (
            <AlbumCart key={song.id} album={song} type="song" />
          ))}
        </Box>

        <IconButton onClick={() => scroll("right")} sx={{ color: "green" }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SongsSection;
