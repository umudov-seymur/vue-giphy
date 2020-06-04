import axios from "axios";

const HTTP = axios.create({
  baseURL: "https://api.giphy.com/v1",
});

HTTP.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["api_key"] = "k25AGpqz4YsOyW6RfX0RjsPbHf8XPRsn";
  config.params["limit"] = 6;
  return config;
});

export default HTTP;
