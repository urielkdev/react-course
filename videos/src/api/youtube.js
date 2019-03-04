import axios from "axios";

const KEY = "AIzaSyDJkEiZYOLTEG5J8n67_ZZb0LF7s2JsY8c";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});