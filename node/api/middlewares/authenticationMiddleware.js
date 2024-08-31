const jwt = require('jsonwebtoken');
const HttpStatusCodes = require('../utils/constants/httpStatusCodes.js');
const ErrorMessages = require('../utils/messages/errorMessages.js');

function authenticate(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.status(HttpStatusCodes.UNAUTHORIZED).json({error: ErrorMessages.UNAUTHORIZED}); 

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(HttpStatusCodes.UNAUTHORIZED).json({error: ErrorMessages.UNAUTHORIZED}); 

        req.user = user; 
        next(); 
    });
}

module.exports = authenticate;