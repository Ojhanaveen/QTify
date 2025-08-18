// src/components/SongsSection.jsx
import React, { useEffect, useState } from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import { getSongs, getGenres } from "../api";
import AlbumCart from "./AlbumCart";

const SongsSection = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState(["All"]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const load = async () => {
      const s = await getSongs();
      setSongs(Array.isArray(s) ? s : []);

      const g = await getGenres();
      // handle both shapes: [{key,label}] or just strings
      const keys = Array.isArray(g)
        ? g.map((x) => (typeof x === "string" ? x : x?.key)).filter(Boolean)
        : [];
      setGenres(["All", ...keys]);
    };
    load();
  }, []);

  const handleTabChange = (_e, newValue) => setActiveTab(newValue);

  const filtered =
    activeTab === 0
      ? songs
      : songs.filter((song) => song?.genre?.key === genres[activeTab]);

  return (
    <Box sx={{ px: 4, py: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
        <Typography variant="h6">Songs</Typography>
      </Box>

      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        sx={{
          mb: 2,
          "& .MuiTabs-indicator": { backgroundColor: "#34C94B" },
          "& .MuiTab-root": { textTransform: "none", color: "#FFFFFF" },
        }}
      >
        {genres.map((g, i) => (
          <Tab key={i} label={g} />
        ))}
      </Tabs>

      {/* Render ALL cards so count matches API (Test 14) */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {filtered.map((song) => (
          <AlbumCart key={song.id} album={song} type="song" />
        ))}
      </Box>
    </Box>
  );
};

export default SongsSection;
