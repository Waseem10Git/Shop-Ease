const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const url = "mongodb+srv://wasim10ghabour:Xpdo8Uk5iT35HEgI@main.hyehf.mongodb.net/?retryWrites=true&w=majority&appName=main"
const localUrl = "mongodb://localhost:27017/ECommerce"

mongoose.connect(localUrl)
    .then(() => console.log('connect successfully'))
    .catch(err => console.log(err));

app.use(cors());
app.use(express.json());
require('./routes')(app);

app.use(require('./middlewares/error'));

app.listen(5000, () => console.log('Server is running'));