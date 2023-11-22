const express = require("express");
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

//import route
const product = require("./routes/productRoute.js");

app.use('/api/v1', product);


module.exports = app;