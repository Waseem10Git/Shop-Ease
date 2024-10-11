import React, { useState, useEffect } from 'react';
import cartApi from '../api/cart';
import Product from '../components/Product';

function Cart(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await cartApi.getProducts();
            setProducts(data);
        })();
    }, []);

    const handleRemoveProduct = async (id) => {
        await cartApi.deleteProduct(id);
        setProducts(products.filter(p => p._id !== id));
    };

    return (
        <div className="row g-3">
            {products.map(product => (
                <Product key={product._id} product={product} removeProduct={handleRemoveProduct} />
            ))}
        </div>
    );
}

export default Cart;