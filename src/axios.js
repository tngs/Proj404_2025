import axios from 'axios';
const instance = axios.create({
    // baseURL: 'http://localhost:3050'
    baseURL: 'http://34.229.134.122:8080',
    withCredentials: true,
});

export default instance;