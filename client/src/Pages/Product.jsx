import {useEffect} from "react";
import productsApi from "../api/productsApi";
import {useParams} from "react-router-dom";
import SingleProduct from "../components/SingleProduct";
import ProductsNav from "../components/ProductNav";
import {toast} from "react-toastify";
import cartApi from "../api/cart";
import useData from "../hooks/useData";


function ProductScreen() {
    const { id } = useParams();
    const {data: product, loading, setLoading, error, request: productRequest} = useData();
    const {data: products, request: productsRequest} = useData();

    useEffect(() => {
        productRequest(() => productsApi.fetchProduct(id));
        productsRequest(() => productsApi.fetchProducts());
    }, [id]);

    console.log("product is: ", product);
    console.log("products is: ", products);

    const handleAddToCart = async () => {
        try {
            setLoading(true);
            await cartApi.addToCart(id);
            setLoading(false);
            toast.success(`${product.title} got added to your cart`);
        } catch (err) {
            setLoading(false);
            if (err.response) {
                console.log("Error response: ", err.response);
                // Check if the error is due to the product already being in the cart
                if (err.response.status === 400 && err.response.data === 'The product is already in your cart') {
                    toast.error('This product is already in your cart');
                } else {
                    toast.error(err.response.data || 'An error occurred');
                }
            } else {
                toast.error('Network error');
            }
        }
    };



    return (
        <div>
            {product ?
            <SingleProduct product={product} handleAddToCart={handleAddToCart}/>
                : null}
            <ProductsNav products={products} current={product}/>
        </div>
    )
}

export default ProductScreen;