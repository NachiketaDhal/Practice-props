import axios from "axios";

const KEY = "AIzaSyCv9uC3RrWt6wrpX6rrsRxXboaWDNRDR-M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
