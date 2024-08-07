const { request } = require("express");
const { where } = require('sequelize');

const UserModel = require('../models/UserModel')

const UserCreateValidation = async (request, response, next) => {
    let messageReturn = "";
    let email = request.body.email
    
    const emailReq = await UserModel.findOne({
       where: { email }
   });

    if(!request.body.firstName || !request.body.surName || !request.body.email || !request.body.password){
        messageReturn = "firstName, surname, email e password são obrigatorios";
        return response.status(400).json({
            message: messageReturn
        })
    }
    
    else if(emailReq && emailReq.dataValues.id>0 ){
        messageReturn = "Email já cadastrado";
        return response.status(400).json({
            message: messageReturn
        })
        
    }
        next();
    }
module.exports = UserCreateValidation;