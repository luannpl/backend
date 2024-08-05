const { where } = require('sequelize');
const UserModel = require('../models/UserModel');

const UserController = {
    async create(request,response){
        let messageReturn = "";
        let email = request.body.email
         const emailReq = await UserModel.findOne({
            where: { email }
        });

        if(!request.body.firstName || !request.body.surName || !request.body.email || !request.body.password){
          messageReturn = "firstName obrigatorio";
        }
        else if(emailReq && emailReq.dataValues.id>0 ){
            messageReturn = "Email já cadastrado"
        }
        else{

            UserModel.create(request.body);
            messageReturn = "Usuário criado"
   
        }

         

        return response.json({
            message: messageReturn
        })
    },

    async list(request, response){
        const users = await UserModel.findAll();
        response.json(users);
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
        }
};


module.exports = UserController;