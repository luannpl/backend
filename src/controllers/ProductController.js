const ProductModel = require('../models/ProductModel');



const ProductController = {
    create(request){
        ProductModel.create(request.body)
    },

    async list(){
        let products = await ProductModel.findAll();
        for(let i = 0; i<products.length;i++){
            console.log(products[i].dataValues)

        }
    },
};

module.exports = ProductController;