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

    async listarUm(request, response){
        let id = request.params.id;
        console.log(id)
        const product = await ProductModel.findOne({
            where: { id }
        });
        response.json(product);

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
      },

      async deletarTodos(request,response){
        await ProductModel.destroy({
            where: {}
        });
        return response.json({
            message: "Produtos deletados"
        })
      }
      
    } 

module.exports = ProductController;