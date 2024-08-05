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






const UserController = require('./controllers/UserController')
const ProductController = require('./controllers/ProductController')
// app.get('/', function(request, response){
//     response.send("Minha primeira rota 1 backend");
// });


// GET
app.get('/produtos', ProductController.list);
app.get('/users', UserController.list)

// POST
app.post('/produtos', ProductController.create)
app.post('/users/', UserController.create);


// PUT

app.put('/users/:id', UserController.update)
app.put('/produtos/:id', ProductController.update)

// DELETE
app.delete('/users/:id', UserController.delete)
app.delete('/produtos/:id', ProductController.delete)



app.listen(3000);