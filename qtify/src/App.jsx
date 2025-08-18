import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero";
import AlbumSection from "./components/AlbumSection";
import NewAlbumsSection from "./components/NewAlbumsSection";
import SongsSection from "./components/SongSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />

      {/* Top Albums Section */}
      <AlbumSection title="Top Albums" />

      {/* New Albums Section */}
      <NewAlbumsSection title="New Albums" />

      <SongsSection/>
    </>
  );
}

export default App;
