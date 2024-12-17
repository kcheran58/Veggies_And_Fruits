const User = require('../model/User');
const jwt =require('jsonwebtoken');
require('dotenv').config();
// Create a new user and automatically create a cart
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User(req.body);
        newUser.cart = { products: [] };
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a user by ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate('cart.products');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a user by email and password
const getUserByEmailAndPassword = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email, password: req.params.password });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const accessToken=jwt.sign(
            {"userId":user._id},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:'60s'}
        )
        const refreshToken=jwt.sign(
            {"userId":user._id},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn:'1d'}
        )
        res.cookie('jwt',refreshToken,{httpOnly:true,maxAge:24 * 60 * 60 * 1000});
        res.json({ user, accessToken,refreshToken});

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update user details
const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a user
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(204).send(); // No content
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Add a product to user's cart
const addProductToCart = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.cart.products.push(req.body.productId);
        await user.save();
        res.status(201).json(user.cart);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Remove a product from user's cart
const removeProductFromCart = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.cart.products = user.cart.products.filter(id => id.toString() !== req.params.productId);
        await user.save();
        res.status(200).json(user.cart);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    addProductToCart,
    removeProductFromCart,
    getUserByEmailAndPassword
};
