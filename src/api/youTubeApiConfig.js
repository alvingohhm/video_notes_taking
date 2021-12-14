import axios from "axios";
import env from "react-dotenv";

const youTubeApi = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: { key: env.FIREBASE_APIKEY },
});

export default youTubeApi;
