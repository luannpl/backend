const { where } = require('sequelize');
const UserModel = require('../models/UserModel');

const UserController = {
    create(request){
        UserModel.create(request.body)
    },

    async list(){
        let users = await UserModel.findOne({
            where:{
                id: 1,
            }
    });
        console.log(users.firstName);
    }
}

module.exports = UserController;