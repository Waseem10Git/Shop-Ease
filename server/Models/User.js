const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const env = require('dotenv')

env.config();

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 5,
        max: 25,
    },
    password: {
        type: String,
        require: true,
        min: 8,
        max: 300,
    },
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    }]
});

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(this.password, salt);

    this.password = hashed;

    next();
})

userSchema.methods.genAuthToken = function () {
    return jwt.sign({ _id: this._id, username: this.username }, process.env.TOKEN_SECTRET_KEY);
}

userSchema.methods.checkPassword = function (password) {
    return bcrypt.compare(password, this.password);
}

module.exports = User = mongoose.model('User', userSchema);