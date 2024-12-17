const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    url: { type: String, required: true },
    name: { type: String, required: true },
    company: { type: String, required: true },
    content: { type: String, required: true },
    price: { type: Number, required: true }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
