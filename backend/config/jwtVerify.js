const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtVerify = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header missing' }); // Unauthorized
    }

    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
         process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' }); // Forbidden
        }
        req.user = decoded.userId; // Assuming 'userId' is in the token payload
        next();
    });
};

module.exports = jwtVerify;
