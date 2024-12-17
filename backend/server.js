const express = require('express');
const app = express();
const PORT = 3500;
const { db } = require('./config/db');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const jwtVerify = require('./config/jwtVerify');
const {handleRefresh} = require('./controller/RefreshTokenController')
const {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} = require('./controller/ProductController');
const {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    addProductToCart,
    removeProductFromCart,
    getUserByEmailAndPassword
} = require('./controller/UserController');

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

db();

app.get('/', (req, res) => {
    res.send("Server is running.");
});

app.get('/auth',handleRefresh);
// User CRUD
app.post('/users', createUser);
app.get('/user/:email/:password', getUserByEmailAndPassword);
app.use(jwtVerify);
app.get('/users', getUsers);
app.get('/users/:id', getUserById);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);

// User's cart product routes
app.post('/users/:userId/cart/products', addProductToCart);
app.delete('/users/:userId/cart/products/:productId', removeProductFromCart);

// Product CRUD
app.get('/products', getAllProducts);
app.post('/products', createProduct);
app.get('/product/:id', getProductById);
app.put('/product/:id', updateProduct);
app.delete('/product/:id', deleteProduct);

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});
