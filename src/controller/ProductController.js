const Product = require('../models/Product');

class ProductController{

    async show(req, res){

        const allProducts = await Product.find();

        return res.json(allProducts);

    }

    async store(req, res){
        
        const {product, inventory, code, description, note, date} = req.body;

        const products = await Product.create({
            product,
            inventory,
            code,
            description,
            note,
            date
        });

        return res.json(products);
    }

    async destroy(req, res){

        const {item_id} = req.params;

        await Product.findByIdAndDelete({ _id: item_id });

        return res.json({Message: "Item excluido com sucesso"});
    }

    async update(req, res){

        const {item_id} = req.params;

        const {product, inventory, code, description, note} = req.body;

        await Product.updateOne({ _id: item_id }, {
            product,
            inventory,
            code,
            description,
            note,
        });

        return res.json({Message: "Dados atuaçizados com sucesso"});

    }

}

module.exports = new ProductController();