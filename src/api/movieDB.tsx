import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/movie';
const api_key = 'b6d42cbdb1678d78ea47cf02f1eba9cf';
//get
export const movieDBGet = axios.create({
    baseURL: baseURL,
    params: {
        api_key: api_key,
        language: 'en-US',
        page: 1
    }
});

//post
export const movieDBPost = axios.create({
    baseURL: baseURL,
    params: {
        api_key: api_key
    }
});