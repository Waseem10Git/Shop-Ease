import http from './http'
import config from "../config";

const {apiUrl} = config;

const createUser = data => http.post(`${apiUrl}/users`, data)
const loginUser = data => http.post(`${apiUrl}/auth`, data)

const usersApi = {createUser, loginUser}

export default usersApi