import http from './http';
import config from "../config";

const {apiUrl} = config;

const addToCart = id => http.put(`${apiUrl}/cart/add`, {id});
const getProducts = () => http.get(`${apiUrl}/cart`);
const deleteProduct= id => http.delete(`${apiUrl}/cart/${id}`);

const cartApi = {addToCart, getProducts, deleteProduct}
export default cartApi;