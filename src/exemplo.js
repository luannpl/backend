// console.log(__dirname);
// console.log(__filename);

// const MinhaFuncao = require('./MinhaFuncao.js');
// MinhaFuncao();
// // import MinhaFuncao from "./MinhaFuncao";


// async function AsyncFunction(){
//     return 'Função Assicrona'
// }

// async function OutraFunction(){
//     return await AsyncFunction();
// }

// console.log(OutraFunction());

// const { QueryTypes, DataTypes } = require('sequelize');
// const connection = require('./database/connection');

// async function execute(){
//     const resultado = await connection.query("DESCRIBE produtos",{
//         type: QueryTypes.DESCRIBE
//     });
    
//     const produtos = await connection.query("SELECT * FROM produtos WHERE id = 1",{
//         type: QueryTypes.SELECT
//     });

//     const update = await connection.query("UPDATE produtos SET name = 'Iphone Teste' WHERE id = 1",{
//         type: QueryTypes.UPDATE
//     });

//     console.log(update);
// }


// // user.sync();
// // category.sync();

// connection.sync({alter: true}); /*pega todos*/

// const User = require('./models/UserModel');

// User.create({
//     firstName: "Luan",
//     surName: "Michele",
//     email: "luan@123",
//     password: "123"
// });

// User.destroy({
//     where: {
//         id: 3,
//     }
// })
