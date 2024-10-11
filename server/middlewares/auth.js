const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../Models/User');

module.exports = authMid = async (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Unauthorized, please login first');

    try{
        const user = jwt.verify(token, process.env.TOKEN_SECTRET_KEY);
        req.user = await User.findById(user._id);
        next();
    }catch (error) {
        return res.status(401).send('Invalid token');
    }
}