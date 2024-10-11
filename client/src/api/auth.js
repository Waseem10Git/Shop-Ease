import {jwtDecode} from "jwt-decode";
const key = 'token';
const setToken = token => localStorage.setItem(key, token);
const deleteToken = () => localStorage.removeItem(key);
const getToken = () => localStorage.getItem(key);
const getUser = () => {
    try{
        const token = getToken();
        console.log('token is: ', token)
        if(!token) return null;
        return jwtDecode(token);
    }catch (error) {
        console.error("Invalid token specified", error);
        return null;
    }
};

const authApi = { setToken, deleteToken, getUser, getToken };
export default authApi;