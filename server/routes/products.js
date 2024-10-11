const express = require('express');
const router = express.Router();
const Product = require('../Models/Product');
const authMid = require('../middlewares/auth');

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id).populate('user');
    if (!product) return res.status(404).send("Couldn't find a product with given id");
    return res.send(product);
})

router.get('/', authMid, async (req, res) => {
    const products = await Product.find();
    return res.send(products);
});

router.post('/', authMid, async (req, res) => {
    const {title, about, img, price} = req.body;

    let product = new Product({title, about, img, price, user: req.user._id});
    product = await product.save();

    return res.send(product);
});

module.exports = router;