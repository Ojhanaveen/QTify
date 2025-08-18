

export const CarouselPrevButton = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      background: "transparent",
      border: "none",
      cursor: "pointer",
    }}
  >
    {/* Replace with SVG from Figma */}
    <svg width="24" height="24">
      <path d="M15 18l-6-6 6-6" stroke="green" strokeWidth="2" fill="none" />
    </svg>
  </button>
);

export const CarouselNextButton = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      background: "transparent",
      border: "none",
      cursor: "pointer",
    }}
  >
    {/* Replace with SVG from Figma */}
    <svg width="24" height="24">
      <path d="M9 6l6 6-6 6" stroke="green" strokeWidth="2" fill="none" />
    </svg>
  </button>
);
