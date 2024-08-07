const { where } = require('sequelize');
const UserModel = require('../models/UserModel');
const ProductModel = require('../models/ProductModel')
const bcrypt = require('bcrypt')

const UserController = {
    async create(request,response){
       
            let hash = await bcrypt.hash(request.body.password, 10)

            request.body.password = hash;
            await UserModel.create(request.body);  
            messageReturn = "Usuário criado"
            return response.status(201).json({
                message: hash
            })
   
        },

    async login(request,response){
        let email = request.body.email;
        let password = request.body.password;

        let user = await UserModel.findOne({
            where: {
                email
            }
        });

        let hasValid = await bcrypt.compare(password, user.password);

        response.json({
            message: hasValid
        })
    },

    async list(request, response){
        // const users = await UserModel.findOne();
        const users = await UserModel.findAll();


        // const products = await ProductModel.findAll({
        //     where:{
        //         user_id: users.id
        //     }
        // });

        const product = await ProductModel.findAll()
        // users.setDataValue('products', products);

        return response.json(users);
    },

        

    async update(request, response){
        let id = request.params.id;
        UserModel.update(request.body,{
            where:{
                id:id
            }
        })
        return response.json({
            message: "Usuário atualizado com sucesso"
        })
    },

    async delete(request, response){
        await  UserModel.destroy({
              where:{
                  id: request.params.id
              }
          })
      
          return response.json({
              message: "Usuário deletado com sucesso"
           })
        },

    async deletarTodos(request, response){
        await UserModel.destroy({
            where:{
                
            }
        });
        return response.json({
            message: "Todos os usuários foram deletados"
        })
    }
};


module.exports = UserController;