import axios from 'axios';
const instance = axios.create({
    // baseURL: 'http://localhost:3050'
    baseURL: 'http://192.168.0.118:8080',
    withCredentials: true,
});

export default instance;