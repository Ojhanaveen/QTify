// src/components/AlbumCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // ✅ v11
import "swiper/css";
import "swiper/css/navigation";
import AlbumCart from "./AlbumCart"; // ✅ use correct component

const AlbumCarousel = ({ albums }) => {
  return (
    <Swiper
      modules={[Navigation]} // pass modules prop
      navigation
      spaceBetween={16}
      slidesPerView={2} // default
      breakpoints={{
        600: { slidesPerView: 2 },
        900: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      }}
      style={{ padding: "1rem 0" }}
    >
      {albums.map((album) => (
        <SwiperSlide key={album.id}>
          <AlbumCart album={album} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AlbumCarousel;
