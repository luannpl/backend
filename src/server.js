const express = require('express');
const app = express();

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
  }
  app.use(allowCrossDomain);
  

app.use(express.json())

const UserController = require('./controllers/UserController')
const ProductController = require('./controllers/ProductController');
const UserCreateValidation = require('./middleware/UserCreateValidation');
// app.get('/', function(request, response){
//     response.send("Minha primeira rota 1 backend");
// });

// POST
app.post('/produtos', ProductController.create)
app.post('/users/',UserCreateValidation, UserController.create);
app.post('/login', UserController.login);

// GET
app.get('/produtos', ProductController.list);
app.get('/users', UserController.list)
app.get('/produtos/:id', ProductController.listarUm)

// PUT

app.put('/users/:id', UserController.update)
app.put('/produtos/:id', ProductController.update)

// DELETE
app.delete('/users/:id', UserController.delete)
app.delete('/produtos/:id', ProductController.delete)

app.delete('/users', UserController.deletarTodos)
app.delete('/produtos', ProductController.deletarTodos)

app.listen(3000);