const Product = require('../models/Product');

class ProductController{

    async show(req, res){

        const allProducts = await Product.find();

        return res.json(allProducts);

    }

    async store(req, res){
        
        const {product, code, description, note} = req.body;

        const products = await Product.create({
            product,
            code,
            description,
            note
        });

        return res.json(products);
    }

}

module.exports = new ProductController();