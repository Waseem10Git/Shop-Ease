const express = require('express');
const router = express.Router();
const authMid = require('../middlewares/auth');
const Product = require('../Models/Product');
const User = require('../Models/User');

router.get('/', authMid, async (req, res) => {
    let products = [];

    for (product of req.user.cart)
        products.push(await Product.findById(product._id))

    return res.send(products);
});

router.put('/add', authMid, async (req, res) => {
    const { id } = req.body;
    if (!id) return res.status(400).send('Product id is required');

    const product = await Product.findById(id);
    if (!product) return res.status(404).send('The product you are looking for is not found');

    console.log('User cart:', req.user.cart);
    console.log('Product ID:', product._id);

    if (req.user.cart.includes(product._id.toString())) {
        console.log('Product is already in the cart');
        return res.status(400).send('The product is already in your cart');
    }

    const user = await User.findByIdAndUpdate(req.user._id, {
        cart: [...req.user.cart, product._id]
    }, { new: true, useFindAndModify: false });

    return res.send(user);
});

router.delete('/:id', authMid, async (req, res) => {
    const { id } = req.params;
    if (!id) return res.status(400).send('Product id is required');

    const product = await Product.findById(id);
    if (!product) return res.status(404).send('The product you are trying to remove is not found');

    if (!req.user.cart.some(item => item.equals(product._id))) {
        return res.status(400).send('This product is not in your cart');
    }

    const user = await User.findByIdAndUpdate(req.user._id, {
        $pull: { cart: product._id }
    }, { new: true, useFindAndModify: false });

    return res.send(user);
});

module.exports = router;