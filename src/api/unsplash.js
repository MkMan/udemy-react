import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ceac617c6f959410e722b0b03e55e47cf1d05f34bd4a1d70abfbea0d48b3b077'
  }
});