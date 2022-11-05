const jwt = require('jsonwebtoken')
const User = require("../models/userModel")

const auth = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1]
            const decoded = jwt.verify(token, "OMJAVIR")
            req.user = await User.findById(decoded.id).select('-password')
            next();
        } catch (error) {
            res.status(400).json("Not authorized")
            console.log("Error:", error);
        }
    }
}

module.exports = { auth }