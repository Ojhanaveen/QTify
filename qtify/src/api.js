import axios from "axios";

const BASE_URL = "https://qtify-backend-labs.crio.do";

// Fetch Top Albums
export const getTopAlbums = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/albums/top`);
    return response.data;
  } catch (error) {
    console.error("Error fetching top albums:", error);
    return [];
  }
};

// Fetch New Albums
export const getNewAlbums = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/albums/new`);
    return response.data;
  } catch (error) {
    console.error("Error fetching new albums:", error);
    return [];
  }
};

export const getSongs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/songs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching songs:", error);
    return [];
  }
};

export const getGenres = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/genres`);
    const raw = response.data;
    // Some versions return { data: [...] }, some return [...]
    const list = Array.isArray(raw) ? raw : raw?.data;
    if (!Array.isArray(list)) return [];
    return list.map((g) => (typeof g === "string" ? g : g.key)).filter(Boolean);
  } catch (error) {
    console.error("Error fetching genres:", error);
    return [];
  }
};


