import axios from 'axios'
import authApi from "./auth";

axios.interceptors.response.use(null, err => {
    const isClient = err.response && err.response.status >= 400 && err.response.status <500;
    if (!isClient) return alert('Unexpected error occurred, please try again later');

    Promise.reject(err);
})

axios.defaults.headers.common['x-auth-token'] = authApi.getToken() || null;

const http = axios

export default http