import http from './http';
import config from "../config";

const {apiUrl} = config;

const fetchProducts = () => http.get(`${apiUrl}/products`);
const createProduct = data => http.post(`${apiUrl}/products`, data);
const fetchProduct = id => http.get(`${apiUrl}/products/${id}`);

const productsApi = {createProduct, fetchProducts, fetchProduct}
export default productsApi;