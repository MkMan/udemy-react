import axios from 'axios';

const KEY = 'AIzaSyDx6c9Kd94UDK7DYS0RTtTMPulMpIn2x9A';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});