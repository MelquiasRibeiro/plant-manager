import axios from 'axios';

const api = axios.create({
    baseURL: 'https://plantsbackend.herokuapp.com',
});

export default api;
