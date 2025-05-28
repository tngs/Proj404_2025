import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://localhost:3050'
    baseURL: 'http://172.21.238.142:8080',
    withCredentials: true,
});

export default instance;