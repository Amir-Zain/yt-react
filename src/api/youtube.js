import Axios from "axios";

const KEY = "AIzaSyCkRZUS87tyQjoncN4boWMEYv2O4zpiH2g";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
