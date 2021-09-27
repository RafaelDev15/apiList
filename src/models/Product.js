const {Schema, model} = require('mongoose');

const ProductSchema = new Schema({
    product: String,
    inventory: Number,
    code: Number,
    description: String,
    note: String,
    date: String
});

module.exports = model('Product', ProductSchema);