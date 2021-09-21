

const { Schema, model } = require("mongoose");



// TODO: Please make sure you edit the user model to whatever makes sense in this case
const productSchema = new Schema({

    brand: String,
    name: String,
    description: String,
    category: String,
    price: Number,
    rating: Number,
    image_link: String,
    tag_list: String,


});

const User = model("Product", productSchema);

module.exports = Product;