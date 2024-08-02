// const UserController = require('./controllers/UserController');

// const request = {
//     body: {
//         firstName: "Luan",
//         surName: "Pessoa",
//         email: "luan@123",
//         password: "12345"
//     }
// };

// UserController.create(request);
// UserController.list();

// const ProductController = require('./controllers/ProductController');

// const request = {
//     body:{
//         name: "Blusa2",
//         description: "Blusa Preta",
//         price: 49.99,
//         enabled: 1,
//         stock: 5
//     }
// };

// // ProductController.create(request);
// ProductController.list();

const express = require('express');
const app = express();

app.use(express.json())





const ProductModel = require('./models/ProductModel')
const UserModel = require('./models/UserModel')

app.get('/', function(request, response){
    response.send("Minha primeira rota 1 backend");
});

app.get('/produtos', async function(request, response){
    const products = await ProductModel.findAll();
    response.json(products);
});

app.post('/produtos', async function(request, response){
    ProductModel.create(request.body);
    return response.json({
        message: "Produto cadastrado com sucesso"
    })
})

app.delete('/produtos/:id', async function(request, response){
    ProductModel.destroy({
        where:{
            id: request.params.id
        }
    })

    return response.json({
        message: "Produto deletado com sucesso"
     })
  });

app.get('/users', async function(request, response){
    const users = await UserModel.findAll();
    response.json(users);
});

app.post('/users/', async function(request, response){
    // console.log("Body", request.body);
    // console.log("Query", request.query);
    // console.log("Params", request.params);
    UserModel.create(request.body);
    return response.json({
        message: "Usuario criado com sucesso"
    })

    // UserModel.create()
});




app.listen(3000);