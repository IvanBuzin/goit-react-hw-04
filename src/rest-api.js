import axios from "axios";
const YOUR_ACCESS_KEY = "Bw7i4yx9V27T7JXHGobGlHByXeRmq3d52Iww7s-R3KU";

export const fetchImages = async (query, page) => {
  axios.defaults.baseURL = "https://api.unsplash.com";

  const response = await axios.get("/search/photos", {
    params: {
      query,
      client_id: YOUR_ACCESS_KEY,
      page,
      per_page: 12,
    },
  });
  return {
    ImageData: response.data.results,
    totalPages: response.data.total_pages,
  };
};
