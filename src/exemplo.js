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

const { QueryTypes } = require('sequelize');
const connection = require('./database/connection');

async function execute(){
    const resultado = await connection.query("DESCRIBE produtos",{
        type: QueryTypes.DESCRIBE
    });
    
    const produtos = await connection.query("SELECT * FROM produtos WHERE id = 1",{
        type: QueryTypes.SELECT
    });

    const update = await connection.query("UPDATE produtos SET name = 'Iphone Teste' WHERE id = 1",{
        type: QueryTypes.UPDATE
    });

    console.log(update);
}

execute();