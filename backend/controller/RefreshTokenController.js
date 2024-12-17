const User = require('../model/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleRefresh = async (req, res) => {
    try {
        const cookies = req.cookies;
        if (!cookies?.jwt) {
            return res.status(401).json({ message: "Refresh token missing" }); // Unauthorized
        }

        const refreshToken = cookies.jwt;
       
       
        
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async(err, decoded) => {
               const user = await User.findOne({ _id:decoded.userId });
            if (err || decoded.userId !== user._id.toString()) {
                return res.status(403).json({ message: "Invalid refresh token" }); // Forbidden
            }

            const accessToken = jwt.sign(
                { userId: user._id },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '60s' }
            );

            res.json({ accessToken });
        });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { handleRefresh };
