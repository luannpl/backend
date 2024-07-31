const User = require('../models/UserModel');
const Category = require('../models/CategoryModel');
const Product = require('../models/ProductModel')
const connection = require('../database/connection');

connection.sync({force: true});