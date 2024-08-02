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

const ProductController = require('./controllers/ProductController');

const request = {
    body:{
        name: "Blusa2",
        description: "Blusa Preta",
        price: 49.99,
        enabled: 1,
        stock: 5
    }
};

// ProductController.create(request);
ProductController.list();