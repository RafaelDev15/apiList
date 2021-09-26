const {Schema, model} = require('mongoose');

const ProductSchema = new Schema({
    product: String,
    code: Number,
    description: String,
    note: String
});

module.exports = model('Product', ProductSchema);