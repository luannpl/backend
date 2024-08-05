const ProductModel = require('../models/ProductModel');



const ProductController = {
    create(request, response){
        ProductModel.create(request.body);
        return response.json({
            message: "Produto cadastrado com sucesso"
        })
        
    },

    async list(request, response){
        const products = await ProductModel.findAll();
        response.json(products);
    },

    async update(request, response){
        let id = request.params.id;
        ProductModel.update(request.body,{
            where:{
                id:id
            }
        })
        return response.json({
            message: "Produto atualizado com sucesso"
        })
    },

    async delete(request, response){
      await  ProductModel.destroy({
            where:{
                id: request.params.id
            }
        })
    
        return response.json({
            message: "Produto deletado com sucesso"
         })
      }
    }

module.exports = ProductController;