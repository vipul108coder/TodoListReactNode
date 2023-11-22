const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    title:String,
    description:String,
})

module.exports = mongoose.model("Product", productSchema);