// src/components/AlbumCart.jsx
import React from "react";
import { Card, CardMedia, CardContent, Typography, Chip } from "@mui/material";

const AlbumCart = ({ album, type = "album" }) => {
  return (
    <Card
      sx={{
        borderRadius: "12px",
        background: "#1e1e1e",
        color: "#fff",
        width: 200,
        flexShrink: 0,
      }}
    >
      <CardMedia
        component="img"
        image={album.image}
        alt={album.title}
        sx={{ height: 200, borderRadius: "12px 12px 0 0" }}
      />
      <CardContent sx={{ p: 1.5 }}>
        <Chip
          label={
            type === "song"
              ? `${album.likes} Likes`
              : `${album.follows} Follows`
          }
          size="small"
          sx={{
            bgcolor: "#000",
            color: "#fff",
            fontSize: "12px",
            mb: 1,
          }}
        />
        <Typography variant="body1" sx={{ fontWeight: 500, fontSize: "14px" }}>
          {album.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AlbumCart;
