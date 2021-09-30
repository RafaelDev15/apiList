const {Router} = require('express');
const ProductController = require('./controller/ProductController');
const configUpload = require('./config/upload');
const multer = require('multer');

const routes = Router();

const upload = multer(configUpload);

routes.get('/allProducts', ProductController.show);

routes.post('/products', upload.single('image'), ProductController.store);

routes.put('/productUpdate/:item_id', upload.single('image'), ProductController.update);

routes.delete('/productsDelete/:item_id', ProductController.destroy);

module.exports = routes;